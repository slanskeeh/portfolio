export const stackItems = [
  { id: "react", name: "React", slug: "react", angle: -90 },
  { id: "next", name: "Next.js", slug: "nextdotjs", angle: -38 },
  { id: "ts", name: "TypeScript", slug: "typescript", angle: 14 },
  { id: "rtk", name: "Redux Toolkit", slug: "redux", angle: 66 },
  { id: "zustand", name: "Zustand", slug: "zustand", angle: 118 },
  { id: "tw", name: "Tailwind CSS", slug: "tailwindcss", angle: 170 },
  { id: "scss", name: "SCSS", slug: "sass", angle: 222 },
] as const;

export type StackItem = (typeof stackItems)[number];
