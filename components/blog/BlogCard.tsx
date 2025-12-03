import Link from "next/link";
import Image from "next/image";
import { urlForImageWithDimensions } from "@/sanity/imageUrl";
import { calculateReadingTime } from "@/lib/seo";
import { Post } from "@/types/sanity";
import { PortableTextBlock } from "sanity";

interface BlogCardProps {
  post: Post;
  featured?: boolean;
  className?: string;
}

// Helper to extract text from Portable Text (up to first H2)
function extractTextFromBody(body: PortableTextBlock[] | undefined): string {
  if (!body || !Array.isArray(body)) return "";

  let text = "";
  for (const block of body) {
    // Stop at first H2
    if (block._type === "block" && block.style === "h2") {
      break;
    }
    // Extract text from paragraphs
    if (block._type === "block" && block.children) {
      const children = block.children as unknown as {
        _type: string;
        text?: string;
      }[];
      children.forEach((child) => {
        if (child.text) {
          text += child.text + " ";
        }
      });
    }
  }
  return text.trim();
}

export default function BlogCard({
  post,
  featured = false,
  className = "",
}: BlogCardProps) {
  const imageUrl = post.mainImage
    ? urlForImageWithDimensions(post.mainImage, 800, 533).quality(100).url()
    : "/placeholder-blog.jpg";

  const readingTime = post.body ? calculateReadingTime(post.body) : 0;

  // Generate excerpt with fallback to body content
  const displayExcerpt =
    post.excerpt ||
    (post.body ? extractTextFromBody(post.body).substring(0, 200) : "");

  const cardClasses = featured
    ? `group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${className}`
    : `group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01] ${className}`;

  return (
    <article className={cardClasses}>
      <Link href={`/blog/${post.slug.current}`} className="block">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={post.mainImage?.alt || post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {post.category && (
            <div className="absolute left-4 top-4">
              <span className="liquid-glass rounded-full px-3 py-1 pb-1.5 text-xs font-semibold text-gray-900">
                {post.category.name}
              </span>
            </div>
          )}
        </div>

        <div className={`flex flex-col gap-3 p-6 ${featured ? "p-8" : ""}`}>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            {readingTime > 0 && (
              <>
                <span>•</span>
                <span>{readingTime} min read</span>
              </>
            )}
          </div>

          <h3
            className={`font-bricolage font-bold leading-tight text-gray-900 transition-colors group-hover:text-gray-700 ${
              featured ? "text-2xl lg:text-3xl" : "text-xl"
            }`}
          >
            {post.title}
          </h3>

          {displayExcerpt && (
            <p className="line-clamp-2 text-gray-600 font-semibold">
              {displayExcerpt}
            </p>
          )}

          {post.author && (
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <span>By {post.author.name}</span>
            </div>
          )}

          <div className="mt-2 flex items-center gap-2 text-gray-700 font-semibold transition-colors group-hover:text-gray-900">
            <span>Read Article</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}
