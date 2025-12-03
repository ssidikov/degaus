import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/sanity/client";
import {
  getPostsByTagQuery,
  getTagBySlugQuery,
  getBlogSettingsQuery,
  getAllTagsQuery,
} from "@/sanity/queries";
import BlogCard from "@/components/blog/BlogCard";
import Pagination from "@/components/blog/Pagination";
import TagList from "@/components/blog/TagList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generatePageMetadata } from "@/lib/seo";
import { Post } from "@/types/sanity";

interface TagPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = await client.fetch(
    getTagBySlugQuery,
    { slug },
    { next: { revalidate: 3600 } },
  );
  const blogSettings = await client.fetch(
    getBlogSettingsQuery,
    {},
    { next: { revalidate: 3600 } },
  );

  if (!tag) return { title: "Tag not found" };

  return generatePageMetadata(
    {
      title: `${tag.name} - ${blogSettings?.blogTitle || "Blog"}`,
      description: `Articles tagged with ${tag.name}`,
      slug: tag.slug.current,
    },
    "tag",
  );
}

export default async function TagPage({ params, searchParams }: TagPageProps) {
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

  // Fetch tag first to get its ID
  const tag = await client.fetch(
    getTagBySlugQuery,
    { slug },
    { next: { revalidate: 3600 } },
  );

  if (!tag) {
    notFound();
  }

  // Fetch data
  const [postsResult, tags] = await Promise.all([
    client.fetch(
      getPostsByTagQuery,
      { tagId: tag._id, start, end },
      { next: { revalidate: 60 } },
    ),
    client.fetch(getAllTagsQuery, {}, { next: { revalidate: 3600 } }),
  ]);

  const { posts, totalCount } = postsResult;
  const totalPages = Math.ceil(totalCount / postsPerPage);

  return (
    <div className="min-h-screen" style={{ background: "#F3F3F9" }}>
      <Header />
      <main>
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
              {tag.name}
            </h1>
            <p className="text-lg text-gray-600">
              Articles tagged with "{tag.name}"
            </p>
          </div>

          {/* Horizontal Tag Navigation */}
          <TagList tags={tags} currentTagSlug={slug} />

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
                basePath={`/blog/tag/${slug}`}
              />
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No posts found with this tag.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
