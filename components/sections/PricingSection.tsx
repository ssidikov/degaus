import { Badge, SectionHeading, PricingCard } from '@/components/ui'

export default function PricingSection() {
  const plans = [
    {
      name: 'Basic',
      price: '$49.99',
      period: '/ month',
      buttonColor: 'bg-fuchsia-700',
      buttonText: 'Choose plan',
      checkColor: 'pink' as const,
      features: [
        { text: 'Access to all models', enabled: true },
        { text: 'Access to workflow node editor', enabled: true },
        { text: 'Access to video editor', enabled: true },
        { text: '1k image gen & edits (nanobanana)', enabled: true },
        { text: '25 videos of Sora2 Pro HD (10 sec)', enabled: true },
        { text: '20 videos of Sora2 Pro long (25 sec)', enabled: true },
        { text: 'Bulk content creation', enabled: false },
        { text: 'API Access (n8n or custom workflows)', enabled: false },
      ],
    },
    {
      name: 'Pro',
      price: '$149.99',
      period: '/ month',
      buttonColor: 'bg-blue-700',
      buttonText: 'Choose plan',
      checkColor: 'blue' as const,
      popular: true,
      features: [
        { text: 'Access to all models', enabled: true },
        { text: 'Access to workflow node editor', enabled: true },
        { text: 'Access to video editor', enabled: true },
        { text: '3k image gen & edits (nanobanana)', enabled: true },
        { text: '75 videos of Sora2 Pro HD (10 sec)', enabled: true },
        { text: '60 videos of Sora2 Pro long (25 sec)', enabled: true },
        { text: 'Bulk content creation', enabled: true },
        { text: 'API Access (n8n or custom workflows)', enabled: true },
        { text: 'Priority access to new features', enabled: true },
      ],
    },
    {
      name: 'Custom',
      price: 'Talk to a human',
      period: '',
      buttonColor: 'bg-gradient-to-r from-stone-950 to-zinc-900',
      buttonText: 'Talk to a human',
      checkColor: 'blue' as const,
      features: [
        { text: 'Everything in pro', enabled: true },
        { text: 'Unlimited volume', enabled: true },
        { text: 'Custom workflow building', enabled: true },
        { text: 'Custom integrations', enabled: true },
        { text: 'Custom video editing', enabled: true },
      ],
    },
  ]

  return (
    <section id='pricing' className='bg-[#e9e8f5] px-4 sm:px-5 md:px-6 py-12 sm:py-14 md:py-16'>
      <div className='mx-auto max-w-7xl'>
        <Badge>Pricing</Badge>

        <SectionHeading
          title='Start creating more content today'
          subtitle='Choose the plan that makes the most sense for you. Cancel anytime.'
        />

        {/* Pricing Cards */}
        <div className='relative mb-12 sm:mb-14 md:mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-9'>
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>

        {/* Try for free */}
        <div className='flex flex-col items-center gap-6 sm:gap-7 md:gap-9'>
          <p className="max-w-md text-center font-['Darker_Grotesque'] text-xl sm:text-2xl font-bold leading-tight sm:leading-6 tracking-tight sm:tracking-[-0.72px] text-[#8d8d8d] px-4">
            Or try for free with no free-trial, no credit card, no commitments.
          </p>
          <button
            className="rounded-xl sm:rounded-[15px] bg-gradient-to-r from-[#152cd3] to-[#b308a7] px-5 sm:px-6 py-3 sm:py-4 font-['Darker_Grotesque'] text-xl sm:text-2xl md:text-[26px] font-bold leading-tight sm:leading-7 tracking-tight sm:tracking-[-0.52px] text-white transition-transform hover:scale-105"
            style={{
              boxShadow:
                '0px 4px 15px 0px rgba(46,71,249,0.25), inset 0px -4px 4px 0px rgba(0,0,0,0.3), inset 0px 4px 4px 0px rgba(255,255,255,0.35)',
            }}>
            Try for free
          </button>
        </div>
      </div>
    </section>
  )
}
