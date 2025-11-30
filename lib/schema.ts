import { FAQ_ITEMS } from './faq'

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'degaus',
    url: 'https://degaus.com',
    logo: 'https://degaus.com/logo.svg',
    description:
      'Create winning AI content in minutes. Build AI influencers, automate content with high-quality B-rolls.',
    sameAs: [
      'https://twitter.com/degaus',
      'https://instagram.com/degaus',
      'https://tiktok.com/@degaus',
    ],
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'degaus',
    url: 'https://degaus.com',
    description:
      'Create winning AI content in minutes. Build AI influencers, automate content with high-quality B-rolls.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://degaus.com/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'degaus',
    applicationCategory: 'MultimediaApplication',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '49.99',
      highPrice: '149.99',
      offerCount: '2',
    },
    description:
      'AI-powered content creation platform for generating viral videos, AI influencers, and automated content.',
    operatingSystem: 'Web',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
  }
}

export function generateBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://degaus.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Features',
        item: 'https://degaus.com#features',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Pricing',
        item: 'https://degaus.com#pricing',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'FAQ',
        item: 'https://degaus.com#faq',
      },
    ],
  }
}

export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
