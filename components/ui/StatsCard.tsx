import Image from 'next/image'

interface StatsCardProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
}

export default function StatsCard({ imageSrc, imageAlt, title, description }: StatsCardProps) {
  return (
    <div className='relative rounded-[40px] shadow-[0_4px_4px_rgba(0,0,0,0.10)] overflow-hidden p-2 bg-gradient-to-b from-[#FFFFFF] to-[#F3F3F9] flex flex-col gap-2'>
      {/* Top Image Section */}
      <div className='relative w-full h-[203px] overflow-hidden bg-gray-100 rounded-t-[32px] rounded-tr-[32px]'>
        <Image src={imageSrc} alt={imageAlt} fill className='object-cover' quality={100} />
      </div>

      {/* Content */}
      <div className='flex flex-col gap-6 pt-6 pb-10 px-4 rounded-[32px]'>
        <h3 className="font-['Darker_Grotesque'] text-[28px] font-bold leading-6 tracking-[-0.84px] text-[#323232]">
          {title}
        </h3>
        <p className="font-['Darker_Grotesque'] text-xl font-semibold leading-5 tracking-[-0.6px] text-[#8d8d8d]">
          {description}
        </p>
      </div>
    </div>
  )
}
