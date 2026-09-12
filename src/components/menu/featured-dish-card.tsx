"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-provider";
import { DishMedia } from "./dish-media";
import type { Dish } from "@/content/types";

export function FeaturedDishCard({
  dish,
  categorySlug,
  priority = false,
}: {
  dish: Dish;
  categorySlug: string;
  priority?: boolean;
}) {
  const { tf, t } = useLanguage();

  return (
    <Link
      href={`/menu/${categorySlug}/${dish.slug}`}
      className="card-sheen group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.4rem] border border-cream-50/12 bg-navy-900 shadow-float transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-gold-300/45"
    >
      <DishMedia
        src={dish.image}
        alt={tf(dish.name)}
        label={tf(dish.name)}
        priority={priority}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="!absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-navy-950/5" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 text-cream-50 bg-dots opacity-[0.05]" />

      <div className="relative z-10 flex flex-col gap-1.5 p-5 sm:p-6">
        <h3 className="font-title text-[1.4rem] leading-tight text-cream-50 [text-shadow:0_2px_16px_rgba(6,12,34,0.6)]">
          {tf(dish.name)}
        </h3>
        <p className="font-script text-[1rem] leading-snug text-cream-50/80">
          {tf(dish.tagline)}
        </p>
        <span className="font-body mt-2 inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold-300">
          {t("category.viewDetails")}
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
      </div>
    </Link>
  );
}
