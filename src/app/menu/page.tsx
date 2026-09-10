import type { Metadata } from "next";
import { MenuIndexView } from "@/components/views/menu-index-view";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Fifteen chapters of Bangladeshi flavour at Poushee, Kolatoli — biryani, Chattogram mezbani, fresh seafood, BBQ, breakfast, juice and dessert.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return <MenuIndexView />;
}
