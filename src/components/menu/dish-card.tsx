"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-provider";
import { DishMedia } from "./dish-media";
import type { Dish } from "@/content/types";

/**
 * Solid, high-contrast dish card — text always sits on an opaque ivory
 * panel (never over the photo), so it stays readable on every screen.
 */
export function DishCard({
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
      className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-navy-800/10 bg-cream-50 shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-gold-500/50 hover:shadow-float"
    >
      <div className="relative aspect-[5/4] w-full overflow-hidden bg-navy-900">
        <DishMedia
          src={dish.image}
          alt={tf(dish.name)}
          label={tf(dish.name)}
          priority={priority}
          className="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
        <span className="absolute left-3 top-3 rounded-full bg-cream-50 px-3 py-1 text-[0.78rem] font-bold text-navy-900 shadow-sm">
          {tf(dish.price)}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 border-t border-navy-800/8 p-4 sm:p-5">
        <h3 className="font-display text-[1.15rem] leading-tight text-navy-900">
          {tf(dish.name)}
        </h3>
        <p className="text-[0.85rem] leading-relaxed text-ink-soft">
          {tf(dish.tagline)}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold-700">
          {t("category.viewDetails")}
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
