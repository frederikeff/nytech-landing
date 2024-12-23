// sanity/schemaTypes/howToGuide.ts
import { defineType } from 'sanity'

export const howToGuide = defineType({
  name: 'howToGuide',
  title: 'How-To Guide',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief overview of what this guide covers (appears on website)',
      validation: Rule => Rule.required().min(10).max(300)
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'problemFocus',
      title: 'Problem Focus',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'techStack',
      title: 'Tech Stack Used',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'requirements',
      title: 'Specific Requirements',
      type: 'text'
    },
    {
      name: 'solution',
      title: 'Solution Overview',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'mainContent',
      title: 'How-To Guide Content',
      type: 'array',
      of: [
        {
          type: 'block', // This enables rich text editing 
        },
        {
          type: 'image',
          options: { hotspot: true }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'youtubeUrl',
      title: 'YouTube Video URL',
      type: 'url'
    },
    {
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'tipsAndTricks',
      title: 'Tips & Tricks',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'timeInvestment',
      title: 'Time Investment',
      type: 'string'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'contentTags'  // Using your existing tags schema
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'  // Using your existing SEO schema
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
            { title: 'Raw', value: 'raw' },
            { title: 'Processed', value: 'processed' },
            { title: 'To Be Published', value: 'toBePublished' },
            { title: 'Published', value: 'published' }
        ],
        layout: 'radio'
      },
      initialValue: 'raw'
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'headerImage'
    },
    prepare(selection) {
      const { author } = selection
      return {
        ...selection,
        subtitle: author && `by ${author}`
      }
    }
  }
})