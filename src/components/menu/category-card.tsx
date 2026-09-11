"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-provider";
import { num } from "@/lib/i18n/dictionary";
import { DishMedia } from "./dish-media";
import type { MenuCategory } from "@/content/types";

/**
 * Menu index category card — matches the home "Signature dishes" treatment:
 * photo fills the card, name / blurb sit over a dark scrim in light type.
 * Name in Lobster Two, blurb in Dancing Script.
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
      className="card-sheen group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.4rem] border border-navy-900/10 bg-navy-900 shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-gold-400/50 hover:shadow-float"
    >
      <DishMedia
        src={category.cover}
        alt={tf(category.name)}
        label={tf(category.name)}
        priority={priority}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="!absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
      />

      {/* scrims */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-navy-950/5" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 text-cream-50 bg-dots opacity-[0.05]" />

      <span className="font-script absolute left-4 top-4 z-10 rounded-full border border-cream-50/20 bg-navy-950/55 px-3 py-1 text-[0.9rem] font-bold text-cream-50 shadow-sm backdrop-blur-sm">
        {num(index + 1, lang).padStart(2, lang === "bn" ? "০" : "0")}
      </span>
      {category.real && (
        <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full border border-gold-300/60 bg-gold-500 px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-wider text-navy-950">
          ★ {tf({ en: "House", bn: "ঘরের" })}
        </span>
      )}

      <div className="relative z-10 flex flex-col gap-1.5 p-5 sm:p-6">
        <h3 className="font-title text-[1.4rem] leading-tight text-cream-50 [text-shadow:0_2px_16px_rgba(6,12,34,0.6)]">
          {tf(category.name)}
        </h3>
        <p className="font-script text-[1rem] leading-snug text-cream-50/80">
          {tf(category.blurb)}
        </p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="font-body inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold-300">
            {t("menuIndex.explore")}
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="font-body shrink-0 text-[0.7rem] font-semibold text-cream-50/60">
            {count === 1
              ? t("category.count.one")
              : t("category.count.other", { n: num(count, lang) })}
          </span>
        </div>
      </div>
    </Link>
  );
}
