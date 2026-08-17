import { renderOgImage } from "@/lib/og-image";
import { siteName } from "@/lib/site";

export const alt = `${siteName} · Frontend Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return renderOgImage();
}
