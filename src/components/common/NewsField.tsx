"use client";

import Image from 'next/image';
import NewsDialog from '../news-feed/NewsDialog';
import { useState } from 'react';
import { PaisleyCorner } from './IndianMotifs';

interface NewsFieldProps {
  image: string;
  title: string;
  description: string;
  imageAlt?: string;
}

const NewsField = ({ image, title, description, imageAlt }: NewsFieldProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleSeeMore = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="px-6 pt-8 sm:px-6 sm:pt-12 md:px-12 md:pt-16 lg:px-24 lg:pt-20">
      <div className="sv-card relative overflow-hidden p-4 md:p-6">
        <PaisleyCorner className="absolute right-4 top-4 hidden h-10 w-10 rotate-90 text-gold/50 md:block" />
        <div className="flex flex-col gap-4 overflow-hidden md:flex-row md:gap-8">
          <div className="relative w-full p-1 md:w-1/2 lg:w-2/5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold/30">
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
            </div>
          </div>

          <div className="mt-2 flex w-full flex-col justify-center p-1 md:mt-0 md:w-1/2 lg:w-3/5">
            <p className="sv-eyebrow mb-2">Latest from Sri Vihar</p>
            <h3 className="sv-heading mb-3 line-clamp-2 text-2xl md:text-3xl">
              {title}
            </h3>
            <div
              className="mb-5 line-clamp-3 text-sm leading-relaxed text-ink-muted md:text-base"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <button
              type="button"
              className="group inline-flex items-center font-medium text-saffron transition-colors hover:text-saffron-deep"
              onClick={handleSeeMore}
            >
              See More
              <svg
                className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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

export default NewsField;
