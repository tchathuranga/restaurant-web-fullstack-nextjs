"use client";

import Banner from "@/components/common/Banner";
import { Lora, Noto_Sans } from "next/font/google";
import Branches from "@/components/contact-us/Branches";
import SendMessage from "@/components/contact-us/SendMessage";
import SlideUpSection from "@/components/common/SlideUpSection";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
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

      <SlideUpSection>
        <Branches />
      </SlideUpSection>
      
      <SlideUpSection>
        <SendMessage />
      </SlideUpSection>
    </div>
  );
}
