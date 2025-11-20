import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ErrorBoundary from '@/components/ErrorBoundary'
import HeroSection from '@/components/sections/HeroSection'
import UseCasesSection from '@/components/sections/UseCasesSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import PricingSection from '@/components/sections/PricingSection'
import FAQSection from '@/components/sections/FAQSection'

export default function Home() {
  return (
    <ErrorBoundary>
      <Header />
      <main>
        <HeroSection />
        <UseCasesSection />
        <FeaturesSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </ErrorBoundary>
  )
}
