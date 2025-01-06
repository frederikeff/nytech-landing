// app/(landing)/launch-package/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Check, Clock, ArrowRight, Package, Zap, TabletSmartphone } from 'lucide-react'

const LaunchPackagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Planning.<br />Start Launching.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You have the vision. We have the expertise to bring it to life in 7 days.
            No more endless tool research. No more tech setup headaches.
            Just your business, ready to launch.
          </p>
        </div>

        {/* Pain Points & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Pain Points */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Sound Familiar?</h2>
            <ul className="space-y-4">
              {[
                "Hours lost in website builders",
                "Confused about which tools to use",
                "Stuck in the planning phase",
                "Tech setup taking too long",
                "Need to look professional, fast",
                "Want to focus on your business, not tech"
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-red-500">✗</span>
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">In 7 Days, You Get:</h2>
            <ul className="space-y-4">
              {[
                "Complete professional website",
                "Brand identity & messaging",
                "All tech tools configured",
                "Lead generation ready",
                "Start getting clients immediately",
                "Focus on what you do best"
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0" />
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Package Details */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Complete Launch Package</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Package className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Professional Presence</h3>
              <ul className="space-y-3">
                <li>• Website (up to 7 pages)</li>
                <li>• 2 Additional landing pages</li>
                <li>• Logo (text & visual)</li>
                <li>• Color concept</li>
                <li>• Professional messaging</li>
              </ul>
            </div>

            <div>
              <TabletSmartphone className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Technical Setup</h3>
              <ul className="space-y-3">
                <li>• Domain configuration</li>
                <li>• Email setup</li>
                <li>• Newsletter integration</li>
                <li>• Booking system setup</li>
                <li>• SEO optimization</li>
              </ul>
            </div>

            <div>
              <Zap className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Lead Generation</h3>
              <ul className="space-y-3">
                <li>• 2 Target personas</li>
                <li>• 2 Lead generation streams</li>
                <li>• Custom landing page</li>
                <li>• Messaging templates</li>
                <li>• Follow-up sequences</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="text-3xl font-bold mb-6">$/€2000</div>
            <p className="text-gray-600 mb-8">Fixed Price • 7 Days • Everything Included</p>
            <Link 
              href="https://calendly.com/nytechventures/30-minute-meeting"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule Your Launch Call
            </Link>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Your Launch Journey</h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                title: "Discovery Call",
                description: "30-minute meeting to align goals and vision",
                icon: <Clock className="w-6 h-6" />
              },
              {
                title: "Strategy Session",
                description: "Deep dive into your needs and requirements",
                icon: <Clock className="w-6 h-6" />
              },
              {
                title: "We Build",
                description: "Our team creates everything you need",
                icon: <Clock className="w-6 h-6" />
              },
              {
                title: "Launch Ready",
                description: "Full package delivery and setup guidance",
                icon: <Clock className="w-6 h-6" />
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Story Link */}
        <div className="bg-blue-50 rounded-xl p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">See It In Action</h3>
            <p className="text-gray-600 mb-6">
              Want to know how Rike launched within a week and got her first 500 subscribers?
            </p>
            <Link 
              href="/success-stories"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              Read Success Story
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What's included in the fixed price?",
                a: "Everything mentioned above except domain, hosting, and high-traffic costs. You get the complete setup, all integrations, and brand assets."
              },
              {
                q: "What if I need changes after launch?",
                a: "We offer a support package (5 hours for $2000) and monthly maintenance starting at $/€25/month. Additional services available for specific needs."
              },
              {
                q: "How do you deliver everything so fast?",
                a: "We combine expert knowledge, streamlined processes, and proven tools to deliver quality results quickly. No cutting corners, just efficiency."
              },
              {
                q: "What if I need more complex features?",
                a: "For AI-enhanced platforms, chatbots, or complex e-commerce, please contact us for a custom quote. We handle advanced development too!"
              }
            ].map((faq, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Launch?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Stop waiting. Start building your success story.
          </p>
          <Link 
            href="https://calendly.com/nytechventures/30-minute-meeting"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule Your Launch Call
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LaunchPackagePage