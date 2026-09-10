"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { LanguageToggle } from "./language-toggle";
import { OrderNowButton } from "./order-now-button";
import { useLanguage } from "@/lib/i18n/language-provider";

const NAV = [
  { key: "nav.home", href: "/" },
  { key: "nav.menu", href: "/menu" },
  { key: "nav.about", href: "/#about" },
  { key: "nav.contact", href: "/#contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // close the mobile sheet on navigation
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || !isHome || menuOpen;
  const tone: "light" | "dark" = solid ? "dark" : "light";

  return (
    <header
      className={`nav-in fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        solid
          ? "border-b border-navy-800/10 bg-cream-50/75 shadow-[0_10px_40px_-24px_rgba(12,22,54,0.4)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Logo tone={tone} sub={false} height={26} />

        <div className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/menu" && pathname.startsWith("/menu");
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`group relative rounded-full px-4 py-2 text-[0.83rem] font-medium tracking-tight transition-colors duration-300 ${
                  tone === "light"
                    ? "text-cream-50/85 hover:text-cream-50"
                    : "text-navy-900/72 hover:text-navy-900"
                }`}
              >
                {t(item.key)}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gold-500 transition-transform duration-300 group-hover:scale-x-100 ${
                    active ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle tone={tone} className="hidden sm:inline-flex" />
          <div className="hidden sm:block">
            <OrderNowButton tone={tone === "light" ? "light" : "gold"} />
          </div>

          <button
            type="button"
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={`relative grid h-10 w-10 place-items-center rounded-full border transition-colors lg:hidden ${
              tone === "light"
                ? "border-white/25 bg-white/10 text-cream-50"
                : "border-navy-800/15 bg-white/60 text-navy-900"
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className="navsheet lg:hidden"
        data-open={menuOpen}
        aria-hidden={!menuOpen}
      >
        <div className="mx-3 mb-3 overflow-hidden rounded-3xl border border-navy-800/10 bg-cream-50/95 shadow-float backdrop-blur-2xl">
          <div className="flex flex-col gap-1 p-4">
            {NAV.map((item, i) => (
              <div
                key={item.key}
                className="navsheet-item"
                style={{ "--ni-d": `${0.05 + i * 0.05}s` } as React.CSSProperties}
              >
                <Link
                  href={item.href}
                  tabIndex={menuOpen ? undefined : -1}
                  className="block rounded-xl px-4 py-3 font-display text-lg text-navy-900 transition-colors hover:bg-navy-800/5"
                >
                  {t(item.key)}
                </Link>
              </div>
            ))}
            <div className="mt-2 flex items-center justify-between gap-3 border-t border-navy-800/10 pt-4">
              <LanguageToggle tone="dark" />
              <OrderNowButton tone="gold" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
