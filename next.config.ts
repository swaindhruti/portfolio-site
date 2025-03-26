import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "next-auth.js.org",
    ],
  },
  /* config options here */
};

export default nextConfig;
