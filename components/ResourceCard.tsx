'use client'

import Image from 'next/image'

interface ResourceCardProps {
  resource: {
    _id: string;
    title: string;
    description: string;
    headerImage?: any;
    slug: string;
    _type: string;
    tags?: string[];
  }
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      {resource.headerImage && (
        <Image
          src={urlForImage(resource.headerImage).url()}
          alt={resource.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {resource.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {resource.description}
        </p>
        {resource.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {resource.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <a
          href={`/resources/${resource._type}/${resource.slug}`}
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Read More
        </a>
      </div>
    </div>
  )
}

export default ResourceCard