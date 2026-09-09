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
        className="sv-card animate-modalIn relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 rounded-full border border-gold/40 bg-ivory p-2 shadow-lg transition-colors hover:bg-cream"
          aria-label="Close dialog"
        >
          <X className="h-6 w-6 text-saffron" />
        </button>

        {/* Content */}
        <div className="p-4 sm:p-8 flex flex-col items-center">
          {/* Image */}
          <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-gold/30 shadow-md">
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
            className={`sv-heading mb-4 text-center text-2xl md:mb-6 md:text-3xl ${lora.className}`}
          >
            {title}
          </h2>

          <div 
              className={`text-justify text-base leading-relaxed text-ink-muted md:text-lg ${notoSans.className}`}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          <button
            onClick={onClose}
            className="sv-btn mt-8"
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

