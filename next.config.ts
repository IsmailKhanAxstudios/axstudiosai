import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
      allowedOrigins: ["localhost:3000", "axstudios.tech", "axstudiostech.netlify.app"],
    },
  },
  // Pin the workspace root so Turbopack ignores stray lockfiles in parent
  // directories (e.g. C:\Users\ismai\dev\package-lock.json).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
