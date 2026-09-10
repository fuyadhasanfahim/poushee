import type { Metadata } from "next";
import { AboutView } from "@/components/views/about-view";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Poushee — a family kitchen from Chattogram brought to the sea at Kolatoli, Cox's Bazar. Slow-cooked mezbani, the day's catch, and a room beside the tide.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutView />;
}
