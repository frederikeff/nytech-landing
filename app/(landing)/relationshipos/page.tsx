// app/relationship-os/page.tsx
'use client'

import { CheckCircle2, XCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const traditionalProblems = [
  'Manual data entry consuming 60% of sales time',
  'Scattered information across multiple systems',
  'Complex, unintuitive interfaces',
  'Missing relationship context',
  'Siloed data between teams'
]

const ourSolutions = [
  'Natural language input with AI understanding',
  'Unified relationship view across all channels',
  'Automatic data capture and enrichment',
  'Intelligent relationship mapping',
  'Real-time collaboration and insights'
]

export default function RelationshipOS() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
              <span className="block">Stop Managing Data.</span>
              <span className="block text-blue-600 mt-2">Start Building Relationships.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The first CRM that works the way your brain does. No more manual data entry. 
              No more scattered information. Just natural relationship building, powered by AI.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Traditional CRMs */}
            <Card className="p-6 bg-red-50 border-red-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Traditional CRMs</h2>
              <CardContent className="space-y-4">
                {traditionalProblems.map((problem, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{problem}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Our Solution */}
            <Card className="p-6 bg-green-50 border-green-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">RelationshipOS</h2>
              <CardContent className="space-y-4">
                {ourSolutions.map((solution, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{solution}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to revolutionize how you manage relationships?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our early access program and help shape the future of relationship management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.location.href = 'https://calendly.com/nytechventures/30-minute-meeting'}
            >
              Book a Discovery Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white hover:bg-blue-50"
              onClick={() => window.location.href = '/relationship-os/survey'}
            >
              Take Our Survey
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}