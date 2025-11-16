// Trust Badges - Partner Logos
export const TRUST_BADGES = [
  { name: 'WVRST', logo: '/logos/wvrst.svg' },
  { name: 'Voodoo', logo: '/logos/voodoo.svg' },
  { name: 'mojo', logo: '/logos/mojo.svg' },
  { name: 'ROULETTE', logo: '/logos/roulette.svg' },
  { name: 'Embark', logo: '/logos/embark.svg' },
  { name: 'FREETLI', logo: '/logos/freetli.svg' },
  { name: 'WIRINGS', logo: '/logos/wirings.svg' },
] as const;

// Stats Cards
export const STATS = [
  {
    value: '5x+',
    title: 'Post more on social media',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    bgColor: 'bg-cyan-100',
    icons: ['facebook', 'tiktok', 'youtube'],
  },
  {
    value: '4.2x',
    title: 'AI Ads that actually convert',
    description: 'Generate winning ads in minutes. Start from real ads or build from scratch. Add your brand.',
    bgColor: 'bg-indigo-500',
  },
  {
    value: '+250%',
    title: 'Go viral by testing 100+ hooks',
    description: 'Multiple concepts to accelerate your output. A/B test hundreds of hooks.',
    bgColor: 'bg-purple-200',
  },
] as const;

// End-to-End Ads Features
export const END_TO_END_FEATURES = [
  { icon: '✓', text: '100s of ad ideas' },
  { icon: '✓', text: 'AI Ads to launch' },
  { icon: '✓', text: 'Share with' },
  { icon: '✓', text: 'Better CTR' },
  { icon: '✓', text: 'Platform ready' },
] as const;

// Organic Content Features
export const ORGANIC_CONTENT_FEATURES = [
  { icon: '✓', text: 'AI UGC videos' },
  { icon: '✓', text: 'Improved funnel' },
  { icon: '✓', text: 'AI Hooks' },
  { icon: '✓', text: 'Analytics' },
] as const;

// Product Features
export const PRODUCT_FEATURES = [
  {
    id: 'ugcs',
    title: '#1 realistic AI UGCs',
    subtitle: 'Create the most realistic AI UGCs',
    features: [
      'Infinity AI',
      'Vetted Ads',
      'Real actors',
      'Excellent deliveries',
    ],
    image: '/features/ugcs.png',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'b-rolls',
    title: 'High quality B-Rolls',
    subtitle: 'Integrate with your framework',
    features: [
      'Vercel AI',
      'Post hook',
      'Trending sounds',
      'AI voices',
    ],
    image: '/features/b-rolls.png',
    bgColor: 'bg-white',
  },
  {
    id: 'automate',
    title: 'Automate your content',
    subtitle: 'Bulk exports that actually work',
    features: [
      'API endpoints',
      'AI Auto creates best output',
      'Platform publishing',
      'Fine-tune your workflow',
    ],
    image: '/features/automate.png',
    bgColor: 'bg-gray-900',
    isDark: true,
  },
  {
    id: 'video-editor',
    title: 'Built-in video editor',
    subtitle: 'All the tools you need in one place',
    features: [
      'AI Ads',
      'Auto-cut with subtitles',
      'AI B-Rolls for blogs',
      'Transitions & effects',
    ],
    image: '/features/video-editor.png',
    bgColor: 'bg-gray-900',
    isDark: true,
  },
] as const;

// Pricing Plans
export const PRICING_PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    price: 49.99,
    period: 'month',
    features: [
      'Access to all models',
      '100 AI UGC videos',
      'Access to workflow tools editor',
      '10 videos exports per month',
      '1 team member',
      'All native of React Trg HD CRM',
      '2 hours of React Trg SD video',
      'Built-in content',
      '2GB storage included',
    ],
    buttonText: 'Choose plan',
    buttonVariant: 'primary' as const,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 149.99,
    period: 'month',
    mostPopular: true,
    features: [
      'Access to all models',
      'Unlimited AI UGC videos',
      'Access to workflow tools editor',
      'Unlimited videos exports',
      '5 team members',
      'All native of React Trg HD (30 min)',
      '10 hours of React Trg SD video',
      'Built-in content',
      'API access (10,000 requests/month)',
      'Priority support',
      'Advanced analytics dashboard',
    ],
    buttonText: 'Choose plan',
    buttonVariant: 'secondary' as const,
  },
  {
    id: 'custom',
    name: 'Custom',
    price: null,
    customPricing: 'Talk to human',
    features: [
      'Unlimited videos',
      'Dedicated human in editing',
      'Unlimited storage',
      'Custom video styles',
      'Advanced AI models',
      'Custom video colors',
    ],
    buttonText: 'Talk to human',
    buttonVariant: 'dark' as const,
  },
] as const;

// FAQ Items
export const FAQ_ITEMS = [
  {
    question: 'Can I post the content on any other AI tools / Midjo?',
    answer: 'Yes, you can use the content generated on any platform you wish.',
  },
  {
    question: 'Is the quality of videos good?',
    answer: 'Our AI generates high-quality videos optimized for social media platforms.',
  },
  {
    question: 'Can you generate static posts as well?',
    answer: 'Yes, we support both video and static image generation.',
  },
  {
    question: 'How long does it take to generate?',
    answer: 'Most content is generated within 2-5 minutes.',
  },
  {
    question: "Does it work in other languages of cultures?",
    answer: 'Yes, we support multiple languages and cultural contexts.',
  },
  {
    question: 'What is the maximum video length?',
    answer: 'Video length varies by plan, up to 3 minutes for premium plans.',
  },
  {
    question: 'Are characters consistent?',
    answer: 'Yes, our AI maintains character consistency across videos.',
  },
  {
    question: 'How do I integrate with my workflows?',
    answer: 'We provide API access and integrations with popular tools.',
  },
  {
    question: 'How can I run FB Influencers or Random accounts on autopilot?',
    answer: 'Use our automation features and API to schedule and post content automatically.',
  },
  {
    question: 'How can I become an affiliate?',
    answer: 'Contact our team to join our affiliate program.',
  },
] as const;
