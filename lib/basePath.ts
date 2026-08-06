export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prepends the deploy-time basePath to raw asset URLs (plain <a href>, CSS,
 * anything next/link and next/image don't already rewrite automatically).
 */
export function withBasePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
