import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site, served by nginx in Docker. No server runtime needed.
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
