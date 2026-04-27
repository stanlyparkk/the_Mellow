import {
  mockContentLinks,
  mockNewsPosts,
  mockPackages,
  mockPortfolioItems,
  mockPrimaryCategories,
  mockSecondaryCategories,
  mockSiteSettings,
} from "@/lib/sanity/mock-data";
import {
  contentLinksQuery,
  newsPostsQuery,
  newsPostBySlugQuery,
  packagesQuery,
  portfolioBySlugQuery,
  portfolioPrimaryCategoriesQuery,
  portfolioSecondaryCategoriesQuery,
  portfoliosQuery,
  siteSettingsQuery,
} from "@/lib/sanity/queries";
import type {
  ContentLink,
  NewsPost,
  PackagePlan,
  PortfolioItem,
  PortfolioPrimaryCategory,
  PortfolioSecondaryCategory,
  SiteSettings,
} from "@/lib/sanity/types";
import { sanityClient } from "@/lib/sanity/client";
import { isSanityConfigured } from "@/lib/sanity/env";

async function safeFetch<T>(
  query: string,
  params: Record<string, unknown>,
  fallback: T,
) {
  if (!isSanityConfigured) {
    return fallback;
  }

  try {
    const result = await sanityClient.fetch<T>(query, params, {
      next: { revalidate: 60 },
    });

    return result ?? fallback;
  } catch {
    return fallback;
  }
}

export async function getSiteSettings() {
  return safeFetch<SiteSettings>(siteSettingsQuery, {}, mockSiteSettings);
}

export async function getPortfolioPrimaryCategories() {
  return safeFetch<PortfolioPrimaryCategory[]>(
    portfolioPrimaryCategoriesQuery,
    {},
    mockPrimaryCategories,
  );
}

export async function getPortfolioSecondaryCategories() {
  return safeFetch<PortfolioSecondaryCategory[]>(
    portfolioSecondaryCategoriesQuery,
    {},
    mockSecondaryCategories,
  );
}

export async function getPortfolioItems() {
  return safeFetch<PortfolioItem[]>(portfoliosQuery, {}, mockPortfolioItems);
}

export async function getFeaturedPortfolioItems() {
  const items = await getPortfolioItems();
  return items.filter((item) => item.featured).slice(0, 3);
}

export async function getPortfolioItemBySlug(slug: string) {
  const fallback = mockPortfolioItems.find((item) => item.slug === slug) || null;

  return safeFetch<PortfolioItem | null>(
    portfolioBySlugQuery,
    { slug },
    fallback,
  );
}

export async function getPackages() {
  return safeFetch<PackagePlan[]>(packagesQuery, {}, mockPackages);
}

export async function getContentLinks() {
  return safeFetch<ContentLink[]>(contentLinksQuery, {}, mockContentLinks);
}

export async function getFeaturedContentLinks() {
  const links = await getContentLinks();
  return links.filter((item) => item.featured).slice(0, 6);
}

export async function getNewsPosts() {
  return safeFetch<NewsPost[]>(newsPostsQuery, {}, mockNewsPosts);
}

export async function getLatestNewsPosts() {
  const posts = await getNewsPosts();
  return posts.filter((post) => post.active !== false).slice(0, 3);
}

export async function getNewsPostBySlug(slug: string) {
  const fallback = mockNewsPosts.find((post) => post.slug === slug) || null;

  return safeFetch<NewsPost | null>(
    newsPostBySlugQuery,
    { slug },
    fallback,
  );
}
