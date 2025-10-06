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

interface NewsFieldProps {
  image: string;
  title: string;
  description: string;
  seeMoreLink: string;
  imageAlt?: string;
}

const NewsField = ({ 
  image, 
  title, 
  description, 
  seeMoreLink, 
  imageAlt 
}: NewsFieldProps) => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden duration-300 p-4 md:p-8 lg:p-20">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 lg:w-2/5 relative p-2 md:p-4">
        <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-1/2 lg:w-3/5 relative p-2 md:p-4 md:ml-10 mt-4 md:mt-0 lg:mt-15">
        <div>
          {/* Title */}
          <h3 
            className={`text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 md:mb-3 line-clamp-2 ${lora.className}`}
          >
            {title}
          </h3>

          {/* Description */}
          <p 
            className={`text-gray-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4 line-clamp-3 ${notoSans.className}`}
          >
            {description}
          </p>
        </div>

        {/* See More Link */}
        <div className="mt-auto">
          <a
            href={seeMoreLink}
            className={`inline-flex items-center text-[#F67A08] hover:text-[#E5690A] font-medium text-sm md:text-base transition-colors duration-200 group ${notoSans.className}`}
          >
            See More
            <svg 
              className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsField;
