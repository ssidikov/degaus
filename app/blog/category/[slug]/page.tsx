import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/sanity/client";
import {
  getPostsByCategoryQuery,
  getCategoryBySlugQuery,
  getBlogSettingsQuery,
  getCategoriesQuery,
} from "@/sanity/queries";
import BlogCard from "@/components/blog/BlogCard";
import Pagination from "@/components/blog/Pagination";
import CategoryList from "@/components/blog/CategoryList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generatePageMetadata } from "@/lib/seo";
import { Post } from "@/types/sanity";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await client.fetch(
    getCategoryBySlugQuery,
    { slug },
    { next: { revalidate: 3600 } },
  );
  const blogSettings = await client.fetch(
    getBlogSettingsQuery,
    {},
    { next: { revalidate: 3600 } },
  );

  if (!category) return { title: "Category not found" };

  return generatePageMetadata(
    {
      title: `${category.name} - ${blogSettings?.blogTitle || "Blog"}`,
      description:
        category.description || `Articles in category ${category.name}`,
      slug: category.slug.current,
    },
    "category",
  );
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = parseInt(pageParam || "1");

  // Fetch blog settings
  const blogSettings = await client.fetch(
    getBlogSettingsQuery,
    {},
    { next: { revalidate: 3600 } },
  );
  const postsPerPage = blogSettings?.postsPerPage || 12;

  // Calculate pagination
  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;

  // Fetch category first to get its ID
  const category = await client.fetch(
    getCategoryBySlugQuery,
    { slug },
    { next: { revalidate: 3600 } },
  );

  if (!category) {
    notFound();
  }

  // Fetch data
  const [postsResult, categories] = await Promise.all([
    client.fetch(
      getPostsByCategoryQuery,
      { categoryId: category._id, start, end },
      { next: { revalidate: 60 } },
    ),
    client.fetch(getCategoriesQuery, {}, { next: { revalidate: 3600 } }),
  ]);

  const { posts, totalCount } = postsResult;
  const totalPages = Math.ceil(totalCount / postsPerPage);

  return (
    <div className="min-h-screen" style={{ background: "#F3F3F9" }}>
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Navigation */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors w-fit"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="font-semibold uppercase text-sm">BLOG</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold font-bricolage text-gray-900 mb-4 lg:text-5xl">
              {category.name}
            </h1>
            {category.description && (
              <p className="text-lg text-gray-600 max-w-3xl">
                {category.description}
              </p>
            )}
          </div>

          {/* Horizontal Category Navigation */}
          <CategoryList
            categories={categories}
            currentCategorySlug={slug}
            layout="horizontal"
          />

          {/* Posts Grid - 2 columns like main blog page */}
          {posts.length > 0 ? (
            <>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                {posts.map((post: Post) => (
                  <BlogCard key={post._id} post={post} />
                ))}
              </div>

              {/* Pagination */}
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                basePath={`/blog/category/${slug}`}
              />
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No posts found in this category.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
