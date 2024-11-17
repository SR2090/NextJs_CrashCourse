import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Accessing image from outside domain need to let next know that we trust the image.
  image: {
    dangerouslyAllowSvg: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
