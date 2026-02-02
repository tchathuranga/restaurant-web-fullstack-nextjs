"use client";

import Banner from "@/components/common/Banner";
import WhatsNewSection from "@/components/news-feed/WhatsNewSection";
import { Lora, Noto_Sans } from "next/font/google";
import SlideUpSection from "@/components/common/SlideUpSection";
import { newsItems } from "@/const/news";
import { useEffect, useState } from "react";
import { NewsProps } from "@/interfaces/news";
import { getAllNews } from "@/services/newsService";

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function NewsFeed() {
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [newsData, setNewsData] = useState<NewsProps[]>([]);

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


    return (
        <div>
            <Banner
                singleImage="/images/newsFeedBanner.png"
                content={{
                    title: "News & Updates",
                    subtitle: "Stay updated with the latest news, offers, and events straight from your favorite Indian kitchen.",
                    titleFont: lora,
                    subtitleFont: notoSans,
                    titleFontSize: "font-medium",
                }}
            />
            <SlideUpSection> 
                <WhatsNewSection newsItems={newsData} error={error} loading={loading} />
            </SlideUpSection>
        </div>
    )
}