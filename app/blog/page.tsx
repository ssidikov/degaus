import { Metadata } from 'next'
import { client } from '@/sanity/client'
import {
  getAllPostsQuery,
  getFeaturedPostsQuery,
  getCategoriesQuery,
  getBlogSettingsQuery,
  getTotalPostCountQuery,
} from '@/sanity/queries'
import BlogCard from '@/components/blog/BlogCard'
import FeaturedPosts from '@/components/blog/FeaturedPosts'
import Pagination from '@/components/blog/Pagination'
import CategoryList from '@/components/blog/CategoryList'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { generatePageMetadata } from '@/lib/seo'

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>
}

export async function generateMetadata(): Promise<Metadata> {
  const blogSettings = await client.fetch(getBlogSettingsQuery, {}, { next: { revalidate: 3600 } })

  return generatePageMetadata(
    {
      title: blogSettings?.blogTitle || 'Blog - degaus',
      description:
        blogSettings?.defaultSeoDescription ||
        'Discover our articles on AI, automated content, and marketing strategies',
      ogImage: blogSettings?.defaultOgImage,
      slug: '',
    },
    'blog'
  )
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const page = parseInt(params.page || '1')

  // Fetch blog settings
  const blogSettings = await client.fetch(getBlogSettingsQuery, {}, { next: { revalidate: 3600 } })
  const postsPerPage = blogSettings?.postsPerPage || 12

  // Calculate pagination
  const start = (page - 1) * postsPerPage
  const end = start + postsPerPage

  // Fetch data
  const [posts, featuredPosts, categories, totalCount] = await Promise.all([
    client.fetch(getAllPostsQuery, { start, end }, { next: { revalidate: 60 } }),
    page === 1
      ? client.fetch(getFeaturedPostsQuery, {}, { next: { revalidate: 60 } })
      : Promise.resolve([]),
    client.fetch(getCategoriesQuery, {}, { next: { revalidate: 3600 } }),
    client.fetch(getTotalPostCountQuery, {}, { next: { revalidate: 60 } }),
  ])

  const totalPages = Math.ceil(totalCount / postsPerPage)

  return (
    <>
      <Header />
      <main className='min-h-screen bg-gradient-to-b from-purple-50 to-white'>
        <div className='container mx-auto px-4 py-12 max-w-7xl'>
          {/* Page Header */}
          <div className='mb-12 text-center'>
            <h1 className='text-4xl font-bold font-bricolage text-gray-900 mb-4 lg:text-5xl'>
              {blogSettings?.blogTitle || 'Blog'}
            </h1>
            {blogSettings?.blogSubtitle && (
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>{blogSettings.blogSubtitle}</p>
            )}
          </div>

          {/* Featured Posts (only on page 1) */}
          {page === 1 && featuredPosts.length > 0 && <FeaturedPosts posts={featuredPosts} />}

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
                  <Pagination currentPage={page} totalPages={totalPages} basePath='/blog' />
                </>
              ) : (
                <div className='text-center py-12'>
                  <p className='text-gray-600 text-lg'>No posts published yet.</p>
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
