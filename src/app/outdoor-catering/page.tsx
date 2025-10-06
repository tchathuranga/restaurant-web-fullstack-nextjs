import Banner from "@/components/common/Banner"
import { Lora, Noto_Sans } from "next/font/google";

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function OutdoorCatering() {
    return (
        <div>
            <Banner
                singleImage="/images/outdoorCateringBanner.png"
                content={{
                    title: "Catering Services",
                    subtitle: "Bringing Traditional Flavors to Your Special Occasions.",
                    titleFont: lora,
                    subtitleFont: notoSans,
                    titleFontSize: "font-medium",
                }}
            />
        </div>
    )
}