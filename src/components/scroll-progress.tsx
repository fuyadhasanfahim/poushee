"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "@/lib/i18n/language-provider";

type RailItem = { id: string; label: string };

/**
 * Two things at once:
 *  1. a hairline reading-progress bar pinned under the navbar, and
 *  2. a right-edge section rail (desktop) that tracks which section is in
 *     view and lets you jump between them — so the page always tells you
 *     where you are.
 */
export function ScrollProgress() {
  const pathname = usePathname();
  const { tf } = useLanguage();
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  const isHome = pathname === "/";
  const rail: RailItem[] = isHome
    ? [
        { id: "hero", label: tf({ en: "Top", bn: "শুরু" }) },
        { id: "featured", label: tf({ en: "Signature", bn: "সিগনেচার" }) },
        { id: "kitchen", label: tf({ en: "Kitchen", bn: "রান্নাঘর" }) },
        { id: "chapters", label: tf({ en: "The menu", bn: "মেনু" }) },
        { id: "about", label: tf({ en: "Story", bn: "আমাদের কথা" }) },
        { id: "contact", label: tf({ en: "Visit", bn: "যোগাযোগ" }) },
      ]
    : [];

  const [active, setActive] = useState<string>(rail[0]?.id ?? "");

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
      <motion.div
        aria-hidden
        style={{ scaleX: bar }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300"
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
                    className="group flex items-center justify-end gap-2.5"
                  >
                    <span
                      className={`font-body text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-all duration-300 ${
                        on
                          ? "text-navy-900 opacity-100"
                          : "text-ink-faint opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`relative block rounded-full transition-all duration-300 ${
                        on
                          ? "h-2.5 w-2.5 bg-gold-500"
                          : "h-1.5 w-1.5 bg-navy-800/25 group-hover:bg-navy-800/50"
                      }`}
                    >
                      {on && (
                        <span className="absolute -inset-1.5 rounded-full border border-gold-500/40" />
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
