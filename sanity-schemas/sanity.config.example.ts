import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '.'

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
              .title('Categories')
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
        return prev.map((originalAction) =>
          originalAction.action === 'publish'
            ? (props) => {
                const patchedDraft = props.draft
                  ? {
                      ...props.draft,
                      updatedAt: new Date().toISOString(),
                    }
                  : props.draft

                return originalAction({
                  ...props,
                  draft: patchedDraft,
                })
              }
            : originalAction
        )
      }
      return prev
    },
  },
})
