import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "img.clerk.com", // for Clerk user avatars
      "images.clerk.dev", // sometimes avatars come from this too
      "lh3.googleusercontent.com", // for Google OAuth fallback
    ],
  },
};

export default nextConfig;
