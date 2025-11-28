import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'degaus Blog',

  projectId: 'q7qdnq62',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            // Blog Settings (singleton)
            S.listItem()
              .title('Paramètres du Blog')
              .icon(() => '⚙️')
              .child(S.document().schemaType('blogSettings').documentId('blogSettings')),
            S.divider(),
            // Blog content
            S.documentTypeListItem('post')
              .title('Articles')
              .icon(() => '📝'),
            S.documentTypeListItem('category')
              .title('Catégories')
              .icon(() => '📁'),
            S.documentTypeListItem('tag')
              .title('Tags')
              .icon(() => '🏷️'),
            S.documentTypeListItem('author')
              .title('Auteurs')
              .icon(() => '👤'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    // Auto-update updatedAt field
    actions: (prev, { schemaType }) => {
      if (schemaType === 'post') {
        return prev.map((action) =>
          action.action === 'publish'
            ? {
                ...action,
                onHandle: async (context) => {
                  const { draft, published } = context
                  // Update updatedAt before publishing
                  const patchedDraft = {
                    ...draft,
                    updatedAt: new Date().toISOString(),
                  }
                  // Call original handler with patched draft
                  return action.onHandle?.({ ...context, draft: patchedDraft })
                },
              }
            : action
        )
      }
      return prev
    },
  },
})
