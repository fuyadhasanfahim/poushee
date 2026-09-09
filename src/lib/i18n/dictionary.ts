export type Lang = "en" | "bn";

export const LANGS: Lang[] = ["en", "bn"];
export const DEFAULT_LANG: Lang = "en";

/** A piece of content that exists in both languages. */
export type Localized = { en: string; bn: string };

/** Pick the correct string for the active language. */
export function pick(value: Localized, lang: Lang): string {
  return value[lang] ?? value.en;
}

/* -------------------------------------------------------------------- *
 *  UI string dictionary
 * -------------------------------------------------------------------- */

const en = {
  "nav.home": "Home",
  "nav.menu": "Menu",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.orderNow": "Order Now",
  "nav.language": "Language",
  "nav.openMenu": "Open menu",
  "nav.closeMenu": "Close menu",

  "hero.eyebrow": "Kolatoli · Cox's Bazar",
  "hero.title": "A seat by the sea, a table of tradition",
  "hero.subtitle":
    "From Chattogram mezbani to the day's fresh catch — poushee serves the flavours of Bangladesh beside the world's longest beach.",
  "hero.ctaMenu": "Explore the Menu",
  "hero.ctaContact": "Find Us",
  "hero.scroll": "Scroll to discover",

  "featured.eyebrow": "Signature dishes",
  "featured.title": "Cooked the way it has always been",
  "featured.subtitle":
    "A few plates our guests come back for. Every recipe carries a story — and we tell it on each dish's page.",
  "featured.viewAll": "See the full menu",

  "menuIndex.eyebrow": "The Menu",
  "menuIndex.title": "Fifteen chapters of flavour",
  "menuIndex.subtitle":
    "Browse by category. Tap any chapter to see its dishes, then open a dish for its history and ingredients.",
  "menuIndex.explore": "View dishes",

  "category.back": "All categories",
  "category.dishes": "Dishes",
  "category.viewDetails": "View details",
  "category.orderNow": "Order Now",
  "category.count.one": "1 dish",
  "category.count.other": "{n} dishes",

  "item.back": "Back to {category}",
  "item.story": "The story",
  "item.ingredients": "What goes in",
  "item.orderNow": "Order Now",
  "item.related": "More from {category}",
  "item.disclaimer":
    "Serving photographs are indicative. Please confirm availability before ordering.",
  "item.priceNote": "Prices in Bangladeshi Taka (৳). Half / full where two prices are shown.",

  "about.eyebrow": "Our story",
  "about.title": "Hospitality, the Cox's Bazar way",
  "about.p1":
    "poushee grew out of a simple idea: that a meal by the sea should taste of the land it belongs to. We sit at Dolphin Mor in Kolatoli, a few steps from the tide, inside World Beach Resort.",
  "about.p2":
    "Our kitchen leans on Chattogram's home cooking — slow mezbani beef, kala bhuna, fresh reef fish grilled over coal — alongside the biryani, bhorta and breakfast a Bangladeshi table expects.",
  "about.p3":
    "The name is a registered mark, written poushee®. The promise behind it is older than the sign: your trust, our triumph.",
  "about.value1.title": "Rooted in Chattogram",
  "about.value1.body": "Recipes from the region's households, not a generic menu.",
  "about.value2.title": "Caught, not stored",
  "about.value2.body": "Seafood chosen from the day's landing at the coast.",
  "about.value3.title": "A room with the view",
  "about.value3.body": "Dining beside the world's longest natural sea beach.",

  "contact.eyebrow": "Visit us",
  "contact.title": "Come find your table",
  "contact.address": "Address",
  "contact.phone": "Reservations",
  "contact.email": "Email",
  "contact.hours": "Hours",
  "contact.directions": "Get directions",

  "footer.blurb":
    "Hotel & Restaurant at World Beach Resort, Kolatoli, Cox's Bazar. Traditional Bangladeshi cuisine beside the sea.",
  "footer.explore": "Explore",
  "footer.contact": "Contact",
  "footer.rights": "All rights reserved.",
  "footer.trademark": "poushee® is a registered trademark.",

  "notFound.title": "This page has left the table",
  "notFound.body": "The page you were looking for could not be found.",
  "notFound.cta": "Back to home",

  "common.orderDisabled": "Ordering opens soon",
  "lang.en": "EN",
  "lang.bn": "বাং",
  "lang.switchToBn": "বাংলায় দেখুন",
  "lang.switchToEn": "View in English",
} as const;

export type UIKey = keyof typeof en;

const bn: Record<UIKey, string> = {
  "nav.home": "হোম",
  "nav.menu": "মেনু",
  "nav.about": "পরিচিতি",
  "nav.contact": "যোগাযোগ",
  "nav.orderNow": "অর্ডার করুন",
  "nav.language": "ভাষা",
  "nav.openMenu": "মেনু খুলুন",
  "nav.closeMenu": "মেনু বন্ধ করুন",

  "hero.eyebrow": "কলাতলী · কক্সবাজার",
  "hero.title": "সমুদ্রের পাশে বসা, ঐতিহ্যের পাতে খাওয়া",
  "hero.subtitle":
    "চাটগাঁইয়া মেজবানি থেকে দিনের তাজা মাছ — বিশ্বের দীর্ঘতম সৈকতের পাশে পউষী পরিবেশন করে বাংলার স্বাদ।",
  "hero.ctaMenu": "মেনু দেখুন",
  "hero.ctaContact": "আমাদের ঠিকানা",
  "hero.scroll": "নিচে স্ক্রল করুন",

  "featured.eyebrow": "সিগনেচার পদ",
  "featured.title": "যেভাবে চিরকাল রান্না হয়ে এসেছে",
  "featured.subtitle":
    "কয়েকটি পদ, যেগুলোর জন্য অতিথিরা বারবার ফিরে আসেন। প্রতিটি রেসিপির পেছনে একটি গল্প — প্রতিটি পদের পাতায় তা লেখা আছে।",
  "featured.viewAll": "সম্পূর্ণ মেনু দেখুন",

  "menuIndex.eyebrow": "মেনু",
  "menuIndex.title": "স্বাদের পনেরোটি অধ্যায়",
  "menuIndex.subtitle":
    "ক্যাটাগরি অনুযায়ী দেখুন। যেকোনো অধ্যায়ে চাপ দিয়ে পদগুলো দেখুন, তারপর কোনো পদে ঢুকে তার ইতিহাস ও উপকরণ জানুন।",
  "menuIndex.explore": "পদ দেখুন",

  "category.back": "সব ক্যাটাগরি",
  "category.dishes": "পদসমূহ",
  "category.viewDetails": "বিস্তারিত দেখুন",
  "category.orderNow": "অর্ডার করুন",
  "category.count.one": "১টি পদ",
  "category.count.other": "{n}টি পদ",

  "item.back": "{category}-এ ফিরে যান",
  "item.story": "ইতিহাস",
  "item.ingredients": "যা যা লাগে",
  "item.orderNow": "অর্ডার করুন",
  "item.related": "{category} থেকে আরও",
  "item.disclaimer":
    "পরিবেশনের ছবি প্রতীকী। অর্ডারের আগে সরবরাহ নিশ্চিত করে নিন।",
  "item.priceNote":
    "দাম বাংলাদেশি টাকায় (৳)। দুটি দাম থাকলে হাফ / ফুল।",

  "about.eyebrow": "আমাদের কথা",
  "about.title": "কক্সবাজারের আতিথেয়তা",
  "about.p1":
    "পউষীর জন্ম একটি সরল ভাবনা থেকে: সমুদ্রের পাশের খাবারে থাকবে এই মাটিরই স্বাদ। আমরা কলাতলীর ডলফিন মোড়ে, ঢেউ থেকে কয়েক কদম দূরে, ওয়ার্ল্ড বিচ রিসোর্টে।",
  "about.p2":
    "আমাদের রান্নাঘর চট্টগ্রামের ঘরোয়া রান্নার উপর নির্ভর করে — ধীরে রাঁধা মেজবানি গরু, কালা ভুনা, কয়লায় ঝলসানো তাজা মাছ — সঙ্গে বিরিয়ানি, ভর্তা আর বাঙালি নাশতা।",
  "about.p3":
    "নামটি একটি নিবন্ধিত ট্রেডমার্ক, লেখা হয় poushee®। এর পেছনের প্রতিশ্রুতি সাইনবোর্ডের চেয়েও পুরনো: আপনাদের আস্থা, আমরা করব জয়।",
  "about.value1.title": "চট্টগ্রামের শিকড়",
  "about.value1.body": "অঞ্চলের ঘরে ঘরে রাঁধা রেসিপি, গৎবাঁধা মেনু নয়।",
  "about.value2.title": "তাজা, জমানো নয়",
  "about.value2.body": "উপকূলে দিনের ধরা মাছ থেকে বেছে নেওয়া।",
  "about.value3.title": "জানালায় সমুদ্র",
  "about.value3.body": "বিশ্বের দীর্ঘতম প্রাকৃতিক সৈকতের পাশে খাওয়া।",

  "contact.eyebrow": "আসুন আমাদের কাছে",
  "contact.title": "আপনার টেবিল খুঁজে নিন",
  "contact.address": "ঠিকানা",
  "contact.phone": "রিজার্ভেশন",
  "contact.email": "ইমেইল",
  "contact.hours": "সময়",
  "contact.directions": "দিকনির্দেশনা নিন",

  "footer.blurb":
    "ওয়ার্ল্ড বিচ রিসোর্ট, কলাতলী, কক্সবাজারে হোটেল ও রেস্টুরেন্ট। সমুদ্রের পাশে ঐতিহ্যবাহী বাংলা রান্না।",
  "footer.explore": "ঘুরে দেখুন",
  "footer.contact": "যোগাযোগ",
  "footer.rights": "সর্বস্বত্ব সংরক্ষিত।",
  "footer.trademark": "poushee® একটি নিবন্ধিত ট্রেডমার্ক।",

  "notFound.title": "পাতাটি টেবিল ছেড়ে চলে গেছে",
  "notFound.body": "আপনি যে পাতাটি খুঁজছিলেন তা পাওয়া যায়নি।",
  "notFound.cta": "হোমে ফিরে যান",

  "common.orderDisabled": "অর্ডার শীঘ্রই চালু হচ্ছে",
  "lang.en": "EN",
  "lang.bn": "বাং",
  "lang.switchToBn": "বাংলায় দেখুন",
  "lang.switchToEn": "View in English",
};

export const DICT: Record<Lang, Record<UIKey, string>> = { en, bn };

/** Format `{token}` placeholders. */
export function format(str: string, vars?: Record<string, string | number>): string {
  if (!vars) return str;
  return str.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}

const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

/** Convert ASCII digits in a string/number to Bengali digits (for lang === "bn"). */
export function toBnDigits(value: string | number): string {
  return String(value).replace(/\d/g, (d) => BN_DIGITS[Number(d)]);
}

/** Localise a plain integer for display. */
export function num(value: number, lang: Lang): string {
  return lang === "bn" ? toBnDigits(value) : String(value);
}
