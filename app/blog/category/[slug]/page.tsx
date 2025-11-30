import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/client'
import {
  getPostsByCategoryQuery,
  getCategoryBySlugQuery,
  getBlogSettingsQuery,
  getCategoriesQuery,
} from '@/sanity/queries'
import BlogCard from '@/components/blog/BlogCard'
import Pagination from '@/components/blog/Pagination'
import CategoryList from '@/components/blog/CategoryList'
import Breadcrumbs from '@/components/blog/Breadcrumbs'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { generatePageMetadata } from '@/lib/seo'
import { Post } from '@/types/sanity'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ page?: string }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = await client.fetch(
    getCategoryBySlugQuery,
    { slug },
    { next: { revalidate: 3600 } }
  )
  const blogSettings = await client.fetch(getBlogSettingsQuery, {}, { next: { revalidate: 3600 } })

  if (!category) return { title: 'Category not found' }

  return generatePageMetadata(
    {
      title: `${category.name} - ${blogSettings?.blogTitle || 'Blog'}`,
      description: category.description || `Articles in category ${category.name}`,
      slug: category.slug.current,
    },
    'category'
  )
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params
  const { page: pageParam } = await searchParams
  const page = parseInt(pageParam || '1')

  // Fetch blog settings
  const blogSettings = await client.fetch(getBlogSettingsQuery, {}, { next: { revalidate: 3600 } })
  const postsPerPage = blogSettings?.postsPerPage || 12

  // Calculate pagination
  const start = (page - 1) * postsPerPage
  const end = start + postsPerPage

  // Fetch category first to get its ID
  const category = await client.fetch(
    getCategoryBySlugQuery,
    { slug },
    { next: { revalidate: 3600 } }
  )

  if (!category) {
    notFound()
  }

  // Fetch data
  const [postsResult, categories] = await Promise.all([
    client.fetch(
      getPostsByCategoryQuery,
      { categoryId: category._id, start, end },
      { next: { revalidate: 60 } }
    ),
    client.fetch(getCategoriesQuery, {}, { next: { revalidate: 3600 } }),
  ])

  const { posts, totalCount } = postsResult
  const totalPages = Math.ceil(totalCount / postsPerPage)

  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <div className='container mx-auto px-4 py-12 max-w-7xl'>
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ name: 'Blog', url: '/blog' }, { name: category.name }]} />

          {/* Page Header */}
          <div className='mb-12 text-center'>
            <span className='mb-4 inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-[#492BDA]'>
              Category
            </span>
            <h1 className='text-4xl font-bold font-bricolage text-gray-900 mb-4 lg:text-5xl'>
              {category.name}
            </h1>
            {category.description && (
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>{category.description}</p>
            )}
          </div>

          {/* Main Content */}
          <div className='grid gap-8 lg:grid-cols-4'>
            {/* Sidebar */}
            <div className='lg:col-span-1'>
              <div className='sticky top-8'>
                <CategoryList categories={categories} currentCategorySlug={slug} />
              </div>
            </div>

            {/* Posts Grid */}
            <div className='lg:col-span-3'>
              {posts.length > 0 ? (
                <>
                  <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
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
                <div className='text-center py-12'>
                  <p className='text-gray-600 text-lg'>No posts found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
