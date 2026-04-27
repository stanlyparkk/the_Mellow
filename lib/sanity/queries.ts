import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    brandName,
    bannerTitle,
    bannerSubtitle,
    heroImage{
      alt,
      asset
    },
    homeMoodEnabled,
    homeMoodTitle,
    homeMoodText,
    introTitle,
    introText,
    homeStatsEnabled,
    homeStats[]{
      value,
      label
    },
    aboutTitle,
    aboutBody,
    aboutHighlights[]{
      text
    },
    portfolioTitle,
    portfolioDescription,
    packageTitle,
    packageDescription,
    packageCustomQuoteEnabled,
    packageCustomQuoteEyebrow,
    packageCustomQuoteTitle,
    contactHeading,
    contactDescription,
    reservationNotice,
    businessHours[]{
      day,
      hours,
      note
    },
    parkingInfo,
    directionInfo,
    naverMapUrl,
    naverTalkUrl,
    orderFormUrl,
    riceCakePriceUrl,
    ricePoundPriceUrl,
    contactStepsTitle,
    contactSteps[]{
      title,
      text
    },
    phone,
    email,
    address,
    instagramUrl,
    kakaoUrl
  }
`;

export const portfolioPrimaryCategoriesQuery = groq`
  *[_type == "portfolioPrimaryCategory"] | order(title asc){
    _id,
    title,
    "slug": slug.current,
    description
  }
`;

export const portfolioSecondaryCategoriesQuery = groq`
  *[_type == "portfolioSecondaryCategory"] | order(title asc){
    _id,
    title,
    "slug": slug.current,
    description,
    "primaryCategorySlug": primaryCategory->slug.current,
    "primaryCategoryTitle": primaryCategory->title
  }
`;

export const portfoliosQuery = groq`
  *[_type == "portfolio"] | order(featured desc, shootDate desc){
    _id,
    title,
    "slug": slug.current,
    summary,
    description,
    shootDate,
    location,
    "mediaType": coalesce(mediaType, "photo"),
    youtubeUrl,
    coverImage{
      alt,
      asset
    },
    "gallery": coalesce(gallery[]{
      alt,
      asset
    }, []),
    "primaryCategory": primaryCategory->{
      title,
      "slug": slug.current
    },
    "secondaryCategories": coalesce(secondaryCategories[]->{
      title,
      "slug": slug.current,
      "primaryCategorySlug": primaryCategory->slug.current
    }, []),
    featured
  }
`;

export const portfolioBySlugQuery = groq`
  *[_type == "portfolio" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    summary,
    description,
    shootDate,
    location,
    "mediaType": coalesce(mediaType, "photo"),
    youtubeUrl,
    coverImage{
      alt,
      asset
    },
    "gallery": coalesce(gallery[]{
      alt,
      asset
    }, []),
    "primaryCategory": primaryCategory->{
      title,
      "slug": slug.current
    },
    "secondaryCategories": coalesce(secondaryCategories[]->{
      title,
      "slug": slug.current,
      "primaryCategorySlug": primaryCategory->slug.current
    }, []),
    featured
  }
`;

export const packagesQuery = groq`
  *[_type == "packagePlan"] | order(order asc, _createdAt asc){
    _id,
    title,
    price,
    description,
    image{
      alt,
      asset
    },
    features,
    note,
    badge,
    order
  }
`;

export const contentLinksQuery = groq`
  *[_type == "contentLink"] | order(featured desc, publishedAt desc){
    _id,
    title,
    type,
    source,
    url,
    description,
    image{
      alt,
      asset
    },
    publishedAt,
    featured
  }
`;

export const newsPostsQuery = groq`
  *[_type == "newsPost"] | order(publishedAt desc){
    _id,
    title,
    "slug": slug.current,
    type,
    summary,
    body,
    publishedAt,
    image{
      alt,
      asset
    },
    active,
    linkUrl
  }
`;

export const newsPostBySlugQuery = groq`
  *[_type == "newsPost" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    type,
    summary,
    body,
    publishedAt,
    image{
      alt,
      asset
    },
    active,
    linkUrl
  }
`;
