"use client";

import { useLanguage } from "@/lib/i18n/language-provider";
import { MENU } from "@/content/menu";
import { Reveal } from "@/components/motion";
import { CategoryCard } from "@/components/menu/category-card";
import { Sprig, PlateRings, DottedArc } from "@/components/decor/vectors";

export function MenuIndexView() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-16 text-cream-50 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 text-cream-50 bg-dots opacity-[0.06]" />
        <PlateRings className="pointer-events-none absolute -left-20 -top-10 z-10 h-72 w-72 text-gold-300/15" />
        <Sprig className="pointer-events-none absolute -right-4 top-24 z-10 hidden h-52 w-36 text-gold-300/15 sm:block" />
        <DottedArc className="pointer-events-none absolute bottom-0 right-8 z-10 h-36 w-36 text-gold-300/25" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow justify-center !text-gold-300">
              {t("menuIndex.eyebrow")}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-4 text-[2.6rem] text-cream-50 sm:text-6xl">
              {t("menuIndex.title")}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 leading-relaxed text-cream-50/72">
              {t("menuIndex.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MENU.map((category, i) => (
            <Reveal key={category.slug} delay={(i % 3) * 0.07}>
              <CategoryCard category={category} index={i} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
