// Prefix for plain <a href> to static files; next/link adds basePath itself.
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => `${BASE}${p}`;
