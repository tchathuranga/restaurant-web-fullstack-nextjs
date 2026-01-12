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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Backdrop with blur and fade-in */}
      <div className="absolute inset-0 bg-white backdrop-blur-sm transition-opacity" />

      {/* Dialog Content with gradient, border, and animation */}
      <div 
        className="relative bg-white border-2 border-orange-200 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10 animate-modalIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white shadow-lg hover:bg-orange-100 border border-orange-200 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
          aria-label="Close dialog"
        >
          <X className="w-6 h-6 text-orange-500" />
        </button>

        {/* Content */}
        <div className="p-4 sm:p-8 flex flex-col items-center">
          {/* Image */}
          <div className="relative w-full aspect-[16/9] mb-6 rounded-xl overflow-hidden border-2 border-orange-100 shadow-md">
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
            className={`text-2xl md:text-3xl lg:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6 drop-shadow-sm text-center  ${lora.className}`}
          >
            {title}
          </h2>

          {/* Description */}
          <div className={`text-gray-700 text-base md:text-lg leading-relaxed text-justify   ${notoSans.className}`}>
            <p className="whitespace-pre-line">{description}</p>
          </div>
          <button
            onClick={onClose}
            className="mt-8 px-6 py-2 rounded-full bg-[#F67A08] text-white font-semibold shadow hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Close
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
        .animate-modalIn {
          animation: modalIn 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default NewsDialog;

