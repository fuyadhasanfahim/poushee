import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MENU, getCategory } from "@/content/menu";
import { CategoryView } from "@/components/views/category-view";

export function generateStaticParams() {
  return MENU.map((c) => ({ category: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.name.en,
    description: category.blurb.en,
    alternates: { canonical: `/menu/${category.slug}` },
    openGraph: {
      title: `${category.name.en} · Poushee`,
      description: category.blurb.en,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  return <CategoryView category={category} />;
}
