import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity-schemas'

export default defineConfig({
  name: 'default',
  title: 'degaus Blog',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ' ',
  dataset: 'production',

  basePath: '/sanity-studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Blog Settings (singleton)
            S.listItem()
              .title('Blog Settings')
              .icon(() => '⚙️')
              .child(S.document().schemaType('blogSettings').documentId('blogSettings')),
            S.divider(),
            // Blog content
            S.documentTypeListItem('post')
              .title('Posts')
              .icon(() => '📝'),
            S.documentTypeListItem('category')
              .title('Categories')
              .icon(() => '📁'),
            S.documentTypeListItem('tag')
              .title('Tags')
              .icon(() => '🏷️'),
            S.documentTypeListItem('author')
              .title('Authors')
              .icon(() => '👤'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
