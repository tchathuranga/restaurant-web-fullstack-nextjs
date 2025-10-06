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

export default function OurStory() {
    return (
        <div>
            <Banner
                singleImage="/images/ourStoryBanner.png"
                content={{
                    title: "Our Story",
                    subtitle: "Welcome to Sri Vihar Indian Restaurant.",
                    titleFont: lora,
                    subtitleFont: notoSans,
                    titleFontSize: "font-medium",
                }}
            />
        </div>
    )
}