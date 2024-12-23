import { defineType } from 'sanity'

export const codeBlock = defineType({
  name: 'code',
  title: 'Code',
  type: 'object',
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'TypeScript', value: 'typescript' },
          { title: 'JavaScript', value: 'javascript' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'Python', value: 'python' }
        ]
      }
    },
    {
      name: 'code',
      title: 'Code',
      type: 'text'
    }
  ]
})