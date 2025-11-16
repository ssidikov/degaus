export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Start creating more content today
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Join thousands of creators using AI to scale their content
        </p>
        <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
          Try for free
        </button>
      </div>
    </section>
  );
}
