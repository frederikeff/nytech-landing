import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { seo } from './seo'
import { contentTags } from './tags'
import { howToGuide } from './howToGuide'
import { codeBlock } from './codeBlock'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    howToGuide,
    author,
    seo,
    contentTags, 
    codeBlock
  ],
}