import Image from 'next/image';
import { Lora, Noto_Sans } from 'next/font/google';

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

interface ItemCardProps {
  image: string;
  title: string;
  description: string;
  price?: string;
  imageAlt?: string;
}

const ItemCardContainer = ({ 
  image, 
  title, 
  description, 
  price, 
  imageAlt 
}: ItemCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto">
      {/* Image Section - Top */}

      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content Section - Bottom */}
      <div className="p-8">
        {/* Title */}
        <h3 
          className={`text-lg font-semibold text-gray-900 mb-2 line-clamp-2 text-left ${lora.className}`}
        >
          {title}
        </h3>

        {/* Description */}
        <p 
          className={`text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3 text-left ${notoSans.className}`}
        >
          {description}
        </p>

        {/* Price (if provided) */}
        {price && (
          <div className="flex justify-between items-center">
            <span 
              className={`text-[#F67A08] font-semibold text-lg ${notoSans.className}`}
            >
              {price}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCardContainer;