import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Reduce build memory usage
  swcMinify: true,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
