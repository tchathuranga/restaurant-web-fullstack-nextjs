"use client";

import Banner from "@/components/common/Banner";
import { Lora } from "next/font/google";
import { Check } from "lucide-react";
import EventCatering from "@/components/outdoor-catering/EventCatering";
import CateringMenu from "@/components/outdoor-catering/CateringMenu";
import BookingAndInquiries from "@/components/outdoor-catering/BookingAndInquiries";
import SlideUpSection from "@/components/common/SlideUpSection";
import SectionHeading from "@/components/common/SectionHeading";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
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
          titleFontSize: "font-medium",
        }}
      />

      <SlideUpSection>
        <div className="mx-auto px-6 py-12 sm:px-10 md:px-20 lg:px-30">
          <SectionHeading
            className="mb-8"
            eyebrow="Celebrate with us"
            title="Authentic Indian Vegetarian Catering"
            subtitle="We bring the flavors and warmth of traditional Indian cooking to weddings, ceremonies, and gatherings."
          />

          <ul className="mx-auto max-w-3xl space-y-4 px-2 text-base text-ink-muted">
            {[
              "100% Pure Vegetarian & Authentic Indian Dishes",
              "Customized Menu Options to Suit Your Event",
              "Professional, Timely Service with Attention to Detail",
              "Hygienic Preparation & Fresh Ingredients",
              "Experienced Staff with a Passion for Hospitality",
            ].map((item) => (
              <li key={item} className="sv-card flex items-center gap-3 px-4 py-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-peacock text-ivory">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
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
