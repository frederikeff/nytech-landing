export default function Hero() {
    return (
      <div className="relative pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block mb-4">Building Bridges Between</span> {/* Added mb-4 for more space */}
              <span className="block text-blue-600">Human Potential and AI Capabilities</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl"> {/* Increased top margin */}
              Exploring and building AI-powered innovations while connecting creators with the tools and knowledge to bring their ideas to life.
            </p>
            <div className="mt-8 max-w-md mx-auto flex flex-col sm:flex-col md:flex-row justify-center items-center gap-4 md:max-w-2xl"> {/* Modified for horizontal desktop layout */}
              
                <a href="#newsletter"
                className="w-full md:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
              >
                Subscribe to Newsletter
              </a>
              
                <a href="https://nytechpulse.beehiiv.com/"
                className="w-full md:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:text-lg"
              >
                Explore Resources
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
