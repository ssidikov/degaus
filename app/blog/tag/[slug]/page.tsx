import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/client'
import {
  getTagBySlugQuery,
  getPostsByTagQuery,
  getPostCountByTagQuery,
  getCategoriesQuery,
} from '@/sanity/queries'
import BlogCard from '@/components/blog/BlogCard'
import Pagination from '@/components/blog/Pagination'
import CategoryList from '@/components/blog/CategoryList'
import Breadcrumbs from '@/components/blog/Breadcrumbs'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { generatePageMetadata } from '@/lib/seo'

interface TagPageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ page?: string }>
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { slug } = await params
  const tag = await client.fetch(getTagBySlugQuery, { slug }, { next: { revalidate: 3600 } })

  if (!tag) return { title: 'Tag non trouvé' }

  return generatePageMetadata(
    {
      title: `#${tag.name} - Blog degaus`,
      description: tag.description || `Tous les articles avec le tag #${tag.name}`,
      slug: tag.slug.current,
    },
    'tag'
  )
}

export default async function TagPage({ params, searchParams }: TagPageProps) {
  const { slug } = await params
  const search = await searchParams
  const page = parseInt(search.page || '1')

  const tag = await client.fetch(getTagBySlugQuery, { slug }, { next: { revalidate: 3600 } })

  if (!tag) {
    notFound()
  }

  const postsPerPage = 12
  const start = (page - 1) * postsPerPage
  const end = start + postsPerPage

  const [posts, categories, totalCount] = await Promise.all([
    client.fetch(getPostsByTagQuery, { tagId: tag._id, start, end }, { next: { revalidate: 60 } }),
    client.fetch(getCategoriesQuery, {}, { next: { revalidate: 3600 } }),
    client.fetch(getPostCountByTagQuery, { tagId: tag._id }, { next: { revalidate: 60 } }),
  ])

  const totalPages = Math.ceil(totalCount / postsPerPage)

  return (
    <>
      <Header />
      <main className='min-h-screen bg-gradient-to-b from-purple-50 to-white'>
        <div className='container mx-auto px-4 py-12 max-w-7xl'>
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ name: 'Blog', url: '/blog' }, { name: `#${tag.name}` }]} />

          {/* Page Header */}
          <div className='mb-12'>
            <h1 className='text-4xl font-bold font-bricolage text-gray-900 mb-4 lg:text-5xl'>
              #{tag.name}
            </h1>
            {tag.description && (
              <p className='text-lg text-gray-600 max-w-2xl'>{tag.description}</p>
            )}
            <p className='mt-2 text-sm text-gray-500'>
              {totalCount} {totalCount > 1 ? 'articles' : 'article'}
            </p>
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
                    {posts.map((post: any) => (
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
                  <p className='text-gray-600 text-lg'>Aucun article avec ce tag pour le moment.</p>
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
