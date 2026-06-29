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
    ],
    formats: ["image/avif", "image/webp"],
  },


  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "https://4xcode.com", 
          },
        ],
        destination: "https://www.4xcode.com/:path*", 
        permanent: true,
      },
    ];
  },
};

export default nextConfig;