import { readFile } from "node:fs/promises";
import { join } from "node:path";

function fontFile(name: string) {
  return readFile(join(process.cwd(), "src", "fonts", name));
}

export async function loadOgFonts() {
  const [unboundedLatin, unboundedCyrillic, golosLatin, golosCyrillic] = await Promise.all([
    fontFile("unbounded-latin-600.ttf"),
    fontFile("unbounded-cyrillic-600.ttf"),
    fontFile("golos-latin-500.ttf"),
    fontFile("golos-cyrillic-500.ttf"),
  ]);

  return [
    { name: "Unbounded", data: unboundedLatin, weight: 600 as const, style: "normal" as const },
    { name: "Unbounded", data: unboundedCyrillic, weight: 600 as const, style: "normal" as const },
    { name: "Golos", data: golosLatin, weight: 500 as const, style: "normal" as const },
    { name: "Golos", data: golosCyrillic, weight: 500 as const, style: "normal" as const },
  ];
}

export async function loadIconFont() {
  const [latin, cyrillic] = await Promise.all([
    fontFile("unbounded-latin-600.ttf"),
    fontFile("unbounded-cyrillic-600.ttf"),
  ]);

  return [
    { name: "Unbounded", data: latin, weight: 600 as const, style: "normal" as const },
    { name: "Unbounded", data: cyrillic, weight: 600 as const, style: "normal" as const },
  ];
}
