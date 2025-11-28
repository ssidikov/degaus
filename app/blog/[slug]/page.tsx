import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/client'
import {
  getPostBySlugQuery,
  getPostSlugsQuery,
  getAdjacentPostsQuery,
  getCategoriesQuery,
} from '@/sanity/queries'
import { urlForImageWithDimensions } from '@/sanity/imageUrl'
import {
  generatePostMetadata,
  generateBlogPostSchema,
  generateBreadcrumbSchema,
  calculateReadingTime,
} from '@/lib/seo'
import RichTextRenderer from '@/components/blog/RichTextRenderer'
import TagBadge from '@/components/blog/TagBadge'
import CategoryList from '@/components/blog/CategoryList'
import Breadcrumbs from '@/components/blog/Breadcrumbs'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Tag } from '@/types/sanity'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await client.fetch(getPostSlugsQuery)
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(getPostBySlugQuery, { slug }, { next: { revalidate: 3600 } })

  if (!post) return { title: 'Article not found' }

  return generatePostMetadata(post)
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await client.fetch(getPostBySlugQuery, { slug }, { next: { revalidate: 60 } })

  if (!post) {
    notFound()
  }

  // Fetch additional data
  const [adjacentPosts, categories] = await Promise.all([
    client.fetch(
      getAdjacentPostsQuery,
      { currentDate: post.publishedAt },
      { next: { revalidate: 3600 } }
    ),
    client.fetch(getCategoriesQuery, {}, { next: { revalidate: 3600 } }),
  ])

  const readingTime = calculateReadingTime(post.body || [])
  const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://degaus.com'}/blog/${slug}`

  // Schema markup
  const blogPostSchema = generateBlogPostSchema(post, postUrl)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: process.env.NEXT_PUBLIC_SITE_URL || 'https://degaus.com' },
    { name: 'Blog', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://degaus.com'}/blog` },
    { name: post.title, url: postUrl },
  ])

  return (
    <>
      {/* Schema Markup */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main className='min-h-screen'>
        <article className='container mx-auto px-4 py-12 max-w-7xl'>
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ name: 'Blog', url: '/blog' }, { name: post.title }]} />

          {/* Post Header */}
          <div className='mx-auto max-w-4xl'>
            {/* Category Badge */}
            {post.category && (
              <Link
                href={`/blog/category/${post.category.slug.current}`}
                className='inline-block mb-4'>
                <span className='rounded-full bg-[#492BDA] px-4 py-2 text-sm font-semibold text-white hover:bg-[#3620B0] transition-colors'>
                  {post.category.name}
                </span>
              </Link>
            )}

            {/* Title */}
            <h1 className='text-4xl font-bold font-bricolage text-gray-900 mb-6 lg:text-5xl'>
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className='flex flex-wrap items-center gap-4 text-gray-600 mb-8'>
              {post.author && (
                <div className='flex items-center gap-2'>
                  {post.author.image?.asset?.url && (
                    <div className='relative h-10 w-10 overflow-hidden rounded-full'>
                      <Image
                        src={post.author.image.asset.url}
                        alt={post.author.name}
                        fill
                        className='object-cover'
                      />
                    </div>
                  )}
                  <span className='font-medium'>By {post.author.name}</span>
                </div>
              )}

              <span>•</span>

              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>

              {readingTime > 0 && (
                <>
                  <span>•</span>
                  <span>{readingTime} min read</span>
                </>
              )}
            </div>

            {/* Featured Image */}
            {post.mainImage && (
              <div className='relative aspect-video w-full overflow-hidden rounded-2xl mb-12'>
                <Image
                  src={urlForImageWithDimensions(post.mainImage, 1920, 1080).quality(100).url()}
                  alt={post.mainImage.alt || post.title}
                  fill
                  className='object-cover'
                  priority
                  quality={100}
                  sizes='(max-width: 1200px) 100vw, 1200px'
                />
              </div>
            )}

            {/* Excerpt */}
            {post.excerpt && (
              <div className='text-xl text-gray-700 leading-relaxed mb-8 p-6 bg-purple-50 rounded-xl border-l-4 border-[#492BDA]'>
                {post.excerpt}
              </div>
            )}
          </div>

          {/* Main Content + Sidebar */}
          <div className='grid gap-12 lg:grid-cols-4'>
            {/* Article Content */}
            <div className='lg:col-span-3'>
              <div className='prose prose-lg max-w-none'>
                {post.body && <RichTextRenderer value={post.body} />}
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className='mt-12 pt-8 border-t border-gray-200'>
                  <h3 className='text-lg font-bold font-bricolage mb-4'>Tags</h3>
                  <div className='flex flex-wrap gap-2'>
                    {post.tags.map((tag: Tag) => (
                      <TagBadge key={tag._id} tag={tag} size='md' />
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation (Previous/Next) */}
              {(adjacentPosts.previous || adjacentPosts.next) && (
                <nav className='mt-12 pt-8 border-t border-gray-200'>
                  <div className='grid gap-4 sm:grid-cols-2'>
                    {adjacentPosts.previous && (
                      <Link
                        href={`/blog/${adjacentPosts.previous.slug.current}`}
                        className='group flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-[#492BDA] hover:shadow-lg'>
                        <span className='text-sm text-gray-600'>← Previous Article</span>
                        <span className='font-semibold text-gray-900 group-hover:text-[#492BDA]'>
                          {adjacentPosts.previous.title}
                        </span>
                      </Link>
                    )}

                    {adjacentPosts.next && (
                      <Link
                        href={`/blog/${adjacentPosts.next.slug.current}`}
                        className='group flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-6 text-right transition-all hover:border-[#492BDA] hover:shadow-lg sm:col-start-2'>
                        <span className='text-sm text-gray-600'>Next Article →</span>
                        <span className='font-semibold text-gray-900 group-hover:text-[#492BDA]'>
                          {adjacentPosts.next.title}
                        </span>
                      </Link>
                    )}
                  </div>
                </nav>
              )}
            </div>

            {/* Sidebar */}
            <aside className='lg:col-span-1'>
              <div className='sticky top-8 space-y-6'>
                <CategoryList categories={categories} />

                {/* Author Bio */}
                {post.author?.bio && (
                  <div className='rounded-xl bg-white p-6 shadow-md'>
                    <h3 className='text-lg font-bold font-bricolage mb-4'>About the Author</h3>
                    {post.author.image?.asset?.url && (
                      <div className='relative h-20 w-20 overflow-hidden rounded-full mb-4 mx-auto'>
                        <Image
                          src={post.author.image.asset.url}
                          alt={post.author.name}
                          fill
                          className='object-cover'
                        />
                      </div>
                    )}
                    <p className='font-medium text-center mb-3'>{post.author.name}</p>
                    <div className='text-sm text-gray-600'>
                      <RichTextRenderer value={post.author.bio} />
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
