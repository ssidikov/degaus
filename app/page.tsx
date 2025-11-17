import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import UseCasesSection from '@/components/sections/UseCasesSection'
import TrustBadges from '@/components/sections/TrustBadges'
import FeaturesSection from '@/components/sections/FeaturesSection'
import ProductFeaturesSection from '@/components/sections/ProductFeaturesSection'
import PricingSection from '@/components/sections/PricingSection'
import CTASection from '@/components/sections/CTASection'
import FAQSection from '@/components/sections/FAQSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <UseCasesSection />
        <TrustBadges />
        <FeaturesSection />
        <ProductFeaturesSection />
        <PricingSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
