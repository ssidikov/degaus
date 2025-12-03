import Link from "next/link";

interface Tag {
  _id: string;
  name: string;
  slug: { current: string };
  postCount?: number;
}

interface TagListProps {
  tags: Tag[];
  currentTagSlug?: string;
}

export default function TagList({ tags, currentTagSlug }: TagListProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-2 overflow-x-auto scrollbar-none">
        <Link
          href="/blog"
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            !currentTagSlug
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
          }`}
        >
          All Posts
        </Link>
        {tags.map((tag) => (
          <Link
            key={tag._id}
            href={`/blog/tag/${tag.slug.current}`}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              currentTagSlug === tag.slug.current
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {tag.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
