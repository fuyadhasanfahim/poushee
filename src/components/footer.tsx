"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { useLanguage } from "@/lib/i18n/language-provider";
import { SITE } from "@/lib/site";
import { MENU } from "@/content/menu";
import { Sprig, DottedArc } from "@/components/decor/vectors";

export function Footer() {
  const { t, tf, lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="content-layer relative mt-24 overflow-hidden bg-navy-950 text-cream-50/78">
      <div className="absolute inset-0 text-cream-50 bg-dots opacity-[0.05]" />
      <Sprig className="pointer-events-none absolute -left-6 top-10 h-40 w-28 text-gold-300/12" />
      <DottedArc className="pointer-events-none absolute -right-4 bottom-10 h-40 w-40 text-gold-300/16" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" height={52} />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream-50/62">
              {t("footer.blurb")}
            </p>
            <p className="mt-6 font-display text-xl italic text-gold-300">
              {tf(SITE.motto)}
            </p>
          </div>

          <nav aria-label={t("footer.explore")}>
            <h2 className="eyebrow !text-gold-400">{t("footer.explore")}</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: "/", k: "nav.home" as const },
                { href: "/menu", k: "nav.menu" as const },
                { href: "/#about", k: "nav.about" as const },
                { href: "/#contact", k: "nav.contact" as const },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    className="transition-colors hover:text-cream-50"
                    href={l.href}
                  >
                    {t(l.k)}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="eyebrow mt-8 !text-gold-400">{t("nav.menu")}</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[0.82rem] text-cream-50/68">
              {MENU.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link
                    className="transition-colors hover:text-cream-50"
                    href={`/menu/${c.slug}`}
                  >
                    {tf(c.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow !text-gold-400">{t("footer.contact")}</h2>
            <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-cream-50/68">
              <p>{tf(SITE.address)}</p>
              <p>
                {SITE.phonesDisplay.map((p, i) => (
                  <a
                    key={p}
                    href={`tel:${SITE.phones[i]}`}
                    className="block transition-colors hover:text-cream-50"
                  >
                    {p}
                  </a>
                ))}
              </p>
              <p>
                <a
                  href={`mailto:${SITE.emails[0]}`}
                  className="break-all transition-colors hover:text-cream-50"
                >
                  {SITE.emails[0]}
                </a>
              </p>
              <p className="text-cream-50/50">{tf(SITE.hours)}</p>
            </address>
          </div>
        </div>

        <div className="rule-gold my-10 opacity-40" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-cream-50/45 sm:flex-row">
          <p lang={lang}>
            © {year} {SITE.wordmark}
            {SITE.registered ? "®" : ""} · {t("footer.rights")}
          </p>
          <p>{t("footer.trademark")}</p>
        </div>
      </div>
    </footer>
  );
}
