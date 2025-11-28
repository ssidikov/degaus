import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/sanity/imageUrl'

const components: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null

      const imageUrl = urlForImage(value).width(1200).url()

      return (
        <figure className='my-8'>
          <div className='relative aspect-video w-full overflow-hidden rounded-lg'>
            <Image
              src={imageUrl}
              alt={value.alt || 'Blog image'}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 800px'
            />
          </div>
          {value.caption && (
            <figcaption className='mt-2 text-center text-sm text-gray-600 italic'>
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className='mt-12 mb-4 text-3xl font-bold font-bricolage text-gray-900'>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className='mt-8 mb-3 text-2xl font-bold font-bricolage text-gray-900'>{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className='mt-6 mb-2 text-xl font-bold font-bricolage text-gray-900'>{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className='mb-4 text-lg leading-relaxed text-gray-700'>{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className='my-6 border-l-4 border-[#492BDA] bg-purple-50 pl-6 py-4 italic text-gray-800'>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className='my-6 ml-6 list-disc space-y-2 text-lg text-gray-700'>{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className='my-6 ml-6 list-decimal space-y-2 text-lg text-gray-700'>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className='pl-2'>{children}</li>,
    number: ({ children }: any) => <li className='pl-2'>{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className='font-bold text-gray-900'>{children}</strong>,
    em: ({ children }: any) => <em className='italic'>{children}</em>,
    code: ({ children }: any) => (
      <code className='rounded bg-gray-100 px-2 py-1 font-mono text-sm text-[#492BDA]'>
        {children}
      </code>
    ),
    link: ({ value, children }: any) => {
      const target = value?.blank ? '_blank' : undefined
      const rel = value?.blank ? 'noopener noreferrer' : undefined

      return (
        <Link
          href={value?.href || '#'}
          target={target}
          rel={rel}
          className='font-medium text-[#492BDA] underline decoration-2 underline-offset-2 transition-colors hover:text-[#3620B0]'>
          {children}
        </Link>
      )
    },
  },
}

interface RichTextRendererProps {
  value: any[]
}

export default function RichTextRenderer({ value }: RichTextRendererProps) {
  if (!value || !Array.isArray(value)) return null

  return (
    <div className='prose prose-lg max-w-none'>
      <PortableText value={value} components={components} />
    </div>
  )
}
