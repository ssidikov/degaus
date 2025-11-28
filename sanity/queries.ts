// GROQ Queries for Blog

// Get all posts with pagination
export const getAllPostsQuery = `
*[_type == "post" && defined(slug.current)] | order(publishedAt desc) [$start...$end] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  updatedAt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  author->{
    _id,
    name,
    slug,
    image {
      asset->{
        _id,
        url
      }
    }
  },
  category->{
    _id,
    name,
    slug
  },
  tags[]->{
    _id,
    name,
    slug
  },
  featured
}
`

// Get single post by slug
export const getPostBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  updatedAt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  body,
  author->{
    _id,
    name,
    slug,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    bio
  },
  category->{
    _id,
    name,
    slug,
    description
  },
  tags[]->{
    _id,
    name,
    slug,
    description
  },
  featured,
  seoTitle,
  metaDescription,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage {
    asset->{
      _id,
      url
    }
  },
  noindex
}
`

// Get featured posts
export const getFeaturedPostsQuery = `
*[_type == "post" && featured == true && defined(slug.current)] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  author->{
    _id,
    name,
    slug
  },
  category->{
    _id,
    name,
    slug
  }
}
`

// Get all categories
export const getCategoriesQuery = `
*[_type == "category"] | order(order asc, name asc) {
  _id,
  name,
  slug,
  description,
  order,
  "postCount": count(*[_type == "post" && references(^._id)])
}
`

// Get all tags
export const getTagsQuery = `
*[_type == "tag"] | order(name asc) {
  _id,
  name,
  slug,
  description,
  "postCount": count(*[_type == "post" && references(^._id)])
}
`

// Get blog settings
export const getBlogSettingsQuery = `
*[_type == "blogSettings"][0] {
  _id,
  blogTitle,
  blogSubtitle,
  postsPerPage,
  defaultSeoTitle,
  defaultSeoDescription,
  defaultOgImage {
    asset->{
      _id,
      url
    }
  }
}
`

// Get posts by category
export const getPostsByCategoryQuery = `
*[_type == "post" && category._ref == $categoryId && defined(slug.current)] | order(publishedAt desc) [$start...$end] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  author->{
    _id,
    name,
    slug
  },
  category->{
    _id,
    name,
    slug
  },
  tags[]->{
    _id,
    name,
    slug
  }
}
`

// Get posts by tag
export const getPostsByTagQuery = `
*[_type == "post" && $tagId in tags[]._ref && defined(slug.current)] | order(publishedAt desc) [$start...$end] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  author->{
    _id,
    name,
    slug
  },
  category->{
    _id,
    name,
    slug
  },
  tags[]->{
    _id,
    name,
    slug
  }
}
`

// Get adjacent posts (previous and next)
export const getAdjacentPostsQuery = `
{
  "previous": *[_type == "post" && publishedAt < $currentDate && defined(slug.current)] | order(publishedAt desc) [0] {
    _id,
    title,
    slug
  },
  "next": *[_type == "post" && publishedAt > $currentDate && defined(slug.current)] | order(publishedAt asc) [0] {
    _id,
    title,
    slug
  }
}
`

// Get all post slugs (for static generation)
export const getPostSlugsQuery = `
*[_type == "post" && defined(slug.current)] {
  "slug": slug.current
}
`

// Get category by slug
export const getCategoryBySlugQuery = `
*[_type == "category" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  description
}
`

// Get tag by slug
export const getTagBySlugQuery = `
*[_type == "tag" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  description
}
`

// Get total post count
export const getTotalPostCountQuery = `count(*[_type == "post" && defined(slug.current)])`

// Get total post count by category
export const getPostCountByCategoryQuery = `count(*[_type == "post" && category._ref == $categoryId && defined(slug.current)])`

// Get total post count by tag
export const getPostCountByTagQuery = `count(*[_type == "post" && $tagId in tags[]._ref && defined(slug.current)])`
