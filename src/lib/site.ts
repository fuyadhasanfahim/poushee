/**
 * Central, static business information for poushee®.
 * Sourced from the client's official business card.
 */
export const SITE = {
  name: "PousheE",
  /** lowercase trademark form for body copy */
  wordmark: "poushee",
  registered: true,
  url: "https://poushee.vercel.app",

  tagline: {
    en: "Hotel & Restaurant",
    bn: "হোটেল ও রেস্টুরেন্ট",
  },

  motto: {
    en: "Your trust, our triumph.",
    bn: "আপনাদের আস্থা, আমরা করব জয়।",
  },

  description: {
    en: "A premium hotel and restaurant on the world's longest sea beach at Kolatoli, Cox's Bazar — serving Chattogram mezbani, fresh seafood, biryani and traditional Bangladeshi cuisine.",
    bn: "কক্সবাজারের কলাতলীতে বিশ্বের দীর্ঘতম সমুদ্রসৈকতের পাশে একটি প্রিমিয়াম হোটেল ও রেস্টুরেন্ট — চাটগাঁইয়া মেজবানি, তাজা সামুদ্রিক খাবার, বিরিয়ানি ও ঐতিহ্যবাহী বাংলা রান্না।",
  },

  address: {
    en: "World Beach Resort, Dolphin Mor, Kolatoli, Cox's Bazar, Bangladesh",
    bn: "ওয়ার্ল্ড বিচ রিসোর্ট, ডলফিন মোড়, কলাতলী, কক্সবাজার, বাংলাদেশ",
  },

  phones: ["+8801881222444", "+8801881222666"],
  phonesDisplay: ["+88 01881-222444", "+88 01881-222666"],

  emails: [
    "poushee.hotel.restaurant@gmail.com",
    "ahmed.poushee.hotel.restaurant@gmail.com",
  ],

  hours: {
    en: "Open daily · 8:00 AM – 11:30 PM",
    bn: "প্রতিদিন খোলা · সকাল ৮:০০ – রাত ১১:৩০",
  },

  mapQuery: "Kolatoli, Cox's Bazar, Bangladesh",
} as const;

export type Site = typeof SITE;
