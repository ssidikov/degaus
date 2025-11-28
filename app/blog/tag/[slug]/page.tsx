import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/client'
import {
  getPostsByTagQuery,
  getTagBySlugQuery,
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

interface TagPageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ page?: string }>
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { slug } = await params
  const tag = await client.fetch(getTagBySlugQuery, { slug }, { next: { revalidate: 3600 } })
  const blogSettings = await client.fetch(getBlogSettingsQuery, {}, { next: { revalidate: 3600 } })

  if (!tag) return { title: 'Tag not found' }

  return generatePageMetadata(
    {
      title: `${tag.name} - ${blogSettings?.blogTitle || 'Blog'}`,
      description: `Articles tagged with ${tag.name}`,
      slug: tag.slug.current,
    },
    'tag'
  )
}

export default async function TagPage({ params, searchParams }: TagPageProps) {
  const { slug } = await params
  const { page: pageParam } = await searchParams
  const page = parseInt(pageParam || '1')

  // Fetch blog settings
  const blogSettings = await client.fetch(getBlogSettingsQuery, {}, { next: { revalidate: 3600 } })
  const postsPerPage = blogSettings?.postsPerPage || 12

  // Calculate pagination
  const start = (page - 1) * postsPerPage
  const end = start + postsPerPage

  // Fetch data
  const [tag, postsResult, categories] = await Promise.all([
    client.fetch(getTagBySlugQuery, { slug }, { next: { revalidate: 3600 } }),
    client.fetch(getPostsByTagQuery, { slug, start, end }, { next: { revalidate: 60 } }),
    client.fetch(getCategoriesQuery, {}, { next: { revalidate: 3600 } }),
  ])

  if (!tag) {
    notFound()
  }

  const { posts, totalCount } = postsResult
  const totalPages = Math.ceil(totalCount / postsPerPage)

  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <div className='container mx-auto px-4 py-12 max-w-7xl'>
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ name: 'Blog', url: '/blog' }, { name: `Tag: ${tag.name}` }]} />

          {/* Page Header */}
          <div className='mb-12 text-center'>
            <span className='mb-4 inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-[#492BDA]'>
              Tag
            </span>
            <h1 className='text-4xl font-bold font-bricolage text-gray-900 mb-4 lg:text-5xl'>
              {tag.name}
            </h1>
          </div>

          {/* Main Content */}
          <div className='grid gap-8 lg:grid-cols-4'>
            {/* Sidebar */}
            <div className='lg:col-span-1'>
              <div className='sticky top-8'>
                <CategoryList categories={categories} />
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
                    basePath={`/blog/tag/${slug}`}
                  />
                </>
              ) : (
                <div className='text-center py-12'>
                  <p className='text-gray-600 text-lg'>No posts found with this tag.</p>
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
