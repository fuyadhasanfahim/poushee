"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/language-provider";
import { SITE } from "@/lib/site";
import { featuredDishes } from "@/content/menu";
import { Reveal, Parallax, Floaty, AnimatedHeading } from "@/components/motion";
import { ButtonLink } from "@/components/ui/button";
import { CallNowButton } from "@/components/call-now-button";
import { FeaturedDishCard } from "@/components/menu/featured-dish-card";
import { SectionMark, SeamDivider } from "@/components/decor/section-frame";
import {
  Sprig,
  BayLeaf,
  SpiceStar,
  DottedArc,
  WaterLily,
  Rose,
  Lotus,
  FloralSpray,
  PalmFrond,
} from "@/components/decor/vectors";

const mapsHref = SITE.mapsUrl;

function Marquee() {
  const { lang } = useLanguage();
  const words =
    lang === "bn"
      ? ["মেজবানি", "কালা ভুনা", "সরষে ইলিশ", "কাচ্চি বিরিয়ানি", "তাজা সি-ফুড", "বার্বিকিউ", "ভর্তা", "নেহারি"]
      : ["Mezbani", "Kala Bhuna", "Sorshe Ilish", "Kacchi Biryani", "Fresh Seafood", "Coal BBQ", "Bhorta", "Nihari"];
  const run = [...words, ...words];
  return (
    <div
      aria-hidden="true"
      className="marquee-mask relative flex overflow-hidden border-y border-cream-50/10 bg-navy-950 py-4 select-none"
    >
      <div className="marquee-track">
        {run.map((w, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-6 font-display text-lg text-cream-50/70 sm:text-xl">
              {w}
            </span>
            <span className="text-gold-500/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function HomeView() {
  const { t, tf } = useLanguage();
  const featured = featuredDishes(3);

  return (
    <>
      {/* ============================================ HERO */}
      <section
        id="hero"
        className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950 pt-24 sm:pt-28"
      >
        <div className="absolute inset-0">
          <Parallax speed={60} className="h-[116%] w-full">
            <Image
              src="/img/hero-thali.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-right"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
          <div className="absolute inset-0 text-cream-50 bg-dots opacity-[0.06]" />
        </div>

        {/* floating botanicals */}
        <Floaty className="pointer-events-none absolute -left-10 top-20 hidden sm:block" dur={12} dist={20}>
          <FloralSpray className="h-64 w-56 text-gold-300/20" />
        </Floaty>
        <Floaty className="pointer-events-none absolute right-8 top-1/4" dur={9} dist={16} delay={1}>
          <WaterLily className="h-24 w-24 text-gold-300/25 sm:h-32 sm:w-32" />
        </Floaty>
        <Floaty className="pointer-events-none absolute bottom-10 right-10 hidden lg:block" dur={13} dist={22} delay={0.6}>
          <PalmFrond className="h-44 w-52 text-gold-300/18" />
        </Floaty>
        <Floaty className="pointer-events-none absolute bottom-24 left-6 hidden md:block" dur={10} dist={14} delay={0.3}>
          <SpiceStar className="h-16 w-16 text-gold-300/20" />
        </Floaty>
        <span className="deco-glow -left-24 bottom-0 h-96 w-96 opacity-90" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow !text-gold-300">{t("hero.eyebrow")}</p>
            </Reveal>

            <h1 className="mt-6 text-[2.7rem] leading-[1.04] text-cream-50 sm:text-6xl lg:text-[4.4rem]">
              <AnimatedHeading
                text={tf({ en: "Tradition,", bn: "ঐতিহ্য," })}
                delay={0.15}
              />
              <span className="mt-1 block">
                <AnimatedHeading
                  text={tf({ en: "served by the", bn: "পরিবেশিত হয়" })}
                  delay={0.3}
                />
              </span>
              <span className="font-script mt-1 block text-[1.15em] leading-[1.1] text-gold-gradient">
                <AnimatedHeading
                  text={tf({ en: "Cox's Bazar sea", bn: "কক্সবাজারের সৈকতে" })}
                  delay={0.45}
                />
              </span>
            </h1>

            <Reveal delay={0.5}>
              <p className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-cream-50/75">
                {t("hero.subtitle")}
              </p>
            </Reveal>

            <Reveal delay={0.62}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink href="/menu" variant="gold" size="lg">
                  {t("hero.ctaMenu")}
                </ButtonLink>
                <CallNowButton tone="light" size="lg" />
              </div>
            </Reveal>

            <Reveal delay={0.75}>
              <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.18em] text-cream-50/55">
                {[
                  tf({ en: "15 menu chapters", bn: "১৫টি অধ্যায়" }),
                  tf({ en: "Chattogram mezbani", bn: "চাটগাঁইয়া মেজবানি" }),
                  tf({ en: "The day's catch", bn: "দিনের তাজা মাছ" }),
                ].map((s, i) => (
                  <span key={i} className="flex items-center gap-3">
                    {i > 0 && <span className="h-1 w-1 rounded-full bg-gold-500" />}
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-cream-50/55">
          <span className="text-[0.62rem] uppercase tracking-[0.3em]">
            {t("hero.scroll")}
          </span>
          <Floaty dur={2.2} dist={6}>
            <span className="block h-8 w-px bg-cream-50/30" />
          </Floaty>
        </div>
      </section>

      <Marquee />

      {/* ============================================ ABOUT THE RESTAURANT */}
      <section
        id="about"
        className="section-tint relative overflow-hidden py-24 sm:py-28"
      >
        <span className="seam absolute inset-x-0 top-0" />
        <SectionMark
          index={1}
          label={t("home.about.eyebrow")}
          className="left-2 top-8 sm:left-6 sm:top-10"
        />
        <span className="deco-glow left-[-4rem] bottom-10 h-80 w-80" />
        <FloralSpray className="pointer-events-none absolute -right-10 top-10 hidden h-72 w-64 rotate-6 text-gold-600/12 lg:block" />
        <WaterLily className="pointer-events-none absolute -left-8 bottom-8 h-40 w-40 text-sky-400/25" />
        <Sprig className="pointer-events-none absolute right-8 bottom-24 hidden h-40 w-28 text-gold-600/10 md:block" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal delay={0.08}>
              <div>
                <p className="eyebrow">{t("home.about.eyebrow")}</p>
                <h2 className="font-title mt-4 text-[2.1rem] sm:text-[2.7rem]">
                  {t("home.about.title")}
                </h2>
                <span className="rule-draw mt-5 block" />
                <div className="font-body mt-6 space-y-4 leading-relaxed text-ink-soft">
                  <p>{t("home.about.p1")}</p>
                  <p>{t("home.about.p2")}</p>
                </div>

                <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-navy-800/10 bg-white/70 p-4 shadow-card backdrop-blur-sm">
                    <dt className="font-script text-[1rem] font-semibold text-gold-700">
                      {t("contact.hours")}
                    </dt>
                    <dd className="font-body mt-1 text-[0.9rem] text-ink-soft">
                      {t("home.about.hours")}
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-navy-800/10 bg-white/70 p-4 shadow-card backdrop-blur-sm">
                    <dt className="font-script text-[1rem] font-semibold text-gold-700">
                      {tf({ en: "Per person", bn: "জনপ্রতি" })}
                    </dt>
                    <dd className="font-body mt-1 text-[0.9rem] text-ink-soft">
                      {tf(SITE.pricePerPerson)}
                    </dd>
                  </div>
                </dl>

                <div className="mt-9">
                  <CallNowButton tone="gold" />
                </div>
              </div>
            </Reveal>

            <Reveal y={40} scale={0.96} blur>
              <div className="relative">
                <div className="absolute -right-4 -top-4 h-full w-full rounded-[1.6rem] border border-gold-500/40" />
                <Parallax speed={24}>
                  <div className="card-sheen group relative aspect-[4/5] overflow-hidden rounded-[1.6rem] shadow-float">
                    <Image
                      src="/img/dining-room.jpg"
                      alt={tf({
                        en: "The dining room at Poushee",
                        bn: "পউষীর ডাইনিং রুম",
                      })}
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Parallax>
                <Rose className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-24 text-gold-600/40" />
                <DottedArc className="pointer-events-none absolute -right-5 -top-5 h-20 w-20 text-gold-600/40" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SeamDivider className="py-2" />

      {/* ============================================ OUR STORY */}
      <section
        id="story"
        className="relative overflow-hidden py-24 sm:py-28"
      >
        <SectionMark
          index={2}
          label={t("home.story.eyebrow")}
          className="right-2 top-8 text-right sm:right-6 sm:top-10"
        />
        <span className="deco-glow right-[-6rem] top-24 h-80 w-80" />
        <Lotus className="pointer-events-none absolute -left-10 top-16 h-40 w-56 text-sky-400/25" />
        <Rose className="pointer-events-none absolute right-6 bottom-10 hidden h-44 w-32 text-gold-600/14 lg:block" />
        <BayLeaf className="pointer-events-none absolute left-1/2 -top-4 hidden h-40 w-20 -translate-x-1/2 rotate-6 text-gold-600/10 md:block" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal y={40} scale={0.96} blur>
              <div className="relative">
                <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-[1.6rem] border border-gold-500/40 sm:block" />
                <Parallax speed={24}>
                  <div className="card-sheen relative aspect-[4/5] overflow-hidden rounded-[1.6rem] shadow-float">
                    <Image
                      src="/img/fine-dining.jpg"
                      alt={tf({
                        en: "A laid table in the Poushee dining room",
                        bn: "পউষীর ডাইনিং রুমে সাজানো টেবিল",
                      })}
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Parallax>
                <WaterLily className="pointer-events-none absolute -bottom-9 -right-9 h-28 w-28 text-gold-600/40" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p className="eyebrow">{t("home.story.eyebrow")}</p>
                <h2 className="font-title mt-4 text-[2.1rem] sm:text-[2.7rem]">
                  {t("home.story.title")}
                </h2>
                <span className="rule-draw mt-5 block" />
                <div className="font-body mt-6 space-y-4 leading-relaxed text-ink-soft">
                  <p>{t("home.story.p1")}</p>
                  <p>{t("home.story.p2")}</p>
                </div>
                <p className="mt-6 font-script text-2xl text-gold-700">
                  {tf(SITE.motto)}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================ SIGNATURE DISHES */}
      <section
        id="featured"
        className="section-blue relative overflow-hidden py-24 text-cream-50 sm:py-28"
      >
        <div className="pointer-events-none absolute inset-0 text-cream-50 bg-dots opacity-[0.06]" />
        <SectionMark
          index={3}
          label={t("featured.eyebrow")}
          tone="light"
          className="left-2 top-8 sm:left-6 sm:top-10"
        />
        <span className="deco-glow -left-24 top-10 h-80 w-80 opacity-70" />
        <FloralSpray className="pointer-events-none absolute -right-8 top-6 hidden h-72 w-64 text-gold-300/16 lg:block" />
        <WaterLily className="pointer-events-none absolute left-8 bottom-6 hidden h-32 w-32 text-cream-50/12 md:block" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="eyebrow justify-center !text-gold-300">
                {t("featured.eyebrow")}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-title mt-4 text-[2.1rem] text-cream-50 sm:text-[2.8rem]">
                {t("featured.title")}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="rule-draw mx-auto mt-5 block" />
            </Reveal>
            <Reveal delay={0.14}>
              <p className="font-body mt-5 leading-relaxed text-cream-50/72">
                {t("featured.subtitle")}
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map(({ category, dish }, i) => (
              <Reveal
                key={`${category.slug}-${dish.slug}`}
                delay={(i % 3) * 0.09}
                y={34}
                scale={0.96}
                blur
              >
                <FeaturedDishCard
                  dish={dish}
                  categorySlug={category.slug}
                  priority={i < 3}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 text-center">
              <ButtonLink href="/menu" variant="gold" size="lg">
                {t("featured.viewAll")}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================ VISIT / CLOSING CTA */}
      <section
        id="visit"
        className="relative overflow-hidden bg-navy-950 py-24 text-cream-50 sm:py-28"
      >
        <span className="seam absolute inset-x-0 top-0 opacity-60" />
        <div className="pointer-events-none absolute inset-0 text-cream-50 bg-dots opacity-[0.06]" />
        <SectionMark
          index={4}
          label={t("aboutPage.cta.eyebrow")}
          tone="light"
          className="left-2 top-8 sm:left-6 sm:top-10"
        />
        <span className="deco-glow -left-24 top-10 h-80 w-80 opacity-70" />
        <FloralSpray className="pointer-events-none absolute -right-8 top-6 hidden h-72 w-64 [transform:scaleX(-1)] text-gold-300/16 lg:block" />
        <WaterLily className="pointer-events-none absolute left-10 bottom-6 hidden h-32 w-32 text-cream-50/12 md:block" />
        <PalmFrond className="pointer-events-none absolute right-6 bottom-4 h-36 w-44 text-gold-300/16" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow justify-center !text-gold-300">
              {t("aboutPage.cta.eyebrow")}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-title mt-4 text-[2.1rem] text-cream-50 sm:text-[2.8rem]">
              {t("aboutPage.cta.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="rule-draw mx-auto mt-5 block" />
          </Reveal>
          <Reveal delay={0.14}>
            <p className="font-body mx-auto mt-5 max-w-xl leading-relaxed text-cream-50/75">
              {t("aboutPage.cta.body")}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/menu" variant="gold" size="lg">
                {t("aboutPage.cta.menu")}
              </ButtonLink>
              <CallNowButton tone="light" size="lg" />
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-10 flex flex-col items-center gap-2 text-sm text-cream-50/70">
              <p className="font-body">{tf(SITE.address)}</p>
              <p className="font-body">{tf(SITE.hours)}</p>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body mt-1 inline-flex items-center gap-1.5 text-gold-300 transition-colors hover:text-gold-200"
              >
                {t("contact.directions")}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
