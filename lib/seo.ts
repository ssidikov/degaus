import { Metadata } from 'next'
import { urlForOgImage } from '@/sanity/imageUrl'

interface Post {
  title: string
  excerpt?: string
  seoTitle?: string
  metaDescription?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: any
  mainImage?: any
  slug: { current: string }
  noindex?: boolean
  canonicalUrl?: string
  keywords?: string[]
}

interface PageSEOData {
  title: string
  description?: string
  keywords?: string[]
  ogImage?: any
  slug: string
  noindex?: boolean
  canonicalUrl?: string
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://degaus.com'

export function generatePostMetadata(post: Post): Metadata {
  const title = post.seoTitle || post.title
  const description = post.metaDescription || post.excerpt || ''
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
  let pageType = 'website'

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
      type: pageType as any,
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

export function generateBlogPostSchema(post: any, url: string) {
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

export function calculateReadingTime(body: any[]): number {
  if (!body || !Array.isArray(body)) return 0

  let wordCount = 0

  body.forEach((block) => {
    if (block._type === 'block' && block.children) {
      block.children.forEach((child: any) => {
        if (child.text) {
          wordCount += child.text.split(/\s+/).length
        }
      })
    }
  })

  // Average reading speed: 200 words per minute
  const minutes = Math.ceil(wordCount / 200)
  return minutes
}
