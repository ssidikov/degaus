import { PortableTextBlock } from 'sanity'

export interface SanityImage {
  asset: {
    url: string
    _ref?: string
  }
  alt?: string
  caption?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export interface Slug {
  current: string
}

export interface Author {
  name: string
  slug: Slug
  image?: SanityImage
  bio?: PortableTextBlock[]
}

export interface Category {
  name: string
  slug: Slug
  description?: string
}

export interface Tag {
  _id: string
  name: string
  slug: Slug
}

export interface Post {
  _id: string
  title: string
  slug: Slug
  excerpt?: string
  publishedAt: string
  updatedAt?: string
  mainImage?: SanityImage
  author?: Author
  category?: Category
  tags?: Tag[]
  body?: PortableTextBlock[]
  seoTitle?: string
  metaDescription?: string
  keywords?: string[]
  canonicalUrl?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: SanityImage
  noindex?: boolean
}
