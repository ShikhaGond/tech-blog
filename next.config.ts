import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.slingacademy.com",
        pathname: "/public/sample-blog-posts/**",
      },
    ],
  },
};

export default nextConfig;
