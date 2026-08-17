import { ImageResponse } from "next/og";
import { loadIconFont } from "@/lib/og-font";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function Icon() {
  const fonts = await loadIconFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#12141C",
          color: "#D2FF3A",
          fontSize: 18,
          fontWeight: 600,
          fontFamily: "Unbounded",
        }}
      >
        М
      </div>
    ),
    { ...size, fonts },
  );
}
