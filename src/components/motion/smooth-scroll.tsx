"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * App-wide inertial smooth scrolling. Kept deliberately gentle so it feels
 * like weighted glass, never floaty. Skipped entirely for reduced-motion
 * users, and paused while the tab is hidden so it never fights a
 * background render. Anchor clicks (#about, #contact) glide via Lenis.
 */

/**
 * The single anchor offset for the whole app: the fixed navbar height plus a
 * little breathing room. Must stay in sync with `scroll-padding-top` in
 * globals.css (6rem). Sections must NOT also carry `scroll-margin-top`, or the
 * two offsets stack and the target lands pushed down the page.
 */
const ANCHOR_OFFSET = 96;

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<import("lenis").default | undefined>(undefined);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let lenis: import("lenis").default | undefined;
    let frame = 0;
    let cancelled = false;

    const scrollToHash = (hash: string, immediate = false) => {
      if (!lenis || !hash || hash === "#") return;
      let target: Element | null = null;
      try {
        target = document.querySelector(hash);
      } catch {
        return;
      }
      if (!target) return;
      lenis.scrollTo(target as HTMLElement, {
        offset: -ANCHOR_OFFSET,
        duration: immediate ? 0 : 1.2,
      });
    };

    (async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      lenis = new Lenis({
        duration: 1.05,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        wheelMultiplier: 0.9,
        touchMultiplier: 1.4,
      });
      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);

      // Re-align a deep-link (`/#contact`, `/#about`) once everything below the
      // fold has loaded — the browser's own jump on load happens before web
      // fonts and images settle, which is what leaves the section sitting low.
      const hash = window.location.hash;
      if (hash.length > 1) {
        const settle = () => scrollToHash(hash, true);
        if (document.readyState === "complete") {
          setTimeout(settle, 200);
        } else {
          window.addEventListener("load", () => setTimeout(settle, 200), {
            once: true,
          });
        }
      }
    })();

    const onAnchorClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const a = (e.target as HTMLElement)?.closest?.(
        'a[href*="#"]',
      ) as HTMLAnchorElement | null;
      if (!a || !lenis) return;
      const url = new URL(a.href, window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;
      const target = document.querySelector(url.hash);
      if (!target) return;
      e.preventDefault();
      scrollToHash(url.hash);
      history.pushState(null, "", url.hash);
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onAnchorClick);
      lenis?.destroy();
      lenisRef.current = undefined;
    };
  }, []);

  // Lenis owns scroll independently of the browser, so Next's default
  // scroll-to-top on navigation never reaches it — without this, a page
  // opens still sitting at whatever scroll position the previous page was
  // left at. Snap to top on every route change; a same-page hash link
  // (`#about`) is already handled by `onAnchorClick` above, so skip those.
  useEffect(() => {
    if (window.location.hash) return;
    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
}
