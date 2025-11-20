import Image from 'next/image'

interface StatsCardProps {
  imageSrc: string
  imageAlt: string
  backgroundColor: string
  title: string
  description: string
}

export default function StatsCard({
  imageSrc,
  imageAlt,
  backgroundColor,
  title,
  description,
}: StatsCardProps) {
  return (
    <div className='relative rounded-[40px] bg-linear-to-b from-white to-gray-50 border-[7px] border-white shadow-lg overflow-hidden'>
      <div className='flex flex-col items-center h-full'>
        {/* Top Image Section */}
        <div
          className='relative w-full h-[203px] bg-cyan-200 overflow-hidden -mx-6'
          style={{ backgroundColor }}>
          <Image src={imageSrc} alt={imageAlt} fill className='object-cover' quality={100} />
        </div>

        {/* Content */}
        <div className='flex flex-col gap-6 pt-6 pb-10 px-4'>
          <h3 className="font-['Darker_Grotesque'] text-[28px] font-bold text-gray-800 leading-6 tracking-[-0.84px]">
            {title}
          </h3>
          <p className="font-['Darker_Grotesque'] text-xl font-semibold text-gray-500 leading-5 tracking-[-0.6px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
