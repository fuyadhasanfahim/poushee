import type { Localized } from "@/lib/i18n/dictionary";

export type Ingredients = { en: string[]; bn: string[] };

export type Dish = {
  slug: string;
  name: Localized;
  tagline: Localized;
  price: Localized;
  image: string;
  section?: string;
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
  order: number;
  name: Localized;
  blurb: Localized;
  cover: string;
  sections?: MenuSection[];
  real?: boolean;
  dishes: Dish[];
};
