'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import ResourceCard from './ResourceCard'

interface ResourceGridProps {
  resources: any[]
}

const ResourceGrid = ({ resources }: ResourceGridProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredResources = resources.filter(resource => {
    const matchesSearch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesFilter = activeFilter === 'all' || resource._type === activeFilter

    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      {/* Same content as before */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <ResourceCard key={resource._id} resource={resource} />
        ))}
      </div>
    </div>
  )
}

export default ResourceGrid