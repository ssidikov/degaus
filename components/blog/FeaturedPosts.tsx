import BlogCard from './BlogCard'

interface FeaturedPostsProps {
  posts: any[]
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  if (!posts || posts.length === 0) return null

  return (
    <section className='mb-16'>
      <div className='mb-8'>
        <h2 className='text-3xl font-bold font-bricolage text-gray-900 mb-2'>À la une</h2>
        <div className='h-1 w-20 bg-[#492BDA] rounded-full'></div>
      </div>

      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} featured />
        ))}
      </div>
    </section>
  )
}
