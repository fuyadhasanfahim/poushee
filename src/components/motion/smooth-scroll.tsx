"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

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

  useEffect(() => {
    if (window.location.hash) return;
    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
}
