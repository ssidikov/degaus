import { definePlugin } from 'sanity'
import { htmlToBlocks } from '@sanity/block-tools'
import { JSDOM } from 'jsdom'

// Plugin to handle paste events and convert HTML to Portable Text
export const pasteFormattingPlugin = definePlugin({
  name: 'paste-formatting',
  plugins: [],
  schema: {
    types: [],
  },
  form: {
    // Add paste handling to all block editors
    components: {
      input(props) {
        const { schemaType } = props

        // Only apply to block array fields
        if (
          schemaType.jsonType !== 'array' ||
          !schemaType.of?.some((type: any) => type.name === 'block')
        ) {
          return props.renderDefault(props)
        }

        return props.renderDefault(props)
      },
    },
  },
})
