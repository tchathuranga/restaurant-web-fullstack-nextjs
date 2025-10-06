import Banner from "@/components/common/Banner";
import { Lora, Noto_Sans } from "next/font/google";

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function NewsFeed() {
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
        </div>
    )
}