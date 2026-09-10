"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/language-provider";

type RailItem = { id: string; label: string };

/**
 * Two things at once:
 *  1. a hairline reading-progress bar pinned under the navbar, and
 *  2. a right-edge section rail (desktop) that tracks which section is
 *     in view and lets you jump between them.
 *
 * The bar is a CSS scroll-driven animation (zero JS) on modern browsers;
 * a tiny passive rAF listener fills in for the rest. The rail uses one
 * IntersectionObserver.
 */
export function ScrollProgress() {
  const pathname = usePathname();
  const { tf } = useLanguage();

  const barRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === "/";
  const rail: RailItem[] = isHome
    ? [
        { id: "hero", label: tf({ en: "Top", bn: "শুরু" }) },
        { id: "about", label: tf({ en: "Restaurant", bn: "রেস্তোরাঁ" }) },
        { id: "story", label: tf({ en: "Story", bn: "গল্প" }) },
        { id: "featured", label: tf({ en: "Signature", bn: "সিগনেচার" }) },
        { id: "visit", label: tf({ en: "Visit", bn: "যোগাযোগ" }) },
      ]
    : [];

  const [active, setActive] = useState<string>(rail[0]?.id ?? "");
  // hero photo, the signature band and the closing CTA are the dark planes.
  const overDark =
    active === "hero" || active === "featured" || active === "visit";

  /* progress bar — JS fallback only where CSS scroll timelines are absent */
  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const supported =
      typeof CSS !== "undefined" &&
      CSS.supports?.("animation-timeline: scroll()");
    if (supported) return;

    el.dataset.js = "";
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      el.style.setProperty("--sp", max > 0 ? String(h.scrollTop / max) : "0");
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* active-section tracking */
  useEffect(() => {
    if (!rail.length) return;
    const els = rail
      .map((r) => document.getElementById(r.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // rail is rebuilt every render; its ids only change with route/language
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, rail.map((r) => r.id).join()]);

  return (
    <>
      {/* progress hairline */}
      <div
        ref={barRef}
        aria-hidden
        className="scroll-progress fixed inset-x-0 top-0 z-[60] h-[3px] bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300"
      />

      {/* section rail — desktop only */}
      {rail.length > 0 && (
        <nav
          aria-label="Sections"
          className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
        >
          <ul className="flex flex-col items-end gap-4">
            {rail.map((item) => {
              const on = active === item.id;
              return (
                <li key={item.id} className="pointer-events-auto">
                  <a
                    href={`#${item.id}`}
                    aria-label={item.label}
                    aria-current={on ? "true" : undefined}
                    className="group flex items-center justify-end gap-2.5"
                  >
                    <span
                      className={`font-body text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-all duration-500 ${
                        on ? "opacity-100" : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                      } ${
                        on
                          ? overDark
                            ? "text-cream-50 [text-shadow:0_1px_10px_rgba(6,12,34,0.6)]"
                            : "text-navy-900"
                          : overDark
                            ? "text-cream-50/70"
                            : "text-ink-faint"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`relative block rounded-full transition-all duration-500 ${
                        on
                          ? "h-2.5 w-2.5 bg-gold-500 shadow-[0_0_0_4px_rgba(200,162,78,0.18)]"
                          : overDark
                            ? "h-1.5 w-1.5 bg-cream-50/45 group-hover:bg-cream-50/80"
                            : "h-1.5 w-1.5 bg-navy-800/25 group-hover:bg-navy-800/55"
                      }`}
                    >
                      {on && (
                        <span
                          className={`absolute -inset-1.5 rounded-full border ${
                            overDark ? "border-gold-300/60" : "border-gold-500/45"
                          }`}
                        />
                      )}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}
