import type { NextConfig } from "next";

function normalizeBasePath(value?: string) {
  if (!value || value === "/") return "";
  return `/${value.replace(/^\/|\/$/g, "")}`;
}

const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
