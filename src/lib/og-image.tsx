import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og-font";
import { siteName } from "@/lib/site";

export async function renderOgImage() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#12141C",
          color: "#E8EEF6",
        }}
      >
        <div
          style={{
            width: 18,
            height: "100%",
            background: "#D2FF3A",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 80px",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#D2FF3A",
              fontFamily: "Golos",
            }}
          >
            Frontend Developer
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 72,
                lineHeight: 1.05,
                fontWeight: 600,
                letterSpacing: -2,
                fontFamily: "Unbounded",
              }}
            >
              {siteName}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                fontSize: 32,
                lineHeight: 1.35,
                color: "#C5CDDB",
                maxWidth: 860,
                fontFamily: "Golos",
              }}
            >
              Сложные интерфейсы, админ-панели и данные
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#C5CDDB",
              fontFamily: "Golos",
            }}
          >
            React · Next.js · Vue · Nuxt
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts,
    },
  );
}
