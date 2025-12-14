import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization settings
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Vercel-optimized image formats
    formats: ["image/avif", "image/webp"],
    // Cache images for 60 days in production
    minimumCacheTTL: 60 * 60 * 24 * 60,
  },
  
  // Compression and performance
  compress: true,
  
  // Production source maps disabled for smaller bundle
  productionBrowserSourceMaps: false,
  
  // Optimize for Vercel Edge Functions
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
