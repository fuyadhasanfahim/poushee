"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-provider";
import type { Dish, MenuCategory } from "@/content/types";
import { Reveal } from "@/components/motion";
import { DishMedia } from "@/components/menu/dish-media";
import { DishCard } from "@/components/menu/dish-card";
import { OrderNowButton } from "@/components/order-now-button";
import { Sprig, PlateRings, SpiceStar } from "@/components/decor/vectors";

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
      <PlateRings className="pointer-events-none absolute -left-24 top-24 h-80 w-80 text-navy-800/[0.05]" />
      <SpiceStar className="pointer-events-none absolute -right-8 top-40 hidden h-28 w-28 text-gold-600/10 lg:block" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Link
            href={`/menu/${category.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-navy-900"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t("item.back", { category: tf(category.name) })}
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-[1.8rem] border border-gold-500/40 sm:block" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.7rem] border border-navy-800/10 bg-navy-900 shadow-float">
                <DishMedia
                  src={dish.image}
                  alt={tf(dish.name)}
                  label={tf(dish.name)}
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lg:pt-2">
              {category.real && (
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-gold-500/40 bg-gold-500/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-gold-700">
                  ★ {tf({ en: "House kitchen", bn: "ঘরের রান্না" })}
                </span>
              )}
              <h1 className="text-[2.4rem] leading-tight sm:text-[3rem]">
                {tf(dish.name)}
              </h1>
              <p className="mt-3 text-lg leading-relaxed text-ink-soft">
                {tf(dish.tagline)}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-navy-850 px-4 py-2 text-sm font-bold text-cream-50">
                  {tf(dish.price)}
                </span>
                <span className="text-xs text-ink-faint">{t("item.priceNote")}</span>
              </div>

              <div className="mt-7">
                <OrderNowButton tone="gold" size="lg" />
              </div>

              <div className="mt-10 border-t border-navy-800/10 pt-8">
                <p className="eyebrow">{t("item.story")}</p>
                <p className="mt-3 leading-[1.8] text-ink">{tf(dish.story)}</p>
              </div>

              <div className="mt-8">
                <p className="eyebrow">{t("item.ingredients")}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {ingredients.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-navy-800/12 bg-cream-50 px-3.5 py-1.5 text-[0.85rem] text-navy-900"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 text-xs leading-relaxed text-ink-faint">
                {t("item.disclaimer")}
              </p>
            </div>
          </Reveal>
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
                <Reveal key={d.slug} delay={i * 0.07}>
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
