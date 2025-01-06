// app/resources/page.tsx
import { client } from '@/sanity/lib/client'

export default async function ResourcesPage() {
  const howToGuides = await client.fetch(`
    *[_type == "howToGuide"] {
      _id,
      title,
      description,
      status,
      publishedAt
    }
  `)

  return (
    <div className="p-8">
      <pre>{JSON.stringify(howToGuides, null, 2)}</pre>
    </div>
  )
}