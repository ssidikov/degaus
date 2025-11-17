const CheckIcon = () => (
  <svg className='size-3 text-white' fill='none' viewBox='0 0 10 10'>
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M2 5l2 2 4-4'
    />
  </svg>
)

export default function PricingSection() {
  const plans = [
    {
      name: 'Basic',
      price: '$49.99',
      period: '/ month',
      buttonColor: 'bg-[#a01c96]',
      buttonText: 'Choose plan',
      checkColor: 'bg-gradient-to-br from-purple-400 to-pink-400',
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
      buttonColor: 'bg-[#152cd3]',
      buttonText: 'Choose plan',
      checkColor: 'bg-gradient-to-br from-blue-400 to-blue-500',
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
      buttonColor: 'bg-linear-to-r from-[#101011] to-[#18181a]',
      buttonText: 'Talk to a human',
      checkColor: 'bg-gradient-to-br from-gray-400 to-gray-500',
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
    <section id='pricing' className='bg-[#e9e8f5] px-6 py-16'>
      <div className='mx-auto max-w-7xl'>
        {/* Badge */}
        <div className='mb-8 flex justify-center'>
          <div className='rounded-[20px] bg-white px-6 py-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]'>
            <p className="font-['Darker_Grotesque'] text-2xl font-semibold leading-4 tracking-[-0.72px] text-[#7e7e7e]">
              Pricing
            </p>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mb-6 text-center text-5xl font-bold leading-7 tracking-[-1.5px] text-[#323232]">
          Start creating more content today
        </h2>

        {/* Subheading */}
        <p className="mx-auto mb-14 max-w-md text-center font-['Darker_Grotesque'] text-2xl font-bold leading-6 tracking-[-0.72px] text-[#8d8d8d]">
          Choose the plan that makes the most sense for you. Cancel anytime.
        </p>

        {/* Pricing Cards */}
        <div className='relative mb-16 grid grid-cols-1 gap-9 lg:grid-cols-3'>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className='relative h-[620px] rounded-[20px] border-[5px] border-white bg-[#f3f3f9]'>
              {plan.popular && (
                <div className='absolute left-1/2 -top-14 -translate-x-1/2 rounded-[20px] bg-[rgba(0,31,254,0.1)] px-3 py-3 shadow-[0px_4px_10px_0px_rgba(50,84,255,0.25)]'>
                  <div className='flex items-center gap-1.5'>
                    <span className='text-lg'>🏆</span>
                    <p className="font-['Darker_Grotesque'] text-xl font-bold leading-7 tracking-[-0.4px] text-[#3254ff]">
                      Most popular
                    </p>
                  </div>
                </div>
              )}

              <div className='flex h-full flex-col px-11 pt-11'>
                {/* Plan Name */}
                <h3 className="mb-7 font-['Darker_Grotesque'] text-[34px] font-bold leading-7 tracking-[-1.02px] text-[#323232]">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-7 font-['Darker_Grotesque'] font-bold text-[#323232]">
                  {plan.price.startsWith('$') ? (
                    <p className='leading-7'>
                      <span className='text-[34px]'>{plan.price}</span>
                      <span className='text-2xl tracking-[-0.72px]'>{plan.period}</span>
                    </p>
                  ) : (
                    <span className='text-2xl leading-7 tracking-[-0.72px]'>{plan.price}</span>
                  )}
                </div>

                {/* Features */}
                <ul className='mb-8 flex-1 space-y-3 py-3'>
                  {plan.features.map((feature, i) => (
                    <li key={i} className='flex items-center gap-3'>
                      <div
                        className={`flex size-7 shrink-0 items-center justify-center rounded-full ${plan.checkColor}`}>
                        <CheckIcon />
                      </div>
                      <span
                        className={`font-['Darker_Grotesque'] text-xl font-semibold leading-7 tracking-[-0.6px] text-[#8d8d8d] ${
                          !feature.enabled ? 'line-through' : ''
                        }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className={`${plan.buttonColor} mb-10 w-full rounded-[15px] px-6 py-4 font-['Darker_Grotesque'] text-[26px] font-bold leading-7 tracking-[-0.52px] text-white shadow-[0px_4px_15px_0px_rgba(16,16,17,0.25)] transition-transform hover:scale-105`}
                  style={{
                    boxShadow:
                      '0px 4px 15px 0px rgba(16,16,17,0.25), inset 0px -4px 4px 0px rgba(0,0,0,0.3), inset 0px 4px 4px 0px rgba(255,255,255,0.35)',
                  }}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Try for free */}
        <div className='flex flex-col items-center gap-9'>
          <p className="max-w-md text-center font-['Darker_Grotesque'] text-2xl font-bold leading-6 tracking-[-0.72px] text-[#8d8d8d]">
            Or try for free with no free-trial, no credit card, no commitments.
          </p>
          <button
            className="rounded-[15px] bg-linear-to-r from-[#152cd3] to-[#b308a7] px-6 py-4 font-['Darker_Grotesque'] text-[26px] font-bold leading-7 tracking-[-0.52px] text-white shadow-[0px_4px_15px_0px_rgba(46,71,249,0.25)] transition-transform hover:scale-105"
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
