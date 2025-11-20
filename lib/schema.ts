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
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can I post the content on any other AI tools / Midjo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can use the content generated on any platform you wish.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the quality of videos good?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our AI generates high-quality videos optimized for social media platforms.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you generate static posts as well?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we support both video and static image content generation.',
        },
      },
    ],
  }
}
