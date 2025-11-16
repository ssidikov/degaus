import { TRUST_BADGES } from '@/lib/constants';

export default function TrustBadges() {
  return (
    <section className="py-12 border-y border-gray-100 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-8">Trusted by</p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.name}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              {/* Placeholder for actual logos */}
              <div className="h-8 w-24 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-700">
                  {badge.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
