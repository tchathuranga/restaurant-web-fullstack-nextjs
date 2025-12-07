"use client";

import Banner from "@/components/common/Banner";
import WeAreSection from "@/components/our-story/WeAreSection";
import OurSpecialtiesSection from "@/components/our-story/OurSpecialtiesSection";
import OurLocationsSection from "@/components/our-story/OurLocationsSection";
import GallerySection from "@/components/our-story/GallerySection";
import { Lora, Noto_Sans } from "next/font/google";
import SlideUpSection from "@/components/common/SlideUpSection";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function OurStory() {
  return (
    <div>
      <Banner
        singleImage="/images/ourStoryBanner.png"
        content={{
          title: "Our Story...",
          subtitle: "Welcome to Sri Vihar Indian Restaurant.",
          titleFont: lora,
          subtitleFont: notoSans,
          titleFontSize: "font-medium",
        }}
      />
      <SlideUpSection>
        <WeAreSection />
      </SlideUpSection>

      {/* <SlideUpSection>
        <OurSpecialtiesSection />
      </SlideUpSection> */}

      <SlideUpSection>
        <OurLocationsSection />
      </SlideUpSection>
      
      <SlideUpSection>
        <GallerySection />
      </SlideUpSection>
    </div>
  );
}
