'use client';

import Image from 'next/image';
import { Noto_Sans, Lora } from 'next/font/google';
import { useState } from 'react';
import NewsDialog from './NewsDialog';

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

interface NewsItemProps {
  image: string;
  title: string;
  description: string;
  imageAlt?: string;
}

const NewsItem = ({ 
  image, 
  title, 
  description, 
  imageAlt 
}: NewsItemProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSeeMore = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 md:p-6 lg:p-8 mb-6 last:mb-0">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 lg:gap-10">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0">
          <div className="relative aspect-[4/3] max-w-md mx-auto md:mx-0 rounded-lg overflow-hidden">
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
        <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col py-10 justify-center md:justify-start">
          {/* Title */}
          <h3
            className={`text-xl sm:text-2xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 ${lora.className}`}
          >
            {title}
          </h3>

          {/* Description */}
          <div
            className={`text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-5 line-clamp-3 ${notoSans.className}`}
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {/* See More Link */}
          <div>
            <button
              onClick={handleSeeMore}
              className={`inline-flex items-center text-[#F67A08] hover:text-[#E5690A] font-medium text-sm md:text-base transition-colors duration-200 group cursor-pointer ${notoSans.className}`}
            >
              see more...
              <svg
                className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <NewsDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        image={image}
        title={title}
        description={description}
        imageAlt={imageAlt}
      />
    </div>
  );
};

export default NewsItem;

