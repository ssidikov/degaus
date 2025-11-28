import { defineField, defineType } from 'sanity'

export const blogSettingsType = defineType({
  name: 'blogSettings',
  title: 'Blog Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'blogTitle',
      title: 'Blog Title',
      type: 'string',
      description: 'Main title for your blog',
      initialValue: 'Blog',
    }),
    defineField({
      name: 'blogSubtitle',
      title: 'Blog Subtitle',
      type: 'string',
      description: 'Short description of your blog',
    }),
    defineField({
      name: 'postsPerPage',
      title: 'Posts per Page',
      type: 'number',
      description: 'Number of posts to display per page',
      initialValue: 12,
      validation: (rule) => rule.required().min(1).max(50),
    }),
    defineField({
      name: 'defaultSeoTitle',
      title: 'Default SEO Title',
      type: 'string',
      description: 'Default title for SEO',
    }),
    defineField({
      name: 'defaultSeoDescription',
      title: 'Default SEO Description',
      type: 'text',
      rows: 3,
      description: 'Default description for SEO',
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Default Open Graph Image',
      type: 'image',
      description: 'Default image for social media sharing',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Blog Settings',
      }
    },
  },
})
