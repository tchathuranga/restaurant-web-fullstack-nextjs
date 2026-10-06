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
    <div className="relative w-full max-h-[95vh] overflow-hidden sm:max-h-[80vh]">
      {/* <div className="pointer-events-none absolute inset-x-8 top-4 z-20 hidden h-8 opacity-50 sm:block" style={{
        backgroundImage: "radial-gradient(circle, #E8C36A 1.3px, transparent 1.7px)",
        backgroundSize: "12px 10px",
      }} /> */}
      <div className="relative h-auto w-full">
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
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-maroon/70 p-2.5 text-ivory transition-all hover:bg-saffron"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-maroon/70 p-2.5 text-ivory transition-all hover:bg-saffron"
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
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                index === currentSlide ? 'bg-gold-soft scale-125' : 'bg-ivory/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Content Overlay - Only show if content is provided */}
      {content && (
        <div className="banner-vignette absolute inset-0 z-10 flex items-center justify-center px-4">
          <div className="w-full max-w-4xl text-center text-ivory">
            {content.title && (
              <h1
                className={`mb-4 font-display lg:mb-6 ${content.titleFontSize} ${content.titleFont?.className}`}
                style={{
                  fontSize: "clamp(34px, 6vw, 58px)",
                  lineHeight: "1.15",
                  letterSpacing: "1px",
                  color: "#F8EDE3",
                  textShadow: "0 3px 18px rgba(44,24,16,0.45)",
                }}
              >
                {content.title}
              </h1>
            )}

            {content.subtitle && (
              <p
                className={`mb-6 inline-block rounded-full border border-gold/40 bg-maroon/35 px-5 py-2.5 backdrop-blur-sm lg:mb-8 ${content.subtitleFont?.className}`}
                style={{
                  fontSize: "clamp(16px, 2.6vw, 22px)",
                  lineHeight: "1.45",
                  color: "#FFF8F0",
                }}
              >
                {content.subtitle}
              </p>
            )}

            {content.buttons && content.buttons.length > 0 && (
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                {content.buttons.map((button, index) => (
                  <a
                    key={index}
                    href={button.href}
                    className={`w-full text-center text-sm font-semibold sm:w-auto sm:text-base ${
                      button.variant === "primary" ? "sv-btn" : "sv-btn-outline border-ivory text-ivory"
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
