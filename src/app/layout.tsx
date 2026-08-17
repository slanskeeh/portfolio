import type { Metadata } from "next";
import { Golos_Text, JetBrains_Mono, Unbounded } from "next/font/google";
import { SiteNav } from "@/components/nav/SiteNav";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
  display: "swap",
});

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Максим Герасименко · Frontend Developer",
  description:
    "Frontend developer. Сложные интерфейсы, админ-панели, визуализация данных и аккуратный motion.",
};

const DIRECTION_CONTRACT = `<!--
THESIS: The page is a live product console that proves frontend craft. It refuses the centered greeting hero and identical project cards.
OWN-WORLD: Ink #12141C, Fog #E8EEF6, Volt #D2FF3A as the only interactive accent, Cobalt #2B5BFF as data. Unbounded display, Golos Text body, JetBrains Mono for metrics. 12px panels, 8px controls, pill badges. Instrument chrome and live widgets. Color owns whole fields.
STORY: A client understands the craft from the first viewport, believes the level, and writes.
FIRST VIEWPORT: Split. Left: headline Сложные интерфейсы, short sub, CTAs Смотреть проекты and Написать мне. Right: live instrument cluster with metrics, line chart, routes, radial. Primary action is Смотреть проекты.
FORM: user-pinned Рабочая консоль, Experience mode, code-led. No concept-seed; the user locked this world before implementation.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${golos.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-fog">
        <span hidden dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }} />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
