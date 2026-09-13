import type { Metadata, Viewport } from "next";
import {
  Inter,
  Lobster_Two,
  Hind_Siliguri,
  Tiro_Bangla,
} from "next/font/google";
import "./globals.css";
import {
  LanguageProvider,
  LANG_BOOTSTRAP_SCRIPT,
} from "@/lib/i18n/language-provider";
import { SITE } from "@/lib/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { ScrollProgress } from "@/components/scroll-progress";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body-en",
});

const lobsterTwo = Lobster_Two({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title-en",
});

const hindSiliguri = Hind_Siliguri({
  weight: ["400", "600", "700"],
  subsets: ["bengali"],
  display: "swap",
  preload: false,
  variable: "--font-body-bn",
});

const tiroBangla = Tiro_Bangla({
  weight: "400",
  subsets: ["bengali"],
  display: "swap",
  preload: false,
  variable: "--font-heading-bn",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline.en}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description.en,
  applicationName: SITE.name,
  keywords: [
    "Poushee",
    "poushee",
    "Cox's Bazar restaurant",
    "Kolatoli restaurant",
    "Bangladeshi cuisine",
    "Mezbani",
    "seafood Cox's Bazar",
    "hotel and restaurant",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline.en}`,
    description: SITE.description.en,
    locale: "en_US",
    alternateLocale: "bn_BD",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline.en}`,
    description: SITE.description.en,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0c1636",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${lobsterTwo.variable} ${hindSiliguri.variable} ${tiroBangla.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <script dangerouslySetInnerHTML={{ __html: LANG_BOOTSTRAP_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: SITE.name,
              description: SITE.description.en,
              servesCuisine: ["Bangladeshi", "Chattogram", "Seafood"],
              priceRange: "৳৳",
              telephone: SITE.callNumberDisplay,
              email: SITE.emails[0],
              url: SITE.url,
              image: `${SITE.url}/img/hero-thali.jpg`,
              hasMenu: `${SITE.url}/menu`,
              sameAs: [SITE.social.facebook],
              acceptsReservations: true,
              address: {
                "@type": "PostalAddress",
                streetAddress: "World Beach Resort, Dolphin Mor, Kolatoli",
                addressLocality: "Cox's Bazar",
                addressCountry: "BD",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 21.4127,
                longitude: 92.0058,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "07:00",
                closes: "00:30",
              },
            }),
          }}
        />
        <LanguageProvider>
          <SmoothScroll>
            <ScrollProgress />
            <Navbar />
            <main className="content-layer flex-1">{children}</main>
            <Footer />
            <FloatingActions />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
