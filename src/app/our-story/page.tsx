"use client";

import Banner from "@/components/common/Banner";
import WeAreSection from "@/components/our-story/WeAreSection";
import OurLocationsSection from "@/components/our-story/OurLocationsSection";
import GallerySection from "@/components/our-story/GallerySection";
import { Lora, Noto_Sans } from "next/font/google";
import SlideUpSection from "@/components/common/SlideUpSection";
import { useEffect, useState } from "react";
import { IGallery } from "@/interfaces/gallery";
import { getAllGalleryItems } from "@/services/gallaryService";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function OurStory() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [ImageData, setImageData] = useState<IGallery[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError("");
      const response = await getAllGalleryItems();
      console.log("Gallery fetch response:", response);
      if (response.success && response.data) {
        setImageData(response.data);
      } else {
        setError(response.error || "Failed to load gallery items");
      }
      setLoading(false);
    };

    fetchImages();
  }, []);
  return (
    <div>
      <Banner
        singleImage="/images/ourStoryBanner.jpeg"
        content={{
          title: "Our Story...",
          subtitle: "Welcome to Sri Vihar Indian Restaurant.",
          titleFont: lora,
          subtitleFont: notoSans,
          titleFontSize: "font-medium",
        }}
      />
      <SlideUpSection>
        <WeAreSection />
      </SlideUpSection>

      <SlideUpSection>
        <OurLocationsSection />
      </SlideUpSection>

      {loading && <p className="p-4">Loading images...</p>}
      {error && (
        <p className="p-4 text-red-500">Error Loading Images: {error}</p>
      )}

      {ImageData.length > 0 && (
        <SlideUpSection>
          <GallerySection galleryImages={ImageData} />
        </SlideUpSection>
      )}
    </div>
  );
}
