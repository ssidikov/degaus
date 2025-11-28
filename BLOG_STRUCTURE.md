# Blog Structure - Complete File Organization

## 📁 Project Structure Overview

```
degaus/                                      # Next.js application
├── app/
│   ├── blog/
│   │   ├── page.tsx                         # Main blog listing (/blog)
│   │   ├── [slug]/
│   │   │   └── page.tsx                     # Individual post (/blog/[slug])
│   │   ├── category/
│   │   │   └── [slug]/
│   │   │       └── page.tsx                 # Category archive
│   │   └── tag/
│   │       └── [slug]/
│   │           └── page.tsx                 # Tag archive
│   ├── layout.tsx
│   ├── page.tsx                             # Homepage
│   ├── sitemap.ts                           # Dynamic sitemap (includes blog)
│   └── globals.css
│
├── components/
│   ├── blog/                                # Blog-specific components
│   │   ├── BlogCard.tsx                     # Post card component
│   │   ├── FeaturedPosts.tsx                # Featured posts section
│   │   ├── Pagination.tsx                   # Pagination controls
│   │   ├── TagBadge.tsx                     # Tag display component
│   │   ├── CategoryList.tsx                 # Category sidebar
│   │   ├── Breadcrumbs.tsx                  # Navigation breadcrumbs
│   │   └── RichTextRenderer.tsx             # Portable Text renderer
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...other components
│
├── sanity/                                  # Sanity integration
│   ├── client.ts                            # Sanity client configuration
│   ├── imageUrl.ts                          # Image URL helpers
│   └── queries.ts                           # All GROQ queries
│
├── sanity-schemas/                          # Sanity schema definitions
│   ├── postType.ts                          # Blog post schema
│   ├── categoryType.ts                      # Category schema
│   ├── tagType.ts                           # Tag schema
│   ├── authorType.ts                        # Author schema
│   ├── blogSettingsType.ts                  # Blog settings singleton
│   └── index.ts                             # Schema export
│
├── lib/
│   ├── seo.ts                               # SEO utilities
│   └── ...other utilities
│
├── public/
│   └── ...static files
│
├── .env.local                               # Environment variables (create this)
├── BLOG_SETUP.md                            # Setup guide
├── BLOG_STRUCTURE.md                        # This file
├── SANITY_ENV_EXAMPLE.txt                   # Environment variables template
├── package.json                             # Updated with Sanity deps
└── ...config files

studio-degaus/                               # Sanity Studio (separate project)
├── schemaTypes/                             # Copy from sanity-schemas/
│   ├── postType.ts
│   ├── categoryType.ts
│   ├── tagType.ts
│   ├── authorType.ts
│   ├── blogSettingsType.ts
│   └── index.ts
├── sanity.config.ts                         # Studio configuration
├── sanity.cli.ts                            # CLI configuration
└── package.json                             # Studio dependencies
```

---

## 🎯 Key Files Explained

### Blog Pages

| File                                | Purpose           | Features                                      |
| ----------------------------------- | ----------------- | --------------------------------------------- |
| `app/blog/page.tsx`                 | Main blog listing | Featured posts, pagination, category sidebar  |
| `app/blog/[slug]/page.tsx`          | Individual post   | Full content, author bio, tags, prev/next nav |
| `app/blog/category/[slug]/page.tsx` | Category archive  | Filtered posts by category                    |
| `app/blog/tag/[slug]/page.tsx`      | Tag archive       | Filtered posts by tag                         |

### Components

| Component          | Purpose                                          |
| ------------------ | ------------------------------------------------ |
| `BlogCard`         | Reusable post card with image, excerpt, metadata |
| `FeaturedPosts`    | Showcase for featured posts                      |
| `Pagination`       | Page navigation with prev/next buttons           |
| `TagBadge`         | Clickable tag badge                              |
| `CategoryList`     | Sidebar with all categories                      |
| `Breadcrumbs`      | Navigation trail                                 |
| `RichTextRenderer` | Custom Portable Text styling                     |

### Sanity Integration

| File                 | Purpose                            |
| -------------------- | ---------------------------------- |
| `sanity/client.ts`   | Sanity client with CDN config      |
| `sanity/imageUrl.ts` | Image optimization helpers         |
| `sanity/queries.ts`  | All GROQ queries (9 queries total) |

### Schema Types

| Schema             | Fields                                  | Features                      |
| ------------------ | --------------------------------------- | ----------------------------- |
| `postType`         | title, slug, excerpt, body, images, SEO | Content/SEO tabs, auto-update |
| `categoryType`     | name, slug, description, order          | Custom sorting                |
| `tagType`          | name, slug, description                 | Alphabetical sorting          |
| `authorType`       | name, slug, image, bio                  | Author profiles               |
| `blogSettingsType` | blog title, subtitle, posts per page    | Global settings               |

### Utilities

| File         | Functions                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------ |
| `lib/seo.ts` | `generatePostMetadata`, `generatePageMetadata`, `generateBlogPostSchema`, `calculateReadingTime` |

---

## 🔄 Data Flow

### Blog Listing Page (`/blog`)

```
User visits /blog
    ↓
Next.js fetches from Sanity:
  - Featured posts (if page 1)
  - Paginated posts
  - All categories
    ↓
Page renders with:
  - Featured section (page 1 only)
  - Posts grid (3 columns)
  - Category sidebar
  - Pagination
```

### Individual Post (`/blog/[slug]`)

```
User visits /blog/my-post
    ↓
Next.js fetches from Sanity:
  - Post by slug (with all SEO data)
  - Adjacent posts (prev/next)
  - All categories
    ↓
Page renders with:
  - Hero image
  - Full content (Portable Text)
  - Author bio
  - Tags
  - Prev/Next navigation
  - Category sidebar
    ↓
SEO metadata auto-generated:
  - Meta tags
  - Open Graph
  - Twitter Cards
  - Schema.org markup
```

---

## 🗂️ Content Types in Sanity

### Document Types

1. **Post** (main content type)
   - Groupped in tabs: "Contenu" and "SEO & Avancé"
   - Auto-fills SEO from main content
   - Supports featured flag
2. **Category**
   - Can be ordered manually
   - Shows post count
3. **Tag**
   - Simple taxonomy
   - Shows post count
4. **Author**
   - Profile with image and bio
5. **Blog Settings** (singleton)
   - Global blog configuration
   - Only one document allowed

---

## 🎨 Design System

### Colors

- Primary: `#492BDA` (purple)
- Secondary: `#3620B0` (darker purple)
- Background: Gradient from `purple-50` to `white`
- Text: `gray-900` (headings), `gray-700` (body), `gray-600` (meta)

### Typography

- Headings: `font-bricolage` (Bricolage Grotesque)
- Body: `font-darker` (Darker Grotesque)
- Sizes: Responsive with `lg:` variants

### Spacing

- Container: `max-w-7xl`
- Grid gaps: `gap-6` (mobile), `gap-8` (desktop)
- Sections: `mb-12` to `mb-16`

---

## 🚀 Performance Optimizations

### Image Optimization

- All images served via Sanity's CDN
- Auto-format and auto-compress
- Responsive sizes with `next/image`
- Lazy loading for images below fold

### Data Fetching

- **Blog listing**: Revalidate every 60 seconds
- **Categories/Tags**: Revalidate every hour
- **Blog settings**: Revalidate every hour
- **Static paths**: Pre-generated at build time

### Caching Strategy

- Use Sanity CDN in production (`useCdn: true`)
- Next.js ISR (Incremental Static Regeneration)
- Stale-while-revalidate pattern

---

## 📊 SEO Implementation

### Automatic SEO Features

✅ **Page Metadata**: Title, description, keywords
✅ **Open Graph**: Facebook, LinkedIn sharing
✅ **Twitter Cards**: Twitter sharing
✅ **Schema.org**: BlogPosting, BreadcrumbList
✅ **Canonical URLs**: Prevent duplicate content
✅ **Sitemap**: Auto-includes all blog posts
✅ **Reading Time**: Auto-calculated

### SEO Workflow

1. Create post in Sanity
2. Write title and excerpt
3. SEO fields auto-populate
4. (Optional) Override in SEO tab
5. Publish → SEO is live

---

## 🔧 Customization Guide

### Change Posts Per Page

1. Go to Sanity Studio
2. Click "Paramètres du Blog"
3. Edit "Articles par page"
4. Save

### Add Custom Field to Posts

1. Edit `sanity-schemas/postType.ts`
2. Add new `defineField()`
3. Restart Sanity Studio
4. Field appears in editor

### Modify Blog Colors

Edit in component files:

- `bg-[#492BDA]` → your primary color
- `text-[#492BDA]` → your accent color
- Update in all blog components

### Change Grid Layout

Edit `app/blog/page.tsx`:

```tsx
// Current: 3 columns on large screens
<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>

// Change to 2 columns:
<div className='grid gap-6 sm:grid-cols-1 lg:grid-cols-2'>

// Change to 4 columns:
<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
```

---

## 📖 GROQ Queries Reference

| Query                     | Purpose               | Parameters                   |
| ------------------------- | --------------------- | ---------------------------- |
| `getAllPostsQuery`        | Get paginated posts   | `start`, `end`               |
| `getPostBySlugQuery`      | Get single post       | `slug`                       |
| `getFeaturedPostsQuery`   | Get featured posts    | -                            |
| `getCategoriesQuery`      | Get all categories    | -                            |
| `getTagsQuery`            | Get all tags          | -                            |
| `getBlogSettingsQuery`    | Get blog settings     | -                            |
| `getPostsByCategoryQuery` | Get posts by category | `categoryId`, `start`, `end` |
| `getPostsByTagQuery`      | Get posts by tag      | `tagId`, `start`, `end`      |
| `getAdjacentPostsQuery`   | Get prev/next posts   | `currentDate`                |
| `getPostSlugsQuery`       | Get all post slugs    | -                            |

---

## 🎯 Content Creation Best Practices

### Writing for SEO

- **Title**: 50-60 characters
- **Excerpt**: 150-160 characters
- **Headings**: Use H2, H3, H4 hierarchy
- **Images**: Always add alt text
- **Links**: Use descriptive anchor text

### Image Guidelines

- **Hero images**: 1200×675px (16:9 ratio)
- **OG images**: 1200×630px
- **Author photos**: 400×400px (square)
- **Format**: JPG or PNG (Sanity auto-converts)

### Portable Text Best Practices

- Use headings to structure content
- Add images with captions
- Use block quotes for important points
- Add links with descriptive text
- Use lists for scannable content

---

## 🎓 Learning Resources

### Sanity

- [Sanity Studio Docs](https://www.sanity.io/docs/sanity-studio)
- [GROQ Cheat Sheet](https://www.sanity.io/docs/query-cheat-sheet)
- [Schema Types](https://www.sanity.io/docs/schema-types)

### Next.js

- [App Router](https://nextjs.org/docs/app)
- [Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)

---

**Questions?** Check [BLOG_SETUP.md](./BLOG_SETUP.md) for installation and configuration guide.
