export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            AI content that
            <br />
            <span className="text-gray-900">actually converts</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Activate, create & automate your{' '}
            <span className="inline-flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.5 3A1.5 1.5 0 0 0 8 4.5v15A1.5 1.5 0 0 0 9.5 21h5a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 14.5 3h-5z"/>
              </svg>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </span>{' '}
            content in one place for your{' '}
            <svg className="inline w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>{' '}
            <span className="underline decoration-wavy decoration-indigo-500">brand</span>
          </p>

          <button className="px-8 py-4 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-all shadow-lg hover:shadow-xl">
            Try for free with 5,000
          </button>
        </div>

        <div className="relative">
          <div className="flex gap-4 justify-center overflow-x-auto pb-4 scrollbar-hide">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="shrink-0 w-48 h-96 bg-linear-to-br from-purple-100 to-pink-100 rounded-3xl shadow-xl overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gray-900/10" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
                  Example Content {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
