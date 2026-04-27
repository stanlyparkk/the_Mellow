import { getCliClient } from "sanity/cli";

import {
  mockContentLinks,
  mockNewsPosts,
  mockPackages,
  mockPortfolioItems,
  mockPrimaryCategories,
  mockSecondaryCategories,
  mockSiteSettings,
} from "../lib/sanity/mock-data";

function slug(current: string) {
  return {
    _type: "slug",
    current,
  };
}

function image(source?: { alt?: string }) {
  if (!source?.alt) {
    return undefined;
  }

  return {
    _type: "image",
    alt: source.alt,
  };
}

function ref(_ref: string) {
  return {
    _type: "reference",
    _ref,
  };
}

const primaryIdBySlug = new Map(
  mockPrimaryCategories.map((category) => [category.slug, category._id]),
);

const secondaryIdBySlug = new Map(
  mockSecondaryCategories.map((category) => [category.slug, category._id]),
);

async function main() {
const client = getCliClient({ apiVersion: "2025-02-19" });
const transaction = client.transaction();

transaction.createOrReplace({
  _id: "siteSettings",
  _type: "siteSettings",
  ...mockSiteSettings,
  heroImage: image(mockSiteSettings.heroImage),
});

for (const category of mockPrimaryCategories) {
  transaction.createOrReplace({
    _id: category._id,
    _type: "portfolioPrimaryCategory",
    title: category.title,
    slug: slug(category.slug),
    description: category.description,
  });
}

for (const category of mockSecondaryCategories) {
  const primaryId = category.primaryCategorySlug
    ? primaryIdBySlug.get(category.primaryCategorySlug)
    : undefined;

  transaction.createOrReplace({
    _id: category._id,
    _type: "portfolioSecondaryCategory",
    title: category.title,
    slug: slug(category.slug),
    description: category.description,
    primaryCategory: primaryId ? ref(primaryId) : undefined,
  });
}

for (const item of mockPortfolioItems) {
  const primaryId = item.primaryCategory?.slug
    ? primaryIdBySlug.get(item.primaryCategory.slug)
    : undefined;

  transaction.createOrReplace({
    _id: item._id,
    _type: "portfolio",
    title: item.title,
    slug: slug(item.slug),
    summary: item.summary,
    mediaType: item.mediaType,
    youtubeUrl: item.youtubeUrl,
    description: item.description,
    shootDate: item.shootDate,
    location: item.location,
    coverImage: image(item.coverImage),
    gallery: item.gallery?.map((galleryImage, index) => ({
      _key: `gallery-${index + 1}`,
      ...image(galleryImage),
    })),
    primaryCategory: primaryId ? ref(primaryId) : undefined,
    secondaryCategories: item.secondaryCategories
      .map((category) => secondaryIdBySlug.get(category.slug))
      .filter(Boolean)
      .map((id) => ref(id as string)),
    featured: item.featured,
  });
}

for (const plan of mockPackages) {
  transaction.createOrReplace({
    _id: plan._id,
    _type: "packagePlan",
    title: plan.title,
    price: plan.price,
    description: plan.description,
    image: image(plan.image),
    features: plan.features,
    note: plan.note,
    badge: plan.badge,
    order: plan.order,
  });
}

for (const link of mockContentLinks) {
  transaction.createOrReplace({
    _id: link._id,
    _type: "contentLink",
    title: link.title,
    type: link.type,
    source: link.source,
    url: link.url,
    description: link.description,
    image: image(link.image),
    publishedAt: link.publishedAt,
    featured: link.featured,
  });
}

for (const post of mockNewsPosts) {
  transaction.createOrReplace({
    _id: post._id,
    _type: "newsPost",
    title: post.title,
    slug: slug(post.slug),
    type: post.type,
    summary: post.summary,
    body: post.body,
    publishedAt: post.publishedAt,
    image: image(post.image),
    active: post.active,
    linkUrl: post.linkUrl,
  });
}

await transaction.commit();

console.log("Seeded The Mellow content to Sanity.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
