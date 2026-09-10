"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-provider";
import type { MenuCategory } from "@/content/types";
import { Reveal, Parallax } from "@/components/motion";
import { DishCard } from "@/components/menu/dish-card";
import { Sprig, PlateRings } from "@/components/decor/vectors";

export function CategoryView({ category }: { category: MenuCategory }) {
  const { t, tf } = useLanguage();

  const sections =
    category.sections && category.sections.length > 0
      ? category.sections.map((s) => ({
          section: s,
          dishes: category.dishes.filter((d) => d.section === s.id),
        }))
      : [{ section: null, dishes: category.dishes }];

  const priorityCount = 3;
  const ordered = sections.flatMap((s) => s.dishes.map((d) => d.slug));

  return (
    <>
      {/* header band */}
      <section className="relative overflow-hidden bg-navy-950 pt-28 pb-16 text-cream-50 sm:pt-36 sm:pb-20">
        {category.cover && (
          <div className="absolute inset-0">
            <Parallax speed={40} className="h-[120%] w-full">
              <Image
                src={category.cover}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover opacity-35"
              />
            </Parallax>
            <div className="absolute inset-0 bg-navy-950/72" />
          </div>
        )}
        <div className="absolute inset-0 text-cream-50 bg-dots opacity-[0.06]" />
        <PlateRings className="pointer-events-none absolute -right-16 -top-10 z-10 h-72 w-72 text-gold-300/15" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-sm font-medium text-cream-50/70 transition-colors hover:text-cream-50"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t("category.back")}
            </Link>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-6 max-w-2xl">
              {category.real && (
                <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-gold-300/50 bg-gold-500/15 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-gold-300">
                  ★ {tf({ en: "House kitchen", bn: "ঘরের রান্না" })}
                </span>
              )}
              <h1 className="text-[2.5rem] text-cream-50 sm:text-6xl">
                {tf(category.name)}
              </h1>
              <p className="mt-5 leading-relaxed text-cream-50/72">
                {tf(category.blurb)}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* dishes */}
      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <span className="deco-glow -right-32 top-24 h-96 w-96" />
        <Sprig className="pointer-events-none absolute -left-6 top-8 hidden h-40 w-28 text-gold-600/10 lg:block" />
        <div className="space-y-16">
          {sections.map(({ section, dishes }) => {
            if (dishes.length === 0) return null;
            return (
              <div key={section?.id ?? "all"}>
                {section && (
                  <Reveal>
                    <div className="mb-8 flex items-center gap-4">
                      <h2 className="text-[1.7rem] text-navy-900 sm:text-[2.1rem]">
                        {tf(section.title)}
                      </h2>
                      <span className="h-px flex-1 bg-gradient-to-r from-gold-500/60 to-transparent" />
                    </div>
                  </Reveal>
                )}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {dishes.map((dish, i) => (
                    <Reveal
                      key={dish.slug}
                      delay={(i % 3) * 0.09}
                      y={32}
                      scale={0.96}
                      blur
                    >
                      <DishCard
                        dish={dish}
                        categorySlug={category.slug}
                        priority={ordered.indexOf(dish.slug) < priorityCount}
                      />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
