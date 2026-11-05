import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blogs-tbsmf.ondigitalocean.app",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'vogueimages.co.uk',
        pathname: '/**',
      }
    ],
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      {
        source: "/service/seo-digital-marketing",
        destination: "/service/search-engine-optimization-seo",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "4xcode.com",
          },
        ],
        destination: "https://www.4xcode.com/:path*",
        permanent: true,
      },
        {
  source: "/service/seo",
  destination: "/service/search-engine-optimization-seo",
  permanent: true,
},
    ];
  },
};

export default nextConfig;
