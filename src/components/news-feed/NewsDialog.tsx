'use client';

import Image from 'next/image';
import { Noto_Sans, Lora } from 'next/font/google';
import { X } from 'lucide-react';
import { useEffect } from 'react';

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

interface NewsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
  imageAlt?: string;
}

const NewsDialog = ({ 
  isOpen, 
  onClose, 
  image, 
  title, 
  description, 
  imageAlt 
}: NewsDialogProps) => {
  // Close on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" />
      
      {/* Dialog Content */}
      <div 
        className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Image */}
          <div className="relative w-full aspect-[16/9] mb-6 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          {/* Title */}
          <h2 
            className={`text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 ${lora.className}`}
          >
            {title}
          </h2>

          {/* Description */}
          <div className={`text-gray-700 text-base md:text-lg leading-relaxed ${notoSans.className}`}>
            <p className="whitespace-pre-line">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDialog;

