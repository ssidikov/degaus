import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ErrorBoundary from '@/components/ErrorBoundary'
import CookieConsent from '@/components/CookieConsent'
import HeroSection from '@/components/sections/HeroSection'
import UseCasesSection from '@/components/sections/UseCasesSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import PricingSection from '@/components/sections/PricingSection'
import FAQSection from '@/components/sections/FAQSection'
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateSoftwareApplicationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/schema'

export default function Home() {
  const organizationSchema = generateOrganizationSchema()
  const webSiteSchema = generateWebSiteSchema()
  const softwareSchema = generateSoftwareApplicationSchema()
  const breadcrumbSchema = generateBreadcrumbSchema()
  const faqSchema = generateFAQSchema()

  return (
    <ErrorBoundary>
      {/* Schema Markup */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />
      <main>
        <HeroSection />
        <UseCasesSection />
        <FeaturesSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
      <CookieConsent />
    </ErrorBoundary>
  )
}
