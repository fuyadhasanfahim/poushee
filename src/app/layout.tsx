import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Hind_Siliguri, Tiro_Bangla } from "next/font/google";
import "./globals.css";
import {
  LanguageProvider,
  LANG_BOOTSTRAP_SCRIPT,
} from "@/lib/i18n/language-provider";
import { SITE } from "@/lib/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

/* Body + logo — Inter */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body-en",
});

/* Editorial display serif — headlines */
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display-en",
  axes: ["opsz", "SOFT"],
});

/* Bengali body */
const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  display: "swap",
  variable: "--font-body-bn",
});

/* Bengali display — elegant serif to pair with Fraunces */
const tiroBangla = Tiro_Bangla({
  weight: "400",
  subsets: ["bengali", "latin"],
  display: "swap",
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
      className={`${inter.variable} ${fraunces.variable} ${hindSiliguri.variable} ${tiroBangla.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-cream-50">
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
              telephone: SITE.phonesDisplay[0],
              email: SITE.emails[0],
              url: SITE.url,
              hasMenu: `${SITE.url}/menu`,
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
            }),
          }}
        />
        <LanguageProvider>
          <Navbar />
          <main className="content-layer flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
