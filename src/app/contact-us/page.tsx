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

export default function ContactUs() {
  return (
    <div>
      <Banner 
        singleImage="/images/contactUsBanner.png"
        content={{
          title: "Contact Us",
          subtitle: "We would love to hear from you!",
          titleFont: lora,
          subtitleFont: notoSans,
          titleFontSize: "font-medium",
        }}
      />
    </div>
  );
}