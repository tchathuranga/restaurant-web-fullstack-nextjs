"use client";

import { ComponentProps, useEffect, useState } from "react";
import Banner from "@/components/common/Banner";
import { getBanners } from "@/services/siteService";

type ManagedBannerProps = Omit<ComponentProps<typeof Banner>, "sliderImages"> & {
  /** Page key the images are saved under in the dashboard */
  page: string;
  /** Home slider images used before any are saved in the dashboard */
  sliderImages?: string[];
};

// Banner whose images come from the dashboard; the images passed in are the fallback
const ManagedBanner = ({ page, singleImage, sliderImages, ...rest }: ManagedBannerProps) => {
  const fallback = singleImage ? [singleImage] : sliderImages || [];
  const [images, setImages] = useState<string[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    getBanners().then((result) => {
      if (cancelled) return;
      const saved = result.success ? result.data?.[page] : undefined;
      setImages(saved && saved.length > 0 ? saved : fallback);
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (images === null) {
    // Reserve the space so the page doesn't jump when the images arrive
    return <div className="min-h-[60vh] w-full bg-parchment" />;
  }

  return <Banner {...rest} sliderImages={images} />;
};

export default ManagedBanner;
