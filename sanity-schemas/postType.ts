import { defineField, defineType } from 'sanity'

// Type for Portable Text blocks
type PortableTextBlock = {
  _type: string
  style?: string
  children?: Array<{ text?: string }>
  [key: string]: unknown
}

// Helper function to extract plain text from Portable Text (up to first H2)
const extractTextFromPortableText = (body: PortableTextBlock[]): string => {
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
      for (const child of block.children) {
        if (child.text) {
          text += child.text + ' '
        }
      }
    }
  }

  return text.trim()
}

// Schema for converting HTML to Portable Text
const blockContentSchema = {
  type: 'block',
  styles: [
    { title: 'Normal', value: 'normal' },
    { title: 'H2', value: 'h2' },
    { title: 'H3', value: 'h3' },
    { title: 'H4', value: 'h4' },
    { title: 'Quote', value: 'blockquote' },
  ],
  lists: [
    { title: 'Bullet', value: 'bullet' },
    { title: 'Numbered', value: 'number' },
  ],
  marks: {
    decorators: [
      { title: 'Bold', value: 'strong' },
      { title: 'Italic', value: 'em' },
      { title: 'Code', value: 'code' },
    ],
    annotations: [
      {
        name: 'link',
        type: 'object',
        title: 'Link',
        fields: [
          {
            name: 'href',
            type: 'url',
            title: 'URL',
          },
          {
            name: 'blank',
            type: 'boolean',
            title: 'Open in new tab',
            initialValue: true,
          },
        ],
      },
    ],
  },
}

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'seo',
      title: 'SEO & Advanced',
    },
  ],
  fields: [
    // Basic fields
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.max(200),
      description:
        'Short summary of the post (max 200 characters). Auto-filled from article content.',
      initialValue: ({ document }) => {
        if (document?.body) {
          const text = extractTextFromPortableText(
            document.body as Array<{
              _type: string
              children?: Array<{ text?: string }>
              [key: string]: unknown
            }>
          )
          return text.substring(0, 200)
        }
        return ''
      },
      group: 'content',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      group: 'content',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated at',
      type: 'datetime',
      readOnly: true,
      description: 'Automatically updated on modification',
      group: 'content',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      group: 'content',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
      group: 'content',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Important for SEO and accessibility (optional)',
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Display this post in the featured section',
      initialValue: false,
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: blockContentSchema.styles,
          lists: blockContentSchema.lists,
          marks: blockContentSchema.marks,
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Important for SEO and accessibility (optional)',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
      group: 'content',
    }),

    // SEO fields
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description:
        'Optimized title for search engines (max 60 characters). Auto-filled from main title.',
      validation: (rule) => rule.max(60),
      initialValue: ({ document }) => {
        const title = (document?.title as string) || ''
        return title.substring(0, 60)
      },
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Description for search engines (max 160 characters). Auto-filled from excerpt.',
      validation: (rule) => rule.max(160),
      initialValue: ({ document }) => {
        const excerpt = (document?.excerpt as string) || ''
        return excerpt.substring(0, 160)
      },
      group: 'seo',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      group: 'seo',
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Canonical URL if different from default',
      group: 'seo',
    }),
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title',
      type: 'string',
      description: 'Title for social media sharing (auto-filled)',
      initialValue: ({ document }) => document?.seoTitle || document?.title || '',
      group: 'seo',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
      rows: 2,
      description: 'Description for social media sharing (auto-filled)',
      initialValue: ({ document }) => document?.metaDescription || document?.excerpt || '',
      group: 'seo',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image for sharing (if different from main image)',
      options: {
        hotspot: true,
      },
      group: 'seo',
    }),
    defineField({
      name: 'noindex',
      title: 'Noindex',
      type: 'boolean',
      description: 'Prevent search engines from indexing this page',
      initialValue: false,
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const { author, publishedAt } = selection
      return {
        ...selection,
        subtitle: `${author ? `by ${author}` : ''} ${
          publishedAt ? `• ${new Date(publishedAt).toLocaleDateString('en-US')}` : ''
        }`,
      }
    },
  },
  orderings: [
    {
      title: 'Published Date (newest)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Published Date (oldest)',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
