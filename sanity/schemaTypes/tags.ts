import { defineType } from 'sanity'

const primaryTags = ['No-Code', 'Code', 'AI', 'Non-Tech']
const secondaryTags = ['Products', 'AI', 'Community', 'Ecosystem', 'NYC', 'Improvement', 'Story', 'Tool']

export const contentTags = defineType({
  name: 'contentTags',
  title: 'Content Tags',
  type: 'object',
  fields: [
    {
      name: 'primaryTags',
      title: 'Primary Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: primaryTags.map(tag => ({ title: tag, value: tag }))
      }
    },
    {
      name: 'secondaryTags',
      title: 'Secondary Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: secondaryTags.map(tag => ({ title: tag, value: tag }))
      }
    }
  ]
})