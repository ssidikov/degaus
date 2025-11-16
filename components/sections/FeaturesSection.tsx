import { END_TO_END_FEATURES, ORGANIC_CONTENT_FEATURES, STATS } from '@/lib/constants';

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-600 mb-2">Use cases</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Create winning content in minutes
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">End-to-end Ads</h3>
                <p className="text-gray-600 mb-6">
                  Generate winning ads in minutes. Start from real ads or build from scratch. Add your brand.
                </p>
              </div>
            </div>

            <div className="bg-linear-to-br from-red-100 via-orange-100 to-pink-100 rounded-2xl h-64 mb-6 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/30 backdrop-blur-sm rounded-2xl mx-auto mb-4" />
                  <p className="text-sm font-medium text-gray-700">Ad Preview</p>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <ul className="space-y-3">
              {END_TO_END_FEATURES.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-indigo-600">{feature.icon}</span>
                  <span className="text-gray-700">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Organic Content</h3>
                <p className="text-gray-600 mb-6">
                  Generate viral organic content in minutes.
                </p>
              </div>
            </div>

            <div className="bg-linear-to-br from-purple-100 via-pink-100 to-orange-100 rounded-2xl h-64 mb-6 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/30 backdrop-blur-sm rounded-2xl mx-auto mb-4" />
                  <p className="text-sm font-medium text-gray-700">Content Preview</p>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <ul className="space-y-3">
              {ORGANIC_CONTENT_FEATURES.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-indigo-600">{feature.icon}</span>
                  <span className="text-gray-700">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} rounded-3xl p-8 ${
                index === 1 ? 'text-white' : 'text-gray-900'
              }`}
            >
              <div className="text-5xl font-bold mb-4">{stat.value}</div>
              <h4 className="text-xl font-bold mb-3">{stat.title}</h4>
              <p className={`text-sm ${index === 1 ? 'text-white/80' : 'text-gray-600'}`}>
                {stat.description}
              </p>
              
              {'icons' in stat && stat.icons && (
                <div className="flex gap-3 mt-4">
                  {stat.icons.map((icon: string, iconIndex: number) => (
                    <div
                      key={iconIndex}
                      className="w-8 h-8 bg-white rounded-lg flex items-center justify-center"
                    >
                      <span className="text-xs">{icon[0].toUpperCase()}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
