"use client";

import React from "react";
import Banner from "@/components/common/Banner";
import { Lora, Noto_Sans } from "next/font/google";
import { Check } from "lucide-react";
import EventCatering from "@/components/outdoor-catering/EventCatering";
import CateringMenu from "@/components/outdoor-catering/CateringMenu";
import BookingAndInquiries from "@/components/outdoor-catering/BookingAndInquiries";
import SlideUpSection from "@/components/common/SlideUpSection";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
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

      <SlideUpSection>
        <div className="lg:px-30 md:px-20 sm:px-10 px-10 pt-10 pb-10 mx-auto">
          <h2
            className={`px-10 font-bold text-gray-900 text-center py-6 ${lora.className}`}
            style={{ fontSize: "34px" }}
          >
            Authentic Indian Vegetarian Catering
          </h2>

          <p
            className={`text-gray-600 text-center text-justify ${notoSans.className}`}
          >
            At Sri Vihar, we take pride in delivering the rich flavors and
            traditional essence of pure vegetarian South Indian cuisine to your
            special events. Whether it’s a wedding, corporate function,
            religious ceremony, birthday party, or any celebration, our catering
            service brings the taste of India straight to your guests.
          </p>

          <h2
            className={`px-10 font-bold text-gray-700 text-center py-6 ${notoSans.className}`}
            style={{ fontSize: "20px" }}
          >
            Why Choose Sri Vihar for Your Catering Needs?
          </h2>

          <ul
            className={`list-inside max-w-md text-gray-600 text-left space-y-5 mx-auto max-w-3xl px-4 lg:px-0 ${notoSans.className}`}
            style={{ fontSize: "16px" }}
          >
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-green-600 text-white">
                <Check className="w-4 h-4" strokeWidth={3} />
              </span>
              100% Pure Vegetarian & Authentic Indian Dishes
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-green-600 text-white">
                <Check className="w-4 h-4" strokeWidth={3} />
              </span>
              Customized Menu Options to Suit Your Event
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-green-600 text-white">
                <Check className="w-4 h-4" strokeWidth={3} />
              </span>
              Professional, Timely Service with Attention to Detail
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-green-600 text-white">
                <Check className="w-4 h-4" strokeWidth={3} />
              </span>
              Hygienic Preparation & Fresh Ingredients
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-green-600 text-white">
                <Check className="w-4 h-4" strokeWidth={3} />
              </span>
              Experienced Staff with a Passion for Hospitality
            </li>
          </ul>
        </div>
      </SlideUpSection>

      <SlideUpSection>
        <EventCatering />
      </SlideUpSection>

      
      <SlideUpSection>
        <CateringMenu />
      </SlideUpSection>
      
      <SlideUpSection>
        <BookingAndInquiries />
      </SlideUpSection>
    </div>
  );
}
