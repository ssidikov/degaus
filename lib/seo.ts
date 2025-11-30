import { Metadata } from 'next'
import { urlForOgImage } from '@/sanity/imageUrl'
import { Post, SanityImage } from '@/types/sanity'
import { PortableTextBlock } from 'sanity'

interface PageSEOData {
  title: string
  description?: string
  keywords?: string[]
  ogImage?: SanityImage
  slug: string
  noindex?: boolean
  canonicalUrl?: string
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://degaus.com'

// Helper function to extract plain text from Portable Text (up to first H2)
function extractTextFromBody(body: PortableTextBlock[] | undefined): string {
  if (!body || !Array.isArray(body)) return ''

  let text = ''

  // Extract text only from paragraphs before the first H2
  for (const block of body) {
    // Stop when we hit the first H2 heading
    if (block._type === 'block' && block.style === 'h2') {
      break
    }

    // Extract text from normal paragraphs and other text blocks
    if (block._type === 'block' && block.children) {
      const children = block.children as unknown as { _type: string; text?: string }[]
      children.forEach((child) => {
        if (child.text) {
          text += child.text + ' '
        }
      })
    }
  }

  return text.trim()
}

export function generatePostMetadata(post: Post): Metadata {
  const title = post.seoTitle || post.title

  // Generate description with fallback to body content
  let description = post.metaDescription || post.excerpt || ''
  if (!description && post.body) {
    const bodyText = extractTextFromBody(post.body)
    description = bodyText.substring(0, 160)
  }

  const ogTitle = post.ogTitle || title
  const ogDescription = post.ogDescription || description
  const url = `${SITE_URL}/blog/${post.slug.current}`
  const canonicalUrl = post.canonicalUrl || url

  // Use OG image if available, otherwise use main image
  const imageToUse = post.ogImage || post.mainImage
  const ogImageUrl = imageToUse ? urlForOgImage(imageToUse) : `${SITE_URL}/og-default.png`

  return {
    title,
    description,
    keywords: post.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: post.noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url,
      type: 'article',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [ogImageUrl],
    },
  }
}

export function generatePageMetadata(
  data: PageSEOData,
  type: 'blog' | 'category' | 'tag'
): Metadata {
  let url = `${SITE_URL}/blog`
  const pageType = 'website'

  if (type === 'category') {
    url = `${SITE_URL}/blog/category/${data.slug}`
  } else if (type === 'tag') {
    url = `${SITE_URL}/blog/tag/${data.slug}`
  }

  const canonicalUrl = data.canonicalUrl || url
  const ogImageUrl = data.ogImage ? urlForOgImage(data.ogImage) : `${SITE_URL}/og-default.png`

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: data.noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      title: data.title,
      description: data.description || '',
      url,
      type: pageType,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description || '',
      images: [ogImageUrl],
    },
  }
}

export function generateBlogPostSchema(post: Post, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || '',
    image: post.mainImage ? urlForOgImage(post.mainImage) : '',
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'degaus',
    },
    publisher: {
      '@type': 'Organization',
      name: 'degaus',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function calculateReadingTime(body: PortableTextBlock[]): number {
  if (!body || !Array.isArray(body)) return 0

  let wordCount = 0

  body.forEach((block) => {
    if (block._type === 'block' && block.children) {
      const children = block.children as unknown as { _type: string; text?: string }[]
      children.forEach((child) => {
        if (child._type === 'span' && child.text) {
          wordCount += child.text.split(/\s+/).length
        }
      })
    }
  })

  // Average reading speed: 200 words per minute
  const minutes = Math.ceil(wordCount / 200)
  return minutes
}
