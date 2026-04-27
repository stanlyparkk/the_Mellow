import type { MetadataRoute } from "next";

import { getPortfolioItems } from "@/lib/sanity/fetchers";
import { absoluteUrl } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const items = await getPortfolioItems();

  const routes = [
    "",
    "/about",
    "/portfolio",
    "/packages",
    "/news",
    "/store",
    "/contact",
  ].map((path) => ({
    url: absoluteUrl(path || "/"),
    lastModified: new Date(),
  }));

  const portfolioRoutes = items.map((item) => ({
    url: absoluteUrl(`/portfolio/${item.slug}`),
    lastModified: item.shootDate ? new Date(item.shootDate) : new Date(),
  }));

  return [...routes, ...portfolioRoutes];
}
