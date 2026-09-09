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
    <div className="sv-card mb-6 p-4 last:mb-0 md:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 lg:gap-10">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0">
          <div className="relative mx-auto aspect-[4/3] max-w-md overflow-hidden rounded-2xl border border-gold/30 md:mx-0">
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
            className={`sv-heading mb-3 text-xl sm:text-2xl md:mb-4 ${lora.className}`}
          >
            {title}
          </h3>

          {/* Description */}
          <div
            className={`mb-4 line-clamp-3 text-sm leading-relaxed text-ink-muted md:mb-5 md:text-base ${notoSans.className}`}
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {/* See More Link */}
          <div>
            <button
              onClick={handleSeeMore}
              className={`group inline-flex cursor-pointer items-center text-sm font-medium text-saffron transition-colors duration-200 hover:text-saffron-deep md:text-base ${notoSans.className}`}
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

