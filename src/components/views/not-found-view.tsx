"use client";

import { useLanguage } from "@/lib/i18n/language-provider";
import { ButtonLink } from "@/components/ui/button";
import { Sprig, PlateRings } from "@/components/decor/vectors";

export function NotFoundView() {
  const { t } = useLanguage();
  return (
    <section className="relative mx-auto flex min-h-[76svh] max-w-xl flex-col items-center justify-center overflow-hidden px-6 pt-28 text-center">
      <PlateRings className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 text-navy-800/[0.06]" />
      <Sprig className="pointer-events-none absolute right-6 top-16 h-28 w-20 text-gold-600/15" />
      <p className="font-display text-7xl italic text-gold-gradient">404</p>
      <h1 className="mt-4 text-3xl sm:text-4xl">{t("notFound.title")}</h1>
      <p className="mt-3 leading-relaxed text-ink-soft">{t("notFound.body")}</p>
      <div className="mt-8">
        <ButtonLink href="/" variant="primary" size="lg">
          {t("notFound.cta")}
        </ButtonLink>
      </div>
    </section>
  );
}
