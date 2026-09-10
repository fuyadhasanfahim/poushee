/**
 * Central, static business information for poushee®.
 * Sourced from the client's official business card.
 */
export const SITE = {
  name: "Poushee",
  /** plain-text brand name for body copy (the stylised "PousheE" lives only in the logo) */
  wordmark: "Poushee",
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
  /** primary number for "Call Now" / WhatsApp actions */
  callNumber: "+8801881222666",
  callNumberDisplay: "+88 01881-222666",
  whatsapp: "8801881222666",

  emails: [
    "poushee.hotel.restaurant@gmail.com",
    "ahmed.poushee.hotel.restaurant@gmail.com",
  ],

  hours: {
    en: "Open every day · 7:00 AM – 12:30 AM",
    bn: "প্রতিদিন খোলা · সকাল ৭:০০ – রাত ১২:৩০",
  },

  pricePerPerson: {
    en: "৳300–600 per person",
    bn: "জনপ্রতি ৳৩০০–৬০০",
  },

  social: {
    facebook: "https://www.facebook.com/Poushee.coxsbazar",
    foodpanda:
      "https://www.foodpanda.com.bd/restaurant/irs0/poushee-restaurant-kolatoli",
  },

  mapQuery: "Kolatoli, Cox's Bazar, Bangladesh",
  mapsUrl:
    "https://www.google.com/maps/place/Poushee+Hotel+%26+Restaurant/@21.4162127,91.9854135,17z/data=!4m15!1m8!3m7!1s0x30adc815055f4187:0xcd4f33e0418601e7!2sPoushee+Hotel+%26+Restaurant!8m2!3d21.4162127!4d91.9854135!10e1!16s%2Fg%2F1th6h4gn!3m5!1s0x30adc815055f4187:0xcd4f33e0418601e7!8m2!3d21.4162127!4d91.9854135!16s%2Fg%2F1th6h4gn!18m1!1e1?entry=ttu",
} as const;

export type Site = typeof SITE;
