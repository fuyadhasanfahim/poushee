import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allDishPaths, getDish } from "@/content/menu";
import { DishView } from "@/components/views/dish-view";

export function generateStaticParams() {
  return allDishPaths();
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; item: string }>;
}): Promise<Metadata> {
  const { category, item } = await params;
  const found = getDish(category, item);
  if (!found) return {};
  const { dish, category: cat } = found;
  const desc = dish.story.en.slice(0, 155);
  return {
    title: `${dish.name.en} — ${cat.name.en}`,
    description: desc,
    alternates: { canonical: `/menu/${cat.slug}/${dish.slug}` },
    openGraph: {
      title: `${dish.name.en} · Poushee`,
      description: desc,
      type: "article",
    },
  };
}

export default async function DishPage({
  params,
}: {
  params: Promise<{ category: string; item: string }>;
}) {
  const { category, item } = await params;
  const found = getDish(category, item);
  if (!found) notFound();
  return <DishView category={found.category} dish={found.dish} />;
}
