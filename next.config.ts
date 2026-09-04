import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack ignores stray lockfiles in parent
  // directories (e.g. C:\Users\ismai\dev\package-lock.json).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
