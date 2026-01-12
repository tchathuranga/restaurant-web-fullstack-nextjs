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
import { newsItems } from "@/const/news";

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// const PromotionsImage = "/images/promotion-bg-image.png";
const PromotionsImage = "";

export default function Home() {
  return (
    <div>
      <Banner
        sliderImages={[
          "/images/here-slider/hero-1.png",
          "/images/here-slider/hero-2.png",
          "/images/here-slider/hero-3.png",
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
        {newsItems.length > 0 && (
        <NewsField
          key={0}
          image={newsItems[0].image}
          title={newsItems[0].title}
          description={newsItems[0].description}
        />
        )}
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

      {PromotionsImage && (
        <SlideUpSection>
          <Promotions image={PromotionsImage} />
        </SlideUpSection>
      )}

    </div>
  );
}
