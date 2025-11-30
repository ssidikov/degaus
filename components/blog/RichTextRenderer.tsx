import { PortableText, PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from 'sanity'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/sanity/imageUrl'
import { SanityImage } from '@/types/sanity'

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImage }) => {
      if (!value?.asset) return null

      const imageUrl = urlForImage(value).width(1920).quality(100).url()

      return (
        <figure className='my-8'>
          <div className='relative aspect-video w-full overflow-hidden rounded-lg'>
            <Image
              src={imageUrl}
              alt={value.alt || 'Blog image'}
              fill
              className='object-cover'
              quality={100}
              sizes='(max-width: 768px) 100vw, 1200px'
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
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className='mt-12 mb-6 text-3xl font-bold font-bricolage text-gray-900'>{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className='mt-10 mb-4 text-2xl font-bold font-bricolage text-gray-900'>{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className='mt-8 mb-3 text-xl font-bold font-bricolage text-gray-900'>{children}</h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className='mb-6 text-xl leading-relaxed text-gray-700 font-semibold'>{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <div className='my-8 border-l-4 border-[#492BDA] bg-purple-50 pl-6 py-5 italic text-xl text-gray-800 font-semibold rounded-r-lg'>
        {children}
      </div>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className='my-6 ml-6 list-disc space-y-3 text-xl text-gray-700 font-semibold'>
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className='my-6 ml-6 list-decimal space-y-3 text-xl text-gray-700 font-semibold'>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => <li className='pl-2'>{children}</li>,
    number: ({ children }: { children?: React.ReactNode }) => <li className='pl-2'>{children}</li>,
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className='font-bold text-gray-900'>{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => <em className='italic'>{children}</em>,
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className='rounded bg-gray-100 px-2 py-1 font-mono text-sm text-[#492BDA]'>
        {children}
      </code>
    ),
    link: ({
      value,
      children,
    }: {
      value?: { href?: string; blank?: boolean }
      children?: React.ReactNode
    }) => {
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
  value: PortableTextBlock[]
}

export default function RichTextRenderer({ value }: RichTextRendererProps) {
  if (!value || !Array.isArray(value)) return null

  return (
    <div className='prose prose-lg max-w-none'>
      <PortableText value={value} components={components} />
    </div>
  )
}
