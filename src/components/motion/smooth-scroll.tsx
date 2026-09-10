"use client";

import { useEffect } from "react";

/**
 * App-wide inertial smooth scrolling. Kept deliberately gentle so it feels
 * like weighted glass, never floaty. Skipped entirely for reduced-motion
 * users, and paused while the tab is hidden so it never fights a
 * background render. Anchor clicks (#about, #contact) glide via Lenis.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
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

    (async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      lenis = new Lenis({
        duration: 1.05,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        wheelMultiplier: 0.9,
        touchMultiplier: 1.4,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    })();

    const onAnchorClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.(
        'a[href*="#"]',
      ) as HTMLAnchorElement | null;
      if (!a || !lenis) return;
      const url = new URL(a.href, window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;
      const target = document.querySelector(url.hash);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -88, duration: 1.2 });
      history.pushState(null, "", url.hash);
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onAnchorClick);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
