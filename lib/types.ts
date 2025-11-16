export interface NavLink {
  label: string;
  href: string;
}

export interface TrustBadge {
  name: string;
  logo: string;
}

export interface Stat {
  value: string;
  title: string;
  description: string;
  bgColor: string;
  icons?: readonly string[];
}

export interface Feature {
  icon: string;
  text: string;
}

export interface ProductFeature {
  id: string;
  title: string;
  subtitle: string;
  features: readonly string[];
  image: string;
  bgColor: string;
  isDark?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number | null;
  period?: string;
  customPricing?: string;
  mostPopular?: boolean;
  features: readonly string[];
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'dark';
}

export interface FAQItem {
  question: string;
  answer: string;
}
