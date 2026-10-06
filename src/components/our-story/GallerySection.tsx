import Image from 'next/image';
import React from 'react';
import { Noto_Sans, Lora } from 'next/font/google';
import { GalleryImage, IGallery } from '@/interfaces/gallery';

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

interface GallerySectionProps {
  galleryImages: IGallery[];
}

const GallerySection = ({ galleryImages }: GallerySectionProps) => {
  const [showAll, setShowAll] = React.useState(false);
  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 3);

  return (
    <div className="mx-auto px-6 py-12 sm:px-10 md:px-20 lg:px-30">
      <div className="container mx-auto max-w-7xl">
        <p className="sv-eyebrow text-center">A glimpse of Sri Vihar</p>
        <h2 
          className={`sv-heading mb-8 text-center text-3xl md:mb-12 md:text-4xl lg:text-5xl ${lora.className}`}
        >
          Gallery
        </h2>

        <div className="mb-8 grid grid-cols-1 gap-6 md:mb-12 md:grid-cols-3 md:gap-8">
          {displayedImages.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold/30 shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <Image
                src={image.image}
                alt={image.image}
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
            onClick={() => setShowAll(!showAll)}
            className={`sv-btn-outline ${notoSans.className}`}
          >
            {showAll ? 'Show Less' : 'View Full Gallery'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;

