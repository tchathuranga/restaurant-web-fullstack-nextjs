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
    <div className="lg:px-30 md:px-20 sm:px-10 px-10 py-10 mx-auto" style={{ backgroundColor: '#F4BD50' }}>
      
      {/* Content */}
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title */}
        <h2 className={` font-bold text-gray-900 text-center pb-6 ${lora.className}`} style={{ fontSize: '34px' }}>
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
              <div className="relative w-30 h-30 md:w-35 md:h-35 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-lg mb-4 md:mb-6 border-4 border-white">
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
                className={`text-base md:text-md lg:text-md font-semibold text-gray-900 ${notoSans.className}`}
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

