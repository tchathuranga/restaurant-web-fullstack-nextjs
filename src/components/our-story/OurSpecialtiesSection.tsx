import Image from 'next/image';
import { Noto_Sans, Lora } from 'next/font/google';

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

interface Specialty {
  title: string;
  image: string;
}

const specialties: Specialty[] = [
  {
    title: 'North Indian Dishes',
    image: '/images/news1.png'
  },
  {
    title: 'Sweets',
    image: '/images/news1.png'
  },
  {
    title: 'South Indian Dishes',
    image: '/images/news1.png'
  },
  {
    title: 'Special Sri Vihar Dishes',
    image: '/images/news1.png'
  }
];

const OurSpecialtiesSection = () => {
  return (
    <div className="sv-band mx-auto px-6 py-10 sm:px-10 md:px-20 lg:px-30">
      
      {/* Content */}
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title */}
        <p className="sv-eyebrow text-center">From every region</p>
        <h2 className={`sv-heading pb-6 text-center ${lora.className}`} style={{ fontSize: '34px' }}>
          Our Specialties
        </h2>

        {/* Specialty Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {specialties.map((specialty, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Circular Image */}
              <div className="relative mb-4 h-30 w-30 overflow-hidden rounded-full border-4 border-gold/50 shadow-lg md:mb-6 md:h-35 md:w-35 lg:h-40 lg:w-40">
                <Image
                  src={specialty.image}
                  alt={specialty.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                />
              </div>
              
              {/* Title */}
              <h3 
                className={`sv-heading text-base ${notoSans.className}`}
              >
                {specialty.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSpecialtiesSection;

