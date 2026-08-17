/** Synthetic demo data. Not client metrics. */
export const isSynthetic = true;

export const vitals = [
  { id: "inp", label: "INP", value: "48", unit: "ms", hint: "interaction" },
  { id: "lcp", label: "LCP", value: "1.2", unit: "s", hint: "paint" },
  { id: "chunk", label: "chunk", value: "184", unit: "kb", hint: "js" },
] as const;

export const renderSeries = [42, 48, 45, 51, 47, 55, 49, 46, 52, 44, 41, 39];

export const routes = [
  { path: "/orders", status: "ok" as const, load: "112ms" },
  { path: "/ops", status: "warn" as const, load: "340ms" },
  { path: "/billing", status: "ok" as const, load: "98ms" },
];

export const hydration = 86;

export const trafficSeries = [12, 18, 16, 24, 22, 31, 28, 36, 33, 41, 38, 44];

export const channelBars = [
  { name: "Web", value: 78 },
  { name: "App", value: 54 },
  { name: "API", value: 36 },
  { name: "Bot", value: 22 },
];
