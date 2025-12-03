import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/client";
import {
  getPostBySlugQuery,
  getPostSlugsQuery,
  getAdjacentPostsQuery,
  getCategoriesQuery,
} from "@/sanity/queries";
import { urlForImageWithDimensions } from "@/sanity/imageUrl";
import {
  generatePostMetadata,
  generateBlogPostSchema,
  generateBreadcrumbSchema,
  calculateReadingTime,
} from "@/lib/seo";
import RichTextRenderer from "@/components/blog/RichTextRenderer";
import TagBadge from "@/components/blog/TagBadge";
import CategoryList from "@/components/blog/CategoryList";
import TableOfContents from "@/components/blog/TableOfContents";
import ShareButtons from "@/components/blog/ShareButtons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tag } from "@/types/sanity";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await client.fetch(getPostSlugsQuery);
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(
    getPostBySlugQuery,
    { slug },
    { next: { revalidate: 3600 } },
  );

  if (!post) return { title: "Article not found" };

  return generatePostMetadata(post);
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await client.fetch(
    getPostBySlugQuery,
    { slug },
    { next: { revalidate: 60 } },
  );

  if (!post) {
    notFound();
  }

  // Fetch additional data
  const [adjacentPosts, categories] = await Promise.all([
    client.fetch(
      getAdjacentPostsQuery,
      { currentDate: post.publishedAt },
      { next: { revalidate: 3600 } },
    ),
    client.fetch(getCategoriesQuery, {}, { next: { revalidate: 3600 } }),
  ]);

  const readingTime = calculateReadingTime(post.body || []);
  const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://degaus.com"}/blog/${slug}`;

  // Schema markup
  const blogPostSchema = generateBlogPostSchema(post, postUrl);
  const breadcrumbSchema = generateBreadcrumbSchema([
    {
      name: "Home",
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://degaus.com",
    },
    {
      name: "Blog",
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://degaus.com"}/blog`,
    },
    { name: post.title, url: postUrl },
  ]);

  return (
    <div className="min-h-screen" style={{ background: "#F3F3F9" }}>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main className="min-h-screen">
        <article className="container mx-auto px-4 py-12 max-w-8xl">
          {/* Three-column layout: Sidebar | Content | Empty */}
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left Sidebar - Table of Contents */}
            <aside className="hidden lg:block lg:col-span-3">
              {post.body && <TableOfContents body={post.body} />}
            </aside>

            {/* Main Content - Increased width from col-span-6 to col-span-7 */}
            <div className="lg:col-span-7">
              {/* Post Header */}
              <div>
                {/* Navigation and Share Buttons */}
                <div className="flex items-center justify-between mb-8">
                  {/* Left: Navigation */}
                  <div className="flex items-center gap-4">
                    <Link
                      href="/blog"
                      className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
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
                      <span className="font-semibold uppercase text-sm">
                        BLOG
                      </span>
                    </Link>
                    {post.category && (
                      <>
                        <span className="text-gray-400">/</span>
                        <Link
                          href={`/blog/category/${post.category.slug.current}`}
                          className="font-semibold uppercase text-sm text-gray-900 hover:text-gray-600 transition-colors"
                        >
                          {post.category.name}
                        </Link>
                      </>
                    )}
                  </div>

                  {/* Right: Share Buttons */}
                  <ShareButtons postUrl={postUrl} postTitle={post.title} />
                </div>

                {/* Title */}
                <h1 className="text-4xl font-bold font-bricolage text-gray-900 mb-6 lg:text-5xl">
                  {post.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-gray-500 font-semibold mb-8">
                  {post.author && (
                    <div className="flex items-center gap-2">
                      {post.author.image?.asset?.url && (
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={post.author.image.asset.url}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <span className="font-semibold">
                        By {post.author.name}
                      </span>
                    </div>
                  )}

                  <span>•</span>
                  <time dateTime={post.publishedAt}>
                    <span>Last updated </span>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>

                  {readingTime > 0 && (
                    <>
                      <span>•</span>
                      <span>{readingTime} minutes reading time</span>
                    </>
                  )}
                </div>

                {/* Featured Image */}
                {post.mainImage && (
                  <div className="relative aspect-video blog-image-breakout overflow-hidden rounded-2xl mb-12">
                    <Image
                      src={urlForImageWithDimensions(post.mainImage, 1920, 1080)
                        .quality(100)
                        .url()}
                      alt={post.mainImage.alt || post.title}
                      fill
                      className="object-cover"
                      priority
                      quality={100}
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                  </div>
                )}

                {/* Excerpt */}
                {post.excerpt && (
                  <div className="text-xl text-gray-700 leading-relaxed mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                    {post.excerpt}
                  </div>
                )}
              </div>

              {/* Article Content - Text narrower than images */}
              <div className="prose prose-lg max-w-4xl">
                {post.body && <RichTextRenderer value={post.body} />}
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-bold font-bricolage mb-4">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: Tag) => (
                      <TagBadge key={tag._id} tag={tag} size="md" />
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              <div className="mt-8 pt-8 border-t border-gray-200 bg-gray-50 rounded-xl p-6">
                <CategoryList categories={categories} />
              </div>

              {/* Author Bio */}
              {post.author?.bio && (
                <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
                  <h3 className="text-lg font-bold font-bricolage mb-4">
                    About the Author
                  </h3>
                  {post.author.image?.asset?.url && (
                    <div className="relative h-20 w-20 overflow-hidden rounded-full mb-4 mx-auto">
                      <Image
                        src={post.author.image.asset.url}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <p className="font-medium text-center mb-3">
                    {post.author.name}
                  </p>
                  <div className="text-sm text-gray-600">
                    <RichTextRenderer value={post.author.bio} />
                  </div>
                </div>
              )}

              {/* Navigation (Previous/Next) */}
              {(adjacentPosts.previous || adjacentPosts.next) && (
                <nav className="mt-12 pt-8 border-t border-gray-200">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {adjacentPosts.previous && (
                      <Link
                        href={`/blog/${adjacentPosts.previous.slug.current}`}
                        className="group flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-400 hover:shadow-lg"
                      >
                        <span className="text-sm text-gray-600">
                          ← Previous Article
                        </span>
                        <span className="font-semibold text-gray-900 group-hover:text-gray-700">
                          {adjacentPosts.previous.title}
                        </span>
                      </Link>
                    )}

                    {adjacentPosts.next && (
                      <Link
                        href={`/blog/${adjacentPosts.next.slug.current}`}
                        className="group flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-6 text-right transition-all hover:border-gray-400 hover:shadow-lg sm:col-start-2"
                      >
                        <span className="text-sm text-gray-600">
                          Next Article →
                        </span>
                        <span className="font-semibold text-gray-900 group-hover:text-gray-700">
                          {adjacentPosts.next.title}
                        </span>
                      </Link>
                    )}
                  </div>
                </nav>
              )}
            </div>

            {/* Right spacing column - Reduced from col-span-3 to col-span-2 */}
            <div className="hidden lg:block lg:col-span-2"></div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
