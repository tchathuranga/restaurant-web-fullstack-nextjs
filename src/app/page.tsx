"use client";

import React, { useEffect, useState } from "react";
import Banner from "@/components/common/Banner";
import NewsField from "@/components/common/NewsField";
import PopularDishes from "@/components/home/PopularDishes";
import OurValues from "@/components/home/OurValues";
import FreqQuestion from "@/components/home/FreqQuestion";
import Promotions from "@/components/home/Promotions";
import { Kalam, Noto_Sans } from "next/font/google";
import SlideUpSection from "@/components/common/SlideUpSection";
import { getAllNews } from "@/services/newsService";
import { NewsProps } from "@/interfaces/news";
import { getAllPromotions } from "@/services/promotionServices";
import { PromotionProps } from "@/interfaces/promotions";

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [newsData, setNewsData] = useState<NewsProps[]>([]);
  const [promotionError, setPromotionError] = useState<string>("");
  const [promotionsLoading, setPromotionsLoading] = useState<boolean>(true);
  const [promotionImage, setPromotionImage] = useState<PromotionProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const result = await getAllNews();
        if (result.success) {
          setNewsData(result.data || []);
        } else {
          setError(result.error || "Failed to fetch News");
          setLoading(false);
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch News");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

   useEffect(() => {
      const fetchImages = async () => {
        setPromotionsLoading(true);
        setPromotionError("");
        const response = await getAllPromotions();
        console.log("Gallery fetch response:", response);
        if (response.success && response.data) {
          setPromotionImage(response.data);
        } else {
          setError(response.error || "Failed to load gallery items");
        }
        setPromotionsLoading(false);
      };
  
      fetchImages();
    }, []);
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
        {error && (<div></div>)}
        {loading && (<div></div>)}
        {newsData.length > 0 && (
        <NewsField
          key={0}
          image={newsData[0].image}
          title={newsData[0].title}
          description={newsData[0].description}
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

      {promotionImage.map((i, index) => (
        <SlideUpSection key={index}>
          <Promotions image={i.image} />
        </SlideUpSection>
      ))}

    </div>
  );
}
