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

const GallerySection = () => {
  const galleryImages = [
    {
      src: '/images/news1.png',
      alt: 'Indian food platter with rice and curry'
    },
    {
      src: '/images/news1.png',
      alt: 'Grilled paneer tikka skewers'
    },
    {
      src: '/images/news1.png',
      alt: 'Traditional thali with multiple dishes'
    }
  ];

  return (
    <div className="lg:px-30 md:px-20 sm:px-10 px-10 py-12 mx-auto">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <h2 
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12 text-center ${lora.className}`}
        >
          Gallery
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="text-center">
          <button
            className={`inline-flex items-center justify-center px-8 py-3 border-2 border-[#F67A08] bg-white text-[#F67A08] rounded-lg font-semibold hover:bg-[#F67A08] hover:text-white transition-colors duration-200 ${notoSans.className}`}
          >
            View Full Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;

