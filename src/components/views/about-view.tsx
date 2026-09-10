"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/language-provider";
import { SITE } from "@/lib/site";
import { Reveal, Parallax, Floaty, AnimatedHeading } from "@/components/motion";
import { ButtonLink } from "@/components/ui/button";
import { OrderNowButton } from "@/components/order-now-button";
import { SectionMark, SeamDivider } from "@/components/decor/section-frame";
import {
  Sprig,
  BayLeaf,
  SpiceStar,
  DottedArc,
  PlateRings,
  SteamCurls,
} from "@/components/decor/vectors";

const GALLERY: { src: string; alt: { en: string; bn: string } }[] = [
  {
    src: "/img/spices.jpg",
    alt: { en: "Ground spices for the day's cooking", bn: "দিনের রান্নার জন্য বাটা মসলা" },
  },
  {
    src: "/img/curry-pot.jpg",
    alt: { en: "A curry pot on slow fire", bn: "ধীর আঁচে কারির হাঁড়ি" },
  },
  {
    src: "/img/seafood-ice.jpg",
    alt: { en: "The day's catch on ice", bn: "বরফে দিনের ধরা মাছ" },
  },
  {
    src: "/img/ribs-board.jpg",
    alt: { en: "Coal-grilled meat, ready to serve", bn: "কয়লায় ঝলসানো মাংস, পরিবেশনের জন্য প্রস্তুত" },
  },
];

export function AboutView() {
  const { t, tf } = useLanguage();

  return (
    <>
      {/* ============================================ HERO */}
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 text-cream-50 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0">
          <Parallax speed={50} className="h-[120%] w-full">
            <Image
              src="/img/dining-room.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-40"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/80 to-navy-950" />
          <div className="absolute inset-0 text-cream-50 bg-dots opacity-[0.06]" />
        </div>

        <Floaty
          className="pointer-events-none absolute right-8 top-28 hidden sm:block"
          dur={11}
          dist={18}
        >
          <SpiceStar className="h-24 w-24 text-gold-300/25" />
        </Floaty>
        <PlateRings className="pointer-events-none absolute -left-20 -top-10 z-10 h-72 w-72 text-gold-300/12" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow justify-center !text-gold-300">
              {t("aboutPage.eyebrow")}
            </p>
          </Reveal>
          <h1 className="mt-4 text-[2.4rem] leading-[1.08] text-cream-50 sm:text-5xl lg:text-[3.4rem]">
            <AnimatedHeading text={t("aboutPage.title")} delay={0.12} />
          </h1>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-cream-50/75">
              {t("aboutPage.intro")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================ ORIGIN */}
      <section className="section-tint relative overflow-hidden py-24 sm:py-28">
        <span className="seam absolute inset-x-0 top-0" />
        <SectionMark
          index={1}
          label={t("aboutPage.origin.eyebrow")}
          className="left-2 top-8 sm:left-6 sm:top-10"
        />
        <span className="deco-glow -left-24 top-10 h-80 w-80" />
        <Sprig className="pointer-events-none absolute -right-6 top-24 hidden h-56 w-32 rotate-6 text-gold-600/12 lg:block" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal delay={0.08}>
              <div>
                <p className="eyebrow">{t("aboutPage.origin.eyebrow")}</p>
                <h2 className="mt-4 text-[2rem] sm:text-[2.6rem]">
                  {t("aboutPage.origin.title")}
                </h2>
                <span className="rule-draw mt-5 block" />
                <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
                  <p>{t("aboutPage.origin.p1")}</p>
                  <p>{t("aboutPage.origin.p2")}</p>
                  <p>{t("aboutPage.origin.p3")}</p>
                </div>
              </div>
            </Reveal>

            <Reveal y={40} scale={0.96} blur>
              <div className="relative">
                <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-[1.6rem] border border-gold-500/40 sm:block" />
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
                <DottedArc className="absolute -bottom-6 -left-6 h-24 w-24 text-gold-600/40" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================ KITCHEN BAND */}
      <section className="relative overflow-hidden bg-navy-950 py-28 text-cream-50">
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
          <div className="absolute inset-0 bg-navy-950/72" />
          <div className="absolute inset-0 text-cream-50 bg-dots opacity-[0.06]" />
        </div>
        <SteamCurls className="pointer-events-none absolute right-10 top-10 z-10 h-40 w-28 text-gold-300/25" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow justify-center !text-gold-300">
              {t("aboutPage.kitchen.eyebrow")}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 text-[2rem] text-cream-50 sm:text-[2.6rem]">
              {t("aboutPage.kitchen.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6 space-y-4 leading-relaxed text-cream-50/72">
              <p>{t("aboutPage.kitchen.p1")}</p>
              <p>{t("aboutPage.kitchen.p2")}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================ THE SETTING */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <SectionMark
          index={2}
          label={t("aboutPage.sea.eyebrow")}
          className="right-2 top-8 text-right sm:right-6 sm:top-10"
        />
        <span className="deco-glow right-[-6rem] top-24 h-80 w-80" />
        <BayLeaf className="pointer-events-none absolute -left-6 top-16 hidden h-56 w-28 -rotate-6 text-gold-600/12 lg:block" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal y={40} scale={0.96} blur>
              <div className="relative">
                <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-[1.6rem] border border-gold-500/40 sm:block" />
                <Parallax speed={24}>
                  <div className="card-sheen relative aspect-[4/5] overflow-hidden rounded-[1.6rem] shadow-float">
                    <Image
                      src="/img/beach.jpg"
                      alt={tf({
                        en: "Kolatoli beach beside the restaurant",
                        bn: "রেস্টুরেন্টের পাশে কলাতলী সৈকত",
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
                <p className="eyebrow">{t("aboutPage.sea.eyebrow")}</p>
                <h2 className="mt-4 text-[2rem] sm:text-[2.6rem]">
                  {t("aboutPage.sea.title")}
                </h2>
                <span className="rule-draw mt-5 block" />
                <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
                  <p>{t("aboutPage.sea.p1")}</p>
                  <p>{t("aboutPage.sea.p2")}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SeamDivider className="py-2" />

      {/* ============================================ VALUES */}
      <section className="section-tint relative overflow-hidden py-24 sm:py-28">
        <span className="seam absolute inset-x-0 top-0" />
        <SectionMark
          index={3}
          label={t("aboutPage.values.eyebrow")}
          className="left-2 top-8 sm:left-6 sm:top-10"
        />
        <span className="deco-glow left-[-4rem] bottom-10 h-80 w-80" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="eyebrow justify-center">
                {t("aboutPage.values.eyebrow")}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 text-[2rem] sm:text-[2.6rem]">
                {t("aboutPage.values.title")}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="rule-draw mx-auto mt-5 block" />
            </Reveal>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              { n: 1, Icon: Sprig },
              { n: 2, Icon: BayLeaf },
              { n: 3, Icon: PlateRings },
            ].map(({ n, Icon }, i) => (
              <Reveal as="li" key={n} delay={0.08 + i * 0.08} y={24}>
                <div className="group h-full rounded-2xl border border-navy-800/10 bg-cream-50/90 p-6 shadow-card backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-gold-500/45 hover:shadow-float">
                  <Icon className="h-8 w-8 text-gold-600 transition-transform duration-500 group-hover:-rotate-6" />
                  <h3 className="mt-4 font-display text-[1.15rem] leading-tight text-navy-900">
                    {t(`about.value${n}.title` as "about.value1.title")}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">
                    {t(`about.value${n}.body` as "about.value1.body")}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {GALLERY.map((g, i) => (
              <Reveal key={g.src} delay={(i % 4) * 0.07} y={28} scale={0.96} blur>
                <div className="card-sheen relative aspect-square overflow-hidden rounded-xl shadow-card">
                  <Image
                    src={g.src}
                    alt={tf(g.alt)}
                    fill
                    sizes="(min-width: 640px) 22vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ CTA */}
      <section className="relative overflow-hidden pb-16 pt-24 sm:pt-28">
        <SectionMark
          index={4}
          label={t("aboutPage.cta.eyebrow")}
          className="right-2 top-6 text-right sm:right-6"
        />
        <span className="deco-glow right-[-4rem] top-0 h-80 w-80" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal scale={0.97}>
            <div className="relative overflow-hidden rounded-[2rem] shadow-float">
              <div className="absolute inset-0">
                <Parallax speed={30} className="relative h-[118%] w-full">
                  <Image
                    src="/img/hero-thali.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 1100px, 100vw"
                    className="object-cover"
                  />
                </Parallax>
                <div className="absolute inset-0 bg-navy-950/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
                <div className="absolute inset-0 text-cream-50 bg-dots opacity-[0.06]" />
              </div>

              <div className="relative z-10 mx-auto max-w-2xl px-6 py-16 text-center text-cream-50 sm:px-12 sm:py-20">
                <p className="eyebrow justify-center !text-gold-300">
                  {t("aboutPage.cta.eyebrow")}
                </p>
                <h2 className="mt-4 text-[2rem] text-cream-50 sm:text-[2.6rem]">
                  {t("aboutPage.cta.title")}
                </h2>
                <p className="mx-auto mt-5 max-w-lg leading-relaxed text-cream-50/75">
                  {t("aboutPage.cta.body")}
                </p>
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  <ButtonLink href="/menu" variant="gold" size="lg">
                    {t("aboutPage.cta.menu")}
                  </ButtonLink>
                  <ButtonLink href="/#contact" variant="ghost-light" size="lg">
                    {t("aboutPage.cta.contact")}
                  </ButtonLink>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.18em] text-cream-50/55">
                  <span>{tf(SITE.address)}</span>
                </div>
                <div className="mt-6 flex justify-center">
                  <OrderNowButton tone="gold" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
