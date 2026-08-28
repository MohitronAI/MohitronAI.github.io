const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = (() => {
  if (!configuredSiteUrl) return undefined;

  const url = new URL(configuredSiteUrl);
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_SITE_URL must use http or https.");
  }
  return url.origin;
})();

export function absoluteUrl(path: string) {
  return siteUrl ? new URL(path, siteUrl).toString() : path;
}
