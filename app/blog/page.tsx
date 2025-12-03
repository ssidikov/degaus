import { Metadata } from "next";
import { client } from "@/sanity/client";
import {
  getCategoriesQuery,
  getBlogSettingsQuery,
  getPostsByCategoryQuery,
  getFeaturedPostsQuery,
} from "@/sanity/queries";
import BlogCard from "@/components/blog/BlogCard";
import Pagination from "@/components/blog/Pagination";
import CategoryList from "@/components/blog/CategoryList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generatePageMetadata } from "@/lib/seo";
import { Post } from "@/types/sanity";

interface BlogPageProps {
  searchParams: Promise<{ page?: string; category?: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  const blogSettings = await client.fetch(
    getBlogSettingsQuery,
    {},
    { next: { revalidate: 3600 } },
  );

  return generatePageMetadata(
    {
      title: blogSettings?.blogTitle || "Blog - degaus",
      description:
        blogSettings?.defaultSeoDescription ||
        "Discover our articles on AI, automated content, and marketing strategies",
      ogImage: blogSettings?.defaultOgImage,
      slug: "",
    },
    "blog",
  );
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");
  const categorySlug = params.category;

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

  // Fetch categories first
  const categories = await client.fetch(
    getCategoriesQuery,
    {},
    { next: { revalidate: 3600 } },
  );

  // Find category by slug if filtering
  const selectedCategory = categorySlug
    ? categories.find((cat: any) => cat.slug.current === categorySlug)
    : null;

  // Fetch posts based on category filter
  let posts: Post[];
  let totalCount: number;

  if (selectedCategory) {
    // Fetch posts for specific category
    const result = await client.fetch(
      getPostsByCategoryQuery,
      { categoryId: selectedCategory._id, start, end },
      { next: { revalidate: 60 } },
    );
    posts = result.posts;
    totalCount = result.totalCount;
  } else {
    // Default: Show featured posts
    const featuredPosts = await client.fetch(
      getFeaturedPostsQuery,
      {},
      { next: { revalidate: 60 } },
    );
    posts = featuredPosts;
    totalCount = featuredPosts.length;
  }

  const totalPages = Math.ceil(totalCount / postsPerPage);

  return (
    <div className="min-h-screen" style={{ background: "#F3F3F9" }}>
      <Header />
      <main>
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold font-bricolage text-gray-900 mb-4 lg:text-5xl">
              {blogSettings?.blogTitle || "Blog"}
            </h1>
            {blogSettings?.blogSubtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {blogSettings.blogSubtitle}
              </p>
            )}
          </div>

          {/* Categories - Horizontal Layout with filtering */}
          <CategoryList
            categories={categories}
            currentCategorySlug={categorySlug}
            layout="horizontal"
            useQueryParam={true}
          />

          {/* Posts Grid - 2 columns */}
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
                basePath="/blog"
                queryParams={
                  categorySlug ? { category: categorySlug } : undefined
                }
              />
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                {categorySlug
                  ? "No posts found in this category."
                  : "No featured posts yet."}
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
