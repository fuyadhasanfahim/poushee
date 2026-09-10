"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/language-provider";
import { SITE } from "@/lib/site";
import { MENU, featuredDishes } from "@/content/menu";
import {
  Reveal,
  Parallax,
  Floaty,
  AnimatedHeading,
} from "@/components/motion";
import { ButtonLink } from "@/components/ui/button";
import { OrderNowButton } from "@/components/order-now-button";
import { DishCard } from "@/components/menu/dish-card";
import { CategoryCard } from "@/components/menu/category-card";
import { SectionMark, SeamDivider } from "@/components/decor/section-frame";
import {
  Sprig,
  BayLeaf,
  SpiceStar,
  DottedArc,
  PlateRings,
  SteamCurls,
} from "@/components/decor/vectors";

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SITE.mapQuery,
)}`;

function Marquee() {
  const { lang } = useLanguage();
  const words =
    lang === "bn"
      ? ["মেজবানি", "কালা ভুনা", "সরষে ইলিশ", "কাচ্চি বিরিয়ানি", "তাজা সি-ফুড", "বার্বিকিউ", "ভর্তা", "নেহারি"]
      : ["Mezbani", "Kala Bhuna", "Sorshe Ilish", "Kacchi Biryani", "Fresh Seafood", "Coal BBQ", "Bhorta", "Nihari"];
  const run = [...words, ...words];
  return (
    <div className="marquee-mask relative flex overflow-hidden border-y border-cream-50/10 bg-navy-950 py-4 select-none">
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
  const featured = featuredDishes(6);

  return (
    <>
      {/* ============================================ HERO */}
      <section
        id="hero"
        className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950 pt-24 sm:pt-28"
      >
        {/* photo */}
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

        {/* floating decor */}
        <Floaty className="pointer-events-none absolute -left-10 top-24 hidden sm:block" dur={11} dist={20}>
          <Sprig className="h-52 w-36 text-gold-300/20" />
        </Floaty>
        <Floaty className="pointer-events-none absolute right-10 top-1/3" dur={9} dist={16} delay={1}>
          <SpiceStar className="h-20 w-20 text-gold-300/25 sm:h-28 sm:w-28" />
        </Floaty>
        <Floaty className="pointer-events-none absolute bottom-8 right-6 hidden lg:block" dur={13} dist={22} delay={0.6}>
          <DottedArc className="h-40 w-40 text-gold-300/30" />
        </Floaty>
        <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-gold-500/15 blur-[130px]" />

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
              <span className="mt-1 block italic text-gold-gradient">
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
                <ButtonLink href="#contact" variant="ghost-light" size="lg">
                  {t("hero.ctaContact")}
                </ButtonLink>
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

        <div className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-cream-50/40">
          <span className="text-[0.62rem] uppercase tracking-[0.3em]">
            {t("hero.scroll")}
          </span>
          <Floaty dur={2.2} dist={6}>
            <span className="block h-8 w-px bg-cream-50/30" />
          </Floaty>
        </div>
      </section>

      <Marquee />

      {/* ============================================ FEATURED */}
      <section
        id="featured"
        className="section-tint relative scroll-mt-24 overflow-hidden py-24 sm:py-28"
      >
        <span className="seam absolute inset-x-0 top-0" />
        <SectionMark
          index={1}
          label={t("featured.eyebrow")}
          className="left-2 top-8 sm:left-6 sm:top-10"
        />
        <span className="deco-glow -left-24 top-10 h-80 w-80 bg-gold-400/20" />
        <PlateRings className="pointer-events-none absolute -right-24 top-24 h-72 w-72 text-navy-800/[0.06]" />
        <BayLeaf className="pointer-events-none absolute -right-6 top-40 hidden h-64 w-28 rotate-12 text-gold-600/12 lg:block" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="eyebrow justify-center">{t("featured.eyebrow")}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 text-[2.1rem] sm:text-[2.8rem]">
                {t("featured.title")}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="rule-draw mx-auto mt-5 block" />
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 leading-relaxed text-ink-soft">
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
                <DishCard
                  dish={dish}
                  categorySlug={category.slug}
                  priority={i < 3}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 text-center">
              <ButtonLink href="/menu" variant="primary" size="lg">
                {t("featured.viewAll")}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================ KITCHEN / CRAFT BAND */}
      <section
        id="kitchen"
        className="relative scroll-mt-24 overflow-hidden bg-navy-950 py-28 text-cream-50"
      >
        <div className="absolute inset-0">
          <Parallax speed={50} className="h-[120%] w-full">
            <Image
              src="/img/curry-pot.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-40"
            />
          </Parallax>
          <div className="absolute inset-0 bg-navy-950/70" />
          <div className="absolute inset-0 text-cream-50 bg-dots opacity-[0.06]" />
        </div>
        <SteamCurls className="pointer-events-none absolute right-10 top-10 z-10 h-40 w-28 text-gold-300/25" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow justify-center !text-gold-300">
              {tf({ en: "The kitchen", bn: "রান্নাঘর" })}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 text-[2rem] text-cream-50 sm:text-[2.7rem]">
              {tf({
                en: "Slow fire, ground spice, and time",
                bn: "ধীর আঁচ, বাটা মসলা, আর সময়",
              })}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 leading-relaxed text-cream-50/72">
              {tf({
                en: "Our mezbani beef is cooked down for hours in mustard oil and ghee with a paste of roasted chickpea, coconut and peanut — the way it has been served at Chattogram feasts for generations. Nothing is rushed.",
                bn: "আমাদের মেজবানি গরু ঘণ্টার পর ঘণ্টা সরিষার তেল আর ঘিয়ে কষানো হয় — ভাজা বুট, নারকেল আর চিনাবাদাম বাটা দিয়ে, যেভাবে প্রজন্মের পর প্রজন্ম চট্টগ্রামের ভোজে পরিবেশিত হয়ে এসেছে। কিছুই তাড়াহুড়ো নয়।",
              })}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9">
              <ButtonLink href="/menu/beef-mutton" variant="gold" size="lg">
                {tf({ en: "See the house kitchen", bn: "ঘরের রান্না দেখুন" })}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================ CHAPTERS */}
      <section
        id="chapters"
        className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28"
      >
        <SectionMark
          index={2}
          label={t("menuIndex.eyebrow")}
          className="right-2 top-8 text-right sm:right-6 sm:top-10"
        />
        <span className="deco-glow right-[-6rem] top-24 h-80 w-80 bg-gold-400/15" />
        <Sprig className="pointer-events-none absolute -left-6 top-16 h-44 w-28 text-gold-600/12" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <Reveal>
                <p className="eyebrow">{t("menuIndex.eyebrow")}</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-4 text-[2.1rem] sm:text-[2.8rem]">
                  {t("menuIndex.title")}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <span className="rule-draw mt-5 block" />
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <ButtonLink href="/menu" variant="ghost">
                {t("featured.viewAll")}
              </ButtonLink>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MENU.slice(0, 6).map((category, i) => (
              <Reveal
                key={category.slug}
                delay={(i % 3) * 0.09}
                y={34}
                scale={0.96}
                blur
              >
                <CategoryCard category={category} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SeamDivider className="py-2" />

      {/* ============================================ ABOUT */}
      <section
        id="about"
        className="section-tint relative scroll-mt-24 overflow-hidden py-24 sm:py-28"
      >
        <span className="seam absolute inset-x-0 top-0" />
        <SectionMark
          index={3}
          label={t("about.eyebrow")}
          className="left-2 top-8 sm:left-6 sm:top-10"
        />
        <span className="deco-glow left-[-4rem] bottom-10 h-80 w-80 bg-gold-400/18" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-full w-full rounded-[1.6rem] border border-gold-500/40" />
                <Parallax speed={26}>
                  <div className="card-sheen group relative aspect-[4/5] overflow-hidden rounded-[1.6rem] shadow-float">
                    <Image
                      src="/img/dining-room.jpg"
                      alt={tf({
                        en: "The dining room at poushee",
                        bn: "পউষীর ডাইনিং রুম",
                      })}
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Parallax>
                <DottedArc className="absolute -bottom-6 -right-6 h-24 w-24 text-gold-600/40" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p className="eyebrow">{t("about.eyebrow")}</p>
                <h2 className="mt-4 text-[2.1rem] sm:text-[2.7rem]">
                  {t("about.title")}
                </h2>
                <span className="rule-draw mt-5 block" />
                <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
                  <p>{t("about.p1")}</p>
                  <p>{t("about.p2")}</p>
                  <p>{t("about.p3")}</p>
                </div>

                <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    { n: 1, Icon: Sprig },
                    { n: 2, Icon: BayLeaf },
                    { n: 3, Icon: PlateRings },
                  ].map(({ n, Icon }, i) => (
                    <Reveal as="li" key={n} delay={0.1 + i * 0.08} y={20}>
                      <div className="group h-full rounded-2xl border border-navy-800/10 bg-cream-50/90 p-4 shadow-card backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-gold-500/45 hover:shadow-float">
                        <Icon className="h-7 w-7 text-gold-600 transition-transform duration-500 group-hover:-rotate-6" />
                        <h3 className="mt-3 font-display text-[1.02rem] leading-tight text-navy-900">
                          {t(`about.value${n}.title` as "about.value1.title")}
                        </h3>
                        <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink-soft">
                          {t(`about.value${n}.body` as "about.value1.body")}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================ CONTACT */}
      <section
        id="contact"
        className="relative scroll-mt-24 overflow-hidden pb-10 pt-24 sm:pt-28"
      >
        <SectionMark
          index={4}
          label={t("contact.eyebrow")}
          className="right-2 top-6 text-right sm:right-6"
        />
        <span className="deco-glow right-[-4rem] top-0 h-80 w-80 bg-gold-400/15" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal scale={0.97}>
            <div className="relative overflow-hidden rounded-[2rem] shadow-float ring-1 ring-navy-950/10">
              <div className="pointer-events-none absolute -left-3 -top-3 z-20 h-16 w-16 rounded-tl-[2rem] border-l-2 border-t-2 border-gold-400/50" />
              <div className="pointer-events-none absolute -bottom-3 -right-3 z-20 h-16 w-16 rounded-br-[2rem] border-b-2 border-r-2 border-gold-400/50" />
              <div className="absolute inset-0">
                <Parallax speed={30} className="relative h-[118%] w-full">
                  <Image
                    src="/img/beach.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 1100px, 100vw"
                    className="object-cover"
                  />
                </Parallax>
                <div className="absolute inset-0 bg-navy-950/78" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
                <div className="absolute inset-0 text-cream-50 bg-dots opacity-[0.06]" />
              </div>

              <div className="relative z-10 grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="p-8 text-cream-50 sm:p-12">
                  <p className="eyebrow !text-gold-300">{t("contact.eyebrow")}</p>
                  <h2 className="mt-4 text-[2rem] text-cream-50 sm:text-[2.6rem]">
                    {t("contact.title")}
                  </h2>

                  <dl className="mt-8 space-y-6 text-sm">
                    <div>
                      <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-300">
                        {t("contact.address")}
                      </dt>
                      <dd className="mt-1.5 leading-relaxed text-cream-50/78">
                        {tf(SITE.address)}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-300">
                        {t("contact.phone")}
                      </dt>
                      <dd className="mt-1.5 space-y-0.5 text-cream-50/78">
                        {SITE.phonesDisplay.map((p, i) => (
                          <a
                            key={p}
                            href={`tel:${SITE.phones[i]}`}
                            className="block transition-colors hover:text-cream-50"
                          >
                            {p}
                          </a>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-300">
                        {t("contact.email")}
                      </dt>
                      <dd className="mt-1.5 space-y-0.5 text-cream-50/78">
                        {SITE.emails.map((e) => (
                          <a
                            key={e}
                            href={`mailto:${e}`}
                            className="block break-all transition-colors hover:text-cream-50"
                          >
                            {e}
                          </a>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-300">
                        {t("contact.hours")}
                      </dt>
                      <dd className="mt-1.5 text-cream-50/78">{tf(SITE.hours)}</dd>
                    </div>
                  </dl>

                  <div className="mt-9 flex flex-wrap gap-3">
                    <a
                      href={mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-5 py-2.5 text-sm font-medium text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-18px_rgba(252,249,243,0.5)]"
                    >
                      {t("contact.directions")}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    <OrderNowButton tone="gold" />
                  </div>
                </div>

                <div className="relative flex min-h-[16rem] items-center justify-center border-t border-cream-50/10 p-10 text-center lg:border-l lg:border-t-0">
                  <Floaty dur={10} dist={14}>
                    <div className="flex flex-col items-center gap-3">
                      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-gold-300">
                        <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" stroke="currentColor" strokeWidth="1.6" />
                        <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                      <p className="font-display text-2xl text-cream-50">
                        {tf({ en: "Kolatoli Beach", bn: "কলাতলী সৈকত" })}
                      </p>
                      <p className="max-w-xs text-sm leading-relaxed text-cream-50/65">
                        {tf({
                          en: "Dolphin Mor, inside World Beach Resort — a few steps from the tide.",
                          bn: "ডলফিন মোড়, ওয়ার্ল্ড বিচ রিসোর্টের ভেতরে — ঢেউ থেকে কয়েক কদম দূরে।",
                        })}
                      </p>
                    </div>
                  </Floaty>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
