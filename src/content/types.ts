import type { Localized } from "@/lib/i18n/dictionary";

export type Ingredients = { en: string[]; bn: string[] };

export type Dish = {
  slug: string;
  name: Localized;
  /** short evocative one-liner shown on cards */
  tagline: Localized;
  /** printed-menu price, already localised, e.g. "৳ 350" / "৳ ৩৫০", ranges as "৳ 300 / 600" */
  price: Localized;
  /** path under /public, or "" to fall back to a branded placeholder */
  image: string;
  /** section id for combined categories (matches MenuCategory.sections[].id) */
  section?: string;
  /** 2–4 sentence history / background */
  story: Localized;
  ingredients: Ingredients;
  featured?: boolean;
};

export type MenuSection = {
  id: string;
  title: Localized;
};

export type MenuCategory = {
  slug: string;
  /** rough printed-page order, 1..15 */
  order: number;
  name: Localized;
  /** one-line description on the menu index */
  blurb: Localized;
  /** cover image path under /public, or "" for placeholder */
  cover: string;
  /** only set for the pages that combine two printed sections */
  sections?: MenuSection[];
  /** true = client-supplied real photography + verified copy */
  real?: boolean;
  dishes: Dish[];
};
