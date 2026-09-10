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
  "nav.callNow": "Call Now",
  "nav.language": "Language",
  "nav.openMenu": "Open menu",
  "nav.closeMenu": "Close menu",

  "hero.eyebrow": "Kolatoli · Cox's Bazar",
  "hero.title": "A seat by the sea, a table of tradition",
  "hero.subtitle":
    "From Chattogram mezbani to the day's fresh catch — Poushee serves the flavours of Bangladesh beside the world's longest beach.",
  "hero.ctaMenu": "Explore the Menu",
  "hero.ctaContact": "Find Us",
  "hero.scroll": "Scroll to discover",

  "home.about.eyebrow": "About the restaurant",
  "home.about.title": "A fair plate, served with care",
  "home.about.p1":
    "Poushee runs on one promise to everyone who loves to eat well: food that is wholesome and clean, served quickly, at a fair price. Nothing about that has changed since the first family kitchen.",
  "home.about.p2":
    "The kitchen leans on Chattogram home cooking — slow mezbani beef, kala bhuna, reef fish over coal — beside the biryani, bhorta and breakfast a Bangladeshi table expects. A meal runs roughly ৳300–600 a person.",
  "home.about.hours": "Open every day, 7:00 AM – 12:30 AM",

  "home.story.eyebrow": "Our story",
  "home.story.title": "The founder's table",
  "home.story.p1":
    "Poushee was built by a far-sighted restaurateur whose life's aim was simple: to serve people who love to eat well — food that is wholesome, clean and quick, at a fair price.",
  "home.story.p2":
    "Born in Chakaria, Cox's Bazar, he began in his father's restaurant as a teenager in the old town. Across some forty-five years in the trade, one wish has stayed constant — that every visitor to Cox's Bazar is welcomed with the hospitality of home.",

  "home.callCta": "Call to reserve",

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
    "Poushee grew out of a simple idea: that a meal by the sea should taste of the land it belongs to. We sit at Dolphin Mor in Kolatoli, a few steps from the tide, inside World Beach Resort.",
  "about.p2":
    "Our kitchen leans on Chattogram's home cooking — slow mezbani beef, kala bhuna, fresh reef fish grilled over coal — alongside the biryani, bhorta and breakfast a Bangladeshi table expects.",
  "about.p3":
    "The name is a registered mark, written Poushee®. The promise behind it is older than the sign: your trust, our triumph.",
  "about.value1.title": "Rooted in Chattogram",
  "about.value1.body": "Recipes from the region's households, not a generic menu.",
  "about.value2.title": "Caught, not stored",
  "about.value2.body": "Seafood chosen from the day's landing at the coast.",
  "about.value3.title": "A room with the view",
  "about.value3.body": "Dining beside the world's longest natural sea beach.",
  "about.readMore": "Read our full story",

  "aboutPage.eyebrow": "Our story",
  "aboutPage.title": "A table by the sea, set the Cox's Bazar way",
  "aboutPage.intro":
    "Poushee is a hotel and restaurant at Dolphin Mor, Kolatoli — a few steps from the tide, inside World Beach Resort. It was built on one plain idea: a meal beside the world's longest beach should taste of the coast it sits on.",

  "aboutPage.origin.eyebrow": "How it began",
  "aboutPage.origin.title": "Born from a family table",
  "aboutPage.origin.p1":
    "Poushee started the way most good kitchens do — around a family table in Chattogram, where mezbani beef simmered for half a day and nobody was allowed to rush it. When the family moved to the coast, the recipes came along, written in nobody's notebook but cooked from memory.",
  "aboutPage.origin.p2":
    "Opening beside Kolatoli beach meant those household dishes could finally sit next to the sea they were always meant for. The name is a registered mark, written Poushee®, but the promise behind it is older than the signboard: your trust, our triumph.",
  "aboutPage.origin.p3":
    "Today the dining room seats guests from morning breakfast through a late dinner, and the kitchen still cooks the way the family always has — slowly, by hand, and in season.",

  "aboutPage.kitchen.eyebrow": "The kitchen",
  "aboutPage.kitchen.title": "Slow fire, ground spice, and time",
  "aboutPage.kitchen.p1":
    "Our mezbani beef is cooked down for hours in mustard oil and ghee with a paste of roasted chickpea, coconut and peanut — the way it has been served at Chattogram feasts for generations. Kala bhuna gets the same patience, until the spice turns almost black and clings to the meat.",
  "aboutPage.kitchen.p2":
    "Spices are roasted and ground in-house, not scooped from a packet. Bhortas are pounded to order. The biryani rice is layered and sealed, never stirred together on a plate. Nothing here is built to be fast — it is built to taste like home.",

  "aboutPage.sea.eyebrow": "The setting",
  "aboutPage.sea.title": "A few steps from the tide",
  "aboutPage.sea.p1":
    "The restaurant sits inside World Beach Resort at Dolphin Mor, close enough to Kolatoli beach that you can hear the water over dinner. Wide windows, sea air, and a room that stays calm even when the town outside is busy.",
  "aboutPage.sea.p2":
    "Seafood is chosen from the day's landing at the coast — reef fish, prawn and crab that were in the water that morning, grilled over coal or folded into a light curry. What isn't fresh that day simply isn't on the table.",

  "aboutPage.values.eyebrow": "What we hold to",
  "aboutPage.values.title": "Three things we don't compromise on",

  "aboutPage.cta.eyebrow": "Come sit with us",
  "aboutPage.cta.title": "Your table is by the sea",
  "aboutPage.cta.body":
    "Browse the full menu before you arrive, or find us at Kolatoli and reserve a seat beside the water.",
  "aboutPage.cta.menu": "Explore the menu",
  "aboutPage.cta.contact": "Find us & reserve",

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
  "footer.reach": "Reach us",
  "footer.rights": "All rights reserved.",
  "footer.trademark": "Poushee® is a registered trademark.",

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
  "nav.callNow": "কল করুন",
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

  "home.about.eyebrow": "আমাদের রেস্তোরাঁ",
  "home.about.title": "যত্নে পরিবেশিত, ন্যায্য মূল্যে",
  "home.about.p1":
    "ভোজন রসিকদের জন্য একটাই প্রতিশ্রুতি নিয়ে পউষী চলে — স্বাস্থ্যসম্মত ও পরিচ্ছন্ন খাবার, দ্রুততার সঙ্গে, ন্যায্য মূল্যে পরিবেশন করা। প্রথম পারিবারিক রান্নাঘর থেকে আজ পর্যন্ত এই কথাটি বদলায়নি।",
  "home.about.p2":
    "রান্নাঘর নির্ভর করে চট্টগ্রামের ঘরোয়া রান্নার উপর — ধীরে রাঁধা মেজবানি গরু, কালা ভুনা, কয়লায় ঝলসানো তাজা মাছ — সঙ্গে বিরিয়ানি, ভর্তা আর বাঙালি নাশতা। জনপ্রতি খরচ আনুমানিক ৳৩০০–৬০০।",
  "home.about.hours": "প্রতিদিন খোলা, সকাল ৭:০০ – রাত ১২:৩০",

  "home.story.eyebrow": "আমাদের গল্প",
  "home.story.title": "প্রতিষ্ঠাতার কথা",
  "home.story.p1":
    "একজন দূরদর্শী রেস্তোরাঁ ব্যবসায়ী পউষী গড়ে তোলেন, যাঁর জীবনের মূল উদ্দেশ্য ছিল সরল — ভোজন রসিকদের জন্য স্বাস্থ্যসম্মত, পরিচ্ছন্ন ও দ্রুত পরিবেশন, ন্যায্য মূল্যে।",
  "home.story.p2":
    "কক্সবাজারের চকরিয়ায় জন্ম হলেও কৈশোরেই তিনি কক্সবাজার শহরে পিতার রেস্তোরাঁ ব্যবসায় হাত পাকান। প্রায় ৪৫ বছরের অভিজ্ঞতায় তাঁর একটাই চাওয়া — কক্সবাজারে আসা প্রতিটি অতিথি যেন ঘরের আতিথেয়তায় আপ্যায়িত হন।",

  "home.callCta": "রিজার্ভেশনে কল করুন",

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
    "নামটি একটি নিবন্ধিত ট্রেডমার্ক, লেখা হয় Poushee®। এর পেছনের প্রতিশ্রুতি সাইনবোর্ডের চেয়েও পুরনো: আপনাদের আস্থা, আমরা করব জয়।",
  "about.value1.title": "চট্টগ্রামের শিকড়",
  "about.value1.body": "অঞ্চলের ঘরে ঘরে রাঁধা রেসিপি, গৎবাঁধা মেনু নয়।",
  "about.value2.title": "তাজা, জমানো নয়",
  "about.value2.body": "উপকূলে দিনের ধরা মাছ থেকে বেছে নেওয়া।",
  "about.value3.title": "জানালায় সমুদ্র",
  "about.value3.body": "বিশ্বের দীর্ঘতম প্রাকৃতিক সৈকতের পাশে খাওয়া।",
  "about.readMore": "আমাদের পুরো গল্প পড়ুন",

  "aboutPage.eyebrow": "আমাদের কথা",
  "aboutPage.title": "সমুদ্রের পাশে এক টেবিল, কক্সবাজারের ঢঙে",
  "aboutPage.intro":
    "পউষী কলাতলীর ডলফিন মোড়ে একটি হোটেল ও রেস্টুরেন্ট — ঢেউ থেকে কয়েক কদম দূরে, ওয়ার্ল্ড বিচ রিসোর্টের ভেতরে। জন্ম একটি সরল ভাবনা থেকে: বিশ্বের দীর্ঘতম সৈকতের পাশের খাবারে থাকবে এই উপকূলেরই স্বাদ।",

  "aboutPage.origin.eyebrow": "যেভাবে শুরু",
  "aboutPage.origin.title": "একটি পারিবারিক টেবিল থেকে",
  "aboutPage.origin.p1":
    "পউষীর শুরু ভালো রান্নাঘরের চেনা পথেই — চট্টগ্রামের এক পারিবারিক টেবিলকে ঘিরে, যেখানে মেজবানি গরু আধা দিন ধরে কষানো হতো আর তাড়াহুড়ো করার অনুমতি কারও ছিল না। পরিবার উপকূলে এলে রেসিপিগুলোও সঙ্গে এলো — কোনো খাতায় লেখা নয়, রান্না হতো স্মৃতি থেকে।",
  "aboutPage.origin.p2":
    "কলাতলী সৈকতের পাশে যাত্রা শুরু মানে সেই ঘরোয়া পদগুলো অবশেষে বসতে পারল সেই সমুদ্রের পাশে, যার জন্যই সেগুলো তৈরি। নামটি একটি নিবন্ধিত ট্রেডমার্ক, লেখা হয় Poushee® — কিন্তু এর পেছনের প্রতিশ্রুতি সাইনবোর্ডের চেয়েও পুরনো: আপনাদের আস্থা, আমরা করব জয়।",
  "aboutPage.origin.p3":
    "আজ ডাইনিং রুমে সকালের নাশতা থেকে রাতের খাবার পর্যন্ত অতিথিরা বসেন, আর রান্নাঘর এখনও রাঁধে সেই পুরনো ঢঙেই — ধীরে, হাতে, আর মৌসুম বুঝে।",

  "aboutPage.kitchen.eyebrow": "রান্নাঘর",
  "aboutPage.kitchen.title": "ধীর আঁচ, বাটা মসলা, আর সময়",
  "aboutPage.kitchen.p1":
    "আমাদের মেজবানি গরু ঘণ্টার পর ঘণ্টা সরিষার তেল আর ঘিয়ে কষানো হয় — ভাজা বুট, নারকেল আর চিনাবাদাম বাটা দিয়ে, যেভাবে প্রজন্মের পর প্রজন্ম চট্টগ্রামের ভোজে পরিবেশিত হয়েছে। কালা ভুনাতেও একই ধৈর্য, যতক্ষণ না মসলা প্রায় কালো হয়ে মাংসে জড়িয়ে যায়।",
  "aboutPage.kitchen.p2":
    "মসলা ঘরেই ভেজে বাটা হয়, প্যাকেট থেকে নয়। ভর্তা বানানো হয় অর্ডার পেয়ে। বিরিয়ানির ভাত স্তরে সাজিয়ে দমে বসানো হয়, পাতে মেখে নয়। এখানে কিছুই দ্রুত করার জন্য নয় — সবকিছু ঘরের স্বাদ পাওয়ার জন্য।",

  "aboutPage.sea.eyebrow": "পরিবেশ",
  "aboutPage.sea.title": "ঢেউ থেকে কয়েক কদম",
  "aboutPage.sea.p1":
    "রেস্টুরেন্টটি ডলফিন মোড়ে ওয়ার্ল্ড বিচ রিসোর্টের ভেতরে, কলাতলী সৈকতের এত কাছে যে খাওয়ার সময় ঢেউয়ের শব্দ শোনা যায়। বড় জানালা, সমুদ্রের হাওয়া, আর বাইরে শহর ব্যস্ত থাকলেও ভেতরে শান্ত একটি ঘর।",
  "aboutPage.sea.p2":
    "সামুদ্রিক খাবার বেছে নেওয়া হয় উপকূলে দিনের ধরা থেকে — সেই সকালে জলে থাকা মাছ, চিংড়ি আর কাঁকড়া, কয়লায় ঝলসানো বা হালকা ঝোলে। যেদিন যা তাজা নয়, সেদিন তা টেবিলেই ওঠে না।",

  "aboutPage.values.eyebrow": "যা আমরা ধরে রাখি",
  "aboutPage.values.title": "তিনটি বিষয়ে আমরা আপস করি না",

  "aboutPage.cta.eyebrow": "আমাদের সঙ্গে বসুন",
  "aboutPage.cta.title": "আপনার টেবিল সমুদ্রের পাশে",
  "aboutPage.cta.body":
    "আসার আগে সম্পূর্ণ মেনু দেখে নিন, অথবা কলাতলীতে আমাদের খুঁজে নিয়ে জলের পাশে একটি আসন সংরক্ষণ করুন।",
  "aboutPage.cta.menu": "মেনু দেখুন",
  "aboutPage.cta.contact": "ঠিকানা ও রিজার্ভেশন",

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
  "footer.reach": "যোগাযোগ করুন",
  "footer.rights": "সর্বস্বত্ব সংরক্ষিত।",
  "footer.trademark": "Poushee® একটি নিবন্ধিত ট্রেডমার্ক।",

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
