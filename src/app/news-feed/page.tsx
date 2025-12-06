"use client";

import Banner from "@/components/common/Banner";
import WhatsNewSection from "@/components/news-feed/WhatsNewSection";
import { Lora, Noto_Sans } from "next/font/google";
import SlideUpSection from "@/components/common/SlideUpSection";

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function NewsFeed() {
    // Sample news items - replace with actual data from API or CMS
    const newsItems = [
        {
            image: "/images/news1.png",
            title: "Grand Opening: Now Serving in Dehiwala!",
            description: "We're excited to announce the grand opening of our newest branch in Dehiwala. Enjoy authentic Indian flavors with a 20% discount for the first week!",
            seeMoreLink: "/news/grand-opening-dehiwala",
            imageAlt: "Chef serving Indian food"
        },
        {
            image: "/images/news1.png",
            title: "Grand Opening: Now Serving in Dehiwala!",
            description: "We're excited to announce the grand opening of our newest branch in Dehiwala. Enjoy authentic Indian flavors with a 20% discount for the first week!",
            seeMoreLink: "/news/grand-opening-dehiwala",
            imageAlt: "Chef serving Indian food"
        },
        {
            image: "/images/news1.png",
            title: "Grand Opening: Now Serving in Dehiwala!",
            description: "We're excited to announce the grand opening of our newest branch in Dehiwala. Enjoy authentic Indian flavors with a 20% discount for the first week!",
            seeMoreLink: "/news/grand-opening-dehiwala",
            imageAlt: "Chef serving Indian food"
        }
    ];

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
                <WhatsNewSection newsItems={newsItems} />
            </SlideUpSection>
        </div>
    )
}