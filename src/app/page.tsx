"use client";

import React from "react";
import Banner from "@/components/common/Banner";
import NewsField from "@/components/common/NewsField";
import PopularDishes from "@/components/home/PopularDishes";
import OurValues from "@/components/home/OurValues";
import FreqQuestion from "@/components/home/FreqQuestion";
import Promotions from "@/components/home/Promotions";
import { Kalam, Noto_Sans } from "next/font/google";
import SlideUpSection from "@/components/common/SlideUpSection";

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  // Animation variants for sliding effect
  return (
    <div>
      <Banner
        sliderImages={[
          "/images/here-slider/hero-slide1.png",
          "/images/here-slider/hero-slide2.png",
          "/images/here-slider/hero-slide3.png",
        ]}
        content={{
          title: "Authentic Indian Cuisine!",
          subtitle:
            "Experience the rich flavors of traditional South Indian dishes",
          titleFont: kalam,
          subtitleFont: notoSans,
          titleFontSize: "font-bold",
        }}
      />

      <SlideUpSection>
        <NewsField
          image="/images/news1.png"
          title="Grand Opening: Now Serving in Dehiwala!"
          description="We’re excited to announce the grand opening of our newest branch in Dehiwala. Enjoy authentic Indian flavors with a 20% discount for the first week!"
          seeMoreLink="/news/grand-opening"
        />
      </SlideUpSection>

      <SlideUpSection>
        <PopularDishes />
      </SlideUpSection>

      <SlideUpSection>
        <OurValues />
      </SlideUpSection>

      <SlideUpSection>
        <FreqQuestion />
      </SlideUpSection>

      <SlideUpSection>
        <Promotions />
      </SlideUpSection>
    </div>
  );
}
