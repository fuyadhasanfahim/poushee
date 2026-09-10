"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-provider";
import { num } from "@/lib/i18n/dictionary";
import { DishMedia } from "./dish-media";
import { Sprig } from "@/components/decor/vectors";
import type { MenuCategory } from "@/content/types";

/**
 * Editorial category card: full-bleed cover, serif index numeral, and a
 * solid ivory caption block with strong contrast.
 */
export function CategoryCard({
  category,
  index,
  priority = false,
}: {
  category: MenuCategory;
  index: number;
  priority?: boolean;
}) {
  const { tf, t, lang } = useLanguage();
  const count = category.dishes.length;

  return (
    <Link
      href={`/menu/${category.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-navy-800/10 bg-cream-50 shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-gold-500/50 hover:shadow-float"
    >
      <div className="card-sheen relative aspect-[16/11] w-full overflow-hidden bg-navy-900">
        <DishMedia
          src={category.cover}
          alt={tf(category.name)}
          label={tf(category.name)}
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />

        <span className="absolute left-5 top-4 font-display text-3xl text-cream-50/90 [text-shadow:0_2px_12px_rgba(6,12,34,0.55)]">
          {num(index + 1, lang).padStart(2, lang === "bn" ? "০" : "0")}
        </span>
        {category.real && (
          <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-gold-300/60 bg-gold-500 px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-wider text-navy-950">
            ★ {tf({ en: "House", bn: "ঘরের" })}
          </span>
        )}
        <h3 className="absolute inset-x-5 bottom-4 font-display text-[1.5rem] leading-tight text-cream-50 [text-shadow:0_2px_14px_rgba(6,12,34,0.6)]">
          {tf(category.name)}
        </h3>
      </div>

      <div className="relative flex flex-1 flex-col gap-2 p-5">
        <Sprig className="pointer-events-none absolute -right-2 -top-8 h-16 w-12 text-gold-600/15 transition-transform duration-500 group-hover:-translate-y-1" />
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-700">
            {t("menuIndex.explore")}
          </span>
          <span className="shrink-0 text-xs font-semibold text-ink-faint">
            {count === 1
              ? t("category.count.one")
              : t("category.count.other", { n: num(count, lang) })}
          </span>
        </div>
        <p className="text-[0.87rem] leading-relaxed text-ink-soft">
          {tf(category.blurb)}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-navy-900">
          <span className="h-px w-6 bg-gold-500 transition-all duration-300 group-hover:w-10" />
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
