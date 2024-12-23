import { defineType } from 'sanity'

export const seo = defineType({
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
      {
        name: 'metaTitle',
        title: 'Meta Title',
        type: 'string'
      },
      {
        name: 'metaDescription',
        title: 'Meta Description',
        type: 'text'
      },
      {
        name: 'openGraphImage',
        title: 'Open Graph Image',
        type: 'image',
        description: 'Image for social media sharing'
      },
      {
        name: 'keywords',
        title: 'Meta Keywords',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Add keywords for SEO (press Enter after each keyword)'
      }
    ]
  })