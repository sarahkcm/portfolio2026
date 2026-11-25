import type { NextConfig } from "next";

// GitHub Pages serves this project site at https://<user>.github.io/portfolio2026/.
// The workflow sets NEXT_PUBLIC_BASE_PATH=/portfolio2026; local dev leaves it empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false, devIndicators: false,
};

export default nextConfig;
