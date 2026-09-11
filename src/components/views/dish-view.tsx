"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-provider";
import type { Dish, MenuCategory } from "@/content/types";
import { Reveal, Parallax, Floaty, AnimatedHeading } from "@/components/motion";
import { DishMedia } from "@/components/menu/dish-media";
import { DishCard } from "@/components/menu/dish-card";
import { CallNowButton } from "@/components/call-now-button";
import {
  Sprig,
  PlateRings,
  SpiceStar,
  DottedArc,
  WaterLily,
  FloralSpray,
} from "@/components/decor/vectors";

export function DishView({
  category,
  dish,
}: {
  category: MenuCategory;
  dish: Dish;
}) {
  const { t, tf, lang } = useLanguage();
  const ingredients = dish.ingredients[lang] ?? dish.ingredients.en;
  const related = category.dishes.filter((d) => d.slug !== dish.slug).slice(0, 3);

  return (
    <article className="relative overflow-hidden pt-28 pb-10 sm:pt-36">
      <span className="deco-glow -left-32 top-16 h-96 w-96" />
      <PlateRings className="pointer-events-none absolute -left-24 top-24 h-80 w-80 text-navy-800/[0.05]" />
      <FloralSpray className="pointer-events-none absolute -right-10 top-4 hidden h-72 w-60 [transform:scaleX(-1)] text-gold-600/10 lg:block" />
      <WaterLily className="pointer-events-none absolute left-4 bottom-10 hidden h-32 w-32 text-sky-400/20 md:block" />
      <Floaty
        className="pointer-events-none absolute -right-8 top-40 hidden lg:block"
        dur={12}
        dist={18}
      >
        <SpiceStar className="h-28 w-28 text-gold-600/12" />
      </Floaty>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Link
            href={`/menu/${category.slug}`}
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-navy-900"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t("item.back", { category: tf(category.name) })}
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal y={40} scale={0.96} blur>
            <div className="relative">
              <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-[1.8rem] border border-gold-500/40 sm:block" />
              <Parallax speed={22}>
                <div className="card-sheen group relative aspect-[4/3] overflow-hidden rounded-[1.7rem] border border-navy-800/10 bg-navy-900 shadow-float">
                  <DishMedia
                    src={dish.image}
                    alt={tf(dish.name)}
                    label={tf(dish.name)}
                    priority
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                </div>
              </Parallax>
              <DottedArc className="absolute -bottom-6 -right-6 hidden h-24 w-24 text-gold-600/35 sm:block" />
            </div>
          </Reveal>

          <div className="lg:pt-2">
            {category.real && (
              <Reveal y={16}>
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-gold-500/40 bg-gold-500/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-gold-700">
                  ★ {tf({ en: "House kitchen", bn: "ঘরের রান্না" })}
                </span>
              </Reveal>
            )}
            <h1 className="text-[2.4rem] leading-tight sm:text-[3rem]">
              <AnimatedHeading text={tf(dish.name)} delay={0.1} />
            </h1>
            <Reveal delay={0.15} y={16}>
              <p className="font-script mt-3 text-xl leading-relaxed text-ink-soft">
                {tf(dish.tagline)}
              </p>
            </Reveal>

            <Reveal delay={0.22} y={16}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-navy-850 px-4 py-2 text-sm font-bold text-cream-50 shadow-[0_12px_28px_-14px_rgba(12,22,54,0.7)]">
                  {tf(dish.price)}
                </span>
                <span className="font-body text-xs text-ink-faint">{t("item.priceNote")}</span>
              </div>
            </Reveal>

            <Reveal delay={0.28} y={16}>
              <div className="mt-7">
                <CallNowButton tone="gold" size="lg" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 border-t border-navy-800/10 pt-8">
                <p className="eyebrow">{t("item.story")}</p>
                <span className="rule-draw mt-3 block" />
                <p className="font-body mt-4 leading-[1.8] text-ink">{tf(dish.story)}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8">
                <p className="eyebrow">{t("item.ingredients")}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {ingredients.map((item, i) => (
                    <Reveal
                      as="li"
                      key={item}
                      delay={0.05 + i * 0.04}
                      y={10}
                    >
                      <span className="font-script inline-block rounded-full border border-navy-800/12 bg-sky-50 px-3.5 py-1.5 text-[0.95rem] text-navy-900 transition-colors duration-300 hover:border-gold-500/50 hover:bg-gold-500/5">
                        {item}
                      </span>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="font-body mt-8 text-xs leading-relaxed text-ink-faint">
                {t("item.disclaimer")}
              </p>
            </Reveal>
          </div>
        </div>

        {related.length > 0 && (
          <section className="relative mt-24">
            <Sprig className="pointer-events-none absolute -right-4 -top-10 h-32 w-24 text-gold-600/12" />
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <h2 className="text-[1.7rem] text-navy-900 sm:text-[2.1rem]">
                  {t("item.related", { category: tf(category.name) })}
                </h2>
                <span className="h-px flex-1 bg-gradient-to-r from-gold-500/60 to-transparent" />
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((d, i) => (
                <Reveal key={d.slug} delay={i * 0.09} y={30} scale={0.96} blur>
                  <DishCard dish={d} categorySlug={category.slug} />
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
