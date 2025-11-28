import Link from 'next/link'

interface Category {
  _id: string
  name: string
  slug: { current: string }
  postCount?: number
}

interface CategoryListProps {
  categories: Category[]
  currentCategorySlug?: string
}

export default function CategoryList({ categories, currentCategorySlug }: CategoryListProps) {
  if (!categories || categories.length === 0) return null

  return (
    <aside className='rounded-xl bg-white p-6 shadow-md'>
      <h3 className='mb-4 text-xl font-bold font-bricolage text-gray-900'>Categories</h3>
      <ul className='space-y-2'>
        <li>
          <Link
            href='/blog'
            className={`flex items-center justify-between rounded-lg px-4 py-2 transition-colors ${
              !currentCategorySlug ? 'bg-[#492BDA] text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}>
            <span className='font-medium'>All categories</span>
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category._id}>
            <Link
              href={`/blog/category/${category.slug.current}`}
              className={`flex items-center justify-between rounded-lg px-4 py-2 transition-colors ${
                currentCategorySlug === category.slug.current
                  ? 'bg-[#492BDA] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}>
              <span className='font-medium'>{category.name}</span>
              {category.postCount !== undefined && (
                <span
                  className={`rounded-full px-2 py-1 text-xs ${
                    currentCategorySlug === category.slug.current ? 'bg-white/20' : 'bg-gray-200'
                  }`}>
                  {category.postCount}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
