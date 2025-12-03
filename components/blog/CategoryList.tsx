"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

interface Category {
  _id: string;
  name: string;
  slug: { current: string };
  postCount?: number;
}

interface CategoryListProps {
  categories: Category[];
  currentCategorySlug?: string;
  layout?: "vertical" | "horizontal";
  useQueryParam?: boolean;
}

function CategoryListClient({
  categories,
  currentCategorySlug,
  handleCategoryClick,
}: {
  categories: Category[];
  currentCategorySlug?: string;
  handleCategoryClick: (slug: string | null) => void;
}) {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-2 overflow-x-auto scrollbar-none">
        <button
          onClick={() => handleCategoryClick(null)}
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            !currentCategorySlug
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
          }`}
        >
          Featured
        </button>
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => handleCategoryClick(category.slug.current)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              currentCategorySlug === category.slug.current
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function CategoryListWithQuery({
  categories,
  currentCategorySlug,
}: {
  categories: Category[];
  currentCategorySlug?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryClick = (categorySlug: string | null) => {
    const params = new URLSearchParams(searchParams?.toString() || "");

    if (categorySlug) {
      params.set("category", categorySlug);
    } else {
      params.delete("category");
    }

    params.delete("page");
    const queryString = params.toString();
    router.push(`/blog${queryString ? `?${queryString}` : ""}`);
  };

  return (
    <CategoryListClient
      categories={categories}
      currentCategorySlug={currentCategorySlug}
      handleCategoryClick={handleCategoryClick}
    />
  );
}

export default function CategoryList({
  categories,
  currentCategorySlug,
  layout = "vertical",
  useQueryParam = false,
}: CategoryListProps) {
  if (!categories || categories.length === 0) return null;

  // Horizontal layout for blog page
  if (layout === "horizontal") {
    if (useQueryParam) {
      return (
        <CategoryListWithQuery
          categories={categories}
          currentCategorySlug={currentCategorySlug}
        />
      );
    }

    return (
      <div className="mb-12">
        <div className="flex flex-wrap gap-2 overflow-x-auto scrollbar-none">
          <Link
            href="/blog"
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              !currentCategorySlug
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            Featured
          </Link>
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/blog/category/${category.slug.current}`}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                currentCategorySlug === category.slug.current
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Vertical layout for sidebar
  return (
    <aside className="rounded-xl liquid-glass p-6">
      <h3 className="mb-4 text-xl font-bold font-bricolage text-gray-900">
        Categories
      </h3>
      <ul className="space-y-2">
        <li>
          <Link
            href="/blog"
            className={`flex items-center justify-between rounded-lg px-4 py-2 transition-colors ${
              !currentCategorySlug
                ? "bg-[#492BDA] text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span className="font-medium">All categories</span>
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category._id}>
            <Link
              href={`/blog/category/${category.slug.current}`}
              className={`flex items-center justify-between rounded-lg px-4 py-2 transition-colors ${
                currentCategorySlug === category.slug.current
                  ? "bg-[#492BDA] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="font-medium">{category.name}</span>
              {category.postCount !== undefined && (
                <span
                  className={`rounded-full px-2 py-1 text-xs ${
                    currentCategorySlug === category.slug.current
                      ? "bg-white/20"
                      : "bg-gray-200"
                  }`}
                >
                  {category.postCount}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
