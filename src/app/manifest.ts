import type { MetadataRoute } from "next";
import { getBasePath, siteDescription, siteName } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const base = getBasePath();

  return {
    name: siteName,
    short_name: "Максим",
    description: siteDescription,
    start_url: `${base}/`,
    display: "standalone",
    background_color: "#12141C",
    theme_color: "#12141C",
    lang: "ru",
    icons: [
      { src: `${base}/icon`, sizes: "32x32", type: "image/png" },
      { src: `${base}/apple-icon`, sizes: "180x180", type: "image/png" },
    ],
  };
}
