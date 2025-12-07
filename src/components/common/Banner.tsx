"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { NextFont } from 'next/dist/compiled/@next/font';

interface BannerButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface BannerContent {
  title?: string;
  subtitle?: string;
  buttons?: BannerButton[];
  titleFont?: NextFont;
  subtitleFont?: NextFont;
  titleFontSize?: string;
  subtitleFontSize?: string;
}

interface BannerProps {
  content?: BannerContent;
  singleImage?: string;
  sliderImages?: string[];
}

const Banner = ({ content, singleImage, sliderImages }: BannerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Determine which images to use
  const slides = singleImage 
    ? [singleImage] 
    : sliderImages || [];

  const isSlider = slides.length > 1;

  // Auto-play functionality (only for sliders)
  useEffect(() => {
    if (!isSlider) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length, isSlider]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <div className="relative w-full max-h-[95vh] sm:max-h-[80vh] overflow-hidden">
      {/* Slider Images */}
      <div className="relative w-full h-auto">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            } ${index !== currentSlide ? 'absolute inset-0' : ''}`}
          >
            <Image
              src={slide}
              alt={`Sri Vihar Restaurant Slide ${index + 1}`}
              width={1920}
              height={1080}
              priority={index === 0}
              className="  object-cover sm:object-contain max-h-[95vh] sm:max-h-[80vh] min-h-[60vh] sm:min-h-auto"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Only show for sliders */}
      {isSlider && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-20"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-20"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Slide Indicators - Only show for sliders */}
      {isSlider && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Content Overlay - Only show if content is provided */}
      {content && (
        <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
          <div className="text-center text-white max-w-4xl w-full">
            {/* Title */}
            {content.title && (
              <h1 
                className={`mb-4 lg:mb-6 ${content.titleFontSize} ${content.titleFont?.className} bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]`}
                style={{ 
                  fontSize: 'clamp(32px, 6vw, 54px)',
                  lineHeight: '1.15',
                  letterSpacing: '1px',
                  textShadow: '0 2px 12px rgba(0,0,0,0.18), 0 1px 0 #fff'
                }}
              >
                {content.title}
              </h1>
            )}

            {/* Subtitle */}
            {content.subtitle && (
              <p 
                className={`mb-6 lg:mb-8 opacity-95 ${content.subtitleFont?.className} px-4 py-2 rounded-xl inline-block bg-white/20 backdrop-blur-sm shadow-md text-shadow-lg`}
                style={{ 
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  lineHeight: '1.4',
                  color: '#fff',
                  textShadow: '0 2px 8px rgba(0,0,0,0.18)'
                }}
              >
                {content.subtitle}
              </p>
            )}
            
            {/* Buttons */}
            {content.buttons && content.buttons.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                {content.buttons.map((button, index) => (
                  <a
                    key={index}
                    href={button.href}
                    className={`px-6 py-3 rounded-md text-sm sm:text-base font-semibold transition-colors text-center w-full sm:w-auto ${
                      button.variant === 'primary'
                        ? 'bg-[#F67A08] text-white hover:bg-[#E5690A]'
                        : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900'
                    }`}
                  >
                    {button.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
