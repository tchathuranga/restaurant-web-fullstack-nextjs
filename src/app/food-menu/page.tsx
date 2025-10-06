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

export default function FoodMenu() {   
    return (
        <div>
            <Banner 
                singleImage="/images/foodMenuBanner.png"
                content={{
                    title: "Our Menu",
                    subtitle: "Authentic flavors, traditional recipes",
                    titleFont: lora,
                    subtitleFont: notoSans,
                    titleFontSize: "font-medium",
                }}
            /> 
        </div>
    )
}