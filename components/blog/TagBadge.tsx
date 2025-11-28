import Link from 'next/link'

interface TagBadgeProps {
  tag: {
    name: string
    slug: { current: string }
  }
  size?: 'sm' | 'md'
}

export default function TagBadge({ tag, size = 'sm' }: TagBadgeProps) {
  const sizeClasses = size === 'sm' ? 'text-xs px-3 py-1' : 'text-sm px-4 py-2'

  return (
    <Link
      href={`/blog/tag/${tag.slug.current}`}
      className={`inline-block rounded-full border border-gray-300 bg-white ${sizeClasses} font-medium text-gray-700 transition-all hover:border-[#492BDA] hover:bg-[#492BDA] hover:text-white`}>
      #{tag.name}
    </Link>
  )
}
