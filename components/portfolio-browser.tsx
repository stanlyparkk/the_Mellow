"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { PortableImage } from "@/components/ui/portable-image";
import type {
  PortfolioItem,
  PortfolioPrimaryCategory,
  PortfolioSecondaryCategory,
} from "@/lib/sanity/types";
import { extractYouTubeId, formatDate } from "@/lib/utils";

type PortfolioBrowserProps = {
  items: PortfolioItem[];
  primaryCategories: PortfolioPrimaryCategory[];
  secondaryCategories: PortfolioSecondaryCategory[];
};

function PortfolioVideoThumbnail({
  item,
  youtubeId,
}: {
  item: PortfolioItem;
  youtubeId: string;
}) {
  if (item.coverImage?.asset?._ref) {
    return <PortableImage image={item.coverImage} alt={item.title} className="h-[440px]" />;
  }

  if (youtubeId) {
    return (
      <div className="relative h-[440px] overflow-hidden rounded-[2rem]">
        <Image
          src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
          alt={item.title}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 46vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return <PortableImage alt={item.title} className="h-[440px]" />;
}

export function PortfolioBrowser({
  items,
  primaryCategories,
  secondaryCategories,
}: PortfolioBrowserProps) {
  const [selectedPrimary, setSelectedPrimary] = useState("all");
  const [selectedSecondary, setSelectedSecondary] = useState("all");
  const [activeVideo, setActiveVideo] = useState<PortfolioItem | null>(null);

  const filteredSecondaryCategories = useMemo(() => {
    if (selectedPrimary === "all") {
      return secondaryCategories;
    }

    return secondaryCategories.filter(
      (category) => category.primaryCategorySlug === selectedPrimary,
    );
  }, [secondaryCategories, selectedPrimary]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesPrimary =
        selectedPrimary === "all" || item.primaryCategory?.slug === selectedPrimary;

      const matchesSecondary =
        selectedSecondary === "all" ||
        item.secondaryCategories.some((category) => category.slug === selectedSecondary);

      return matchesPrimary && matchesSecondary;
    });
  }, [items, selectedPrimary, selectedSecondary]);

  const activeVideoId = activeVideo?.youtubeUrl
    ? extractYouTubeId(activeVideo.youtubeUrl)
    : "";

  const primaryCounts = useMemo(() => {
    return primaryCategories.reduce<Record<string, number>>((acc, category) => {
      acc[category.slug] = items.filter(
        (item) => item.primaryCategory?.slug === category.slug,
      ).length;
      return acc;
    }, {});
  }, [items, primaryCategories]);

  const secondaryCounts = useMemo(() => {
    return filteredSecondaryCategories.reduce<Record<string, number>>((acc, category) => {
      acc[category.slug] = items.filter((item) =>
        item.secondaryCategories.some((itemCategory) => itemCategory.slug === category.slug),
      ).length;
      return acc;
    }, {});
  }, [filteredSecondaryCategories, items]);

  return (
    <div className="mt-12">
      <div className="page-panel overflow-hidden">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Main Category</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedPrimary("all");
                  setSelectedSecondary("all");
                }}
                className={`soft-chip ${
                  selectedPrimary === "all"
                    ? "soft-chip-active"
                    : "border-gold/20 text-gold hover:border-gold/45 hover:bg-white"
                }`}
              >
                전체
              </button>
              {primaryCategories.map((category) => (
                <button
                  key={category._id}
                  type="button"
                  onClick={() => {
                    setSelectedPrimary(category.slug);
                    setSelectedSecondary("all");
                  }}
                  className={`soft-chip ${
                    selectedPrimary === category.slug
                      ? "soft-chip-active"
                      : "border-gold/20 text-gold hover:border-gold/45 hover:bg-white"
                  }`}
                >
                  {category.title}{" "}
                  <span className="ml-1 opacity-70">({primaryCounts[category.slug] || 0})</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Style Filter</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setSelectedSecondary("all")}
                className={`soft-chip ${
                  selectedSecondary === "all"
                    ? "soft-chip-active border-stone bg-stone"
                    : "hover:border-stone/35 hover:bg-white"
                }`}
              >
                전체
              </button>
              {filteredSecondaryCategories.map((category) => (
                <button
                  key={category._id}
                  type="button"
                  onClick={() => setSelectedSecondary(category.slug)}
                  className={`soft-chip ${
                    selectedSecondary === category.slug
                      ? "soft-chip-active border-stone bg-stone"
                      : "hover:border-stone/35 hover:bg-white"
                  }`}
                >
                  {category.title}{" "}
                  <span className="ml-1 opacity-70">({secondaryCounts[category.slug] || 0})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item, index) => {
          const youtubeId = item.youtubeUrl ? extractYouTubeId(item.youtubeUrl) : "";
          const isVideo = item.mediaType === "video";

          return (
            <article
              key={item._id}
              className="group overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/35 p-3 shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1"
            >
              {isVideo ? (
                <button
                  type="button"
                  onClick={() => setActiveVideo(item)}
                  className="block w-full text-left"
                >
                  <div className="relative">
                    <PortfolioVideoThumbnail item={item} youtubeId={youtubeId} />
                    <div className="absolute inset-0 flex items-center justify-center rounded-[2rem] bg-black/10 transition group-hover:bg-black/25">
                      <span className="rounded-full bg-white/90 px-5 py-3 text-xs uppercase tracking-[0.28em] text-stone shadow-soft">
                        Reel Preview
                      </span>
                    </div>
                    <div className="absolute left-4 top-4 rounded-full bg-[#f4e2c6]/90 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-gold">
                      Reel
                    </div>
                  </div>
                </button>
              ) : (
                <Link href={`/portfolio/${item.slug}`} className="block">
                  <PortableImage
                    image={item.coverImage}
                    alt={item.title}
                    priority={index < 2}
                    className="h-[440px] transition duration-500 group-hover:scale-[1.01]"
                  />
                </Link>
              )}

              <div className="px-3 pb-2 pt-5">
                <div className="flex flex-wrap gap-2">
                  {item.primaryCategory ? (
                    <span className="rounded-full border border-gold/20 bg-[#f6ead8] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-gold">
                      {item.primaryCategory.title}
                    </span>
                  ) : null}
                  {item.secondaryCategories.map((category) => (
                    <span
                      key={`${item._id}-${category.slug}`}
                      className="rounded-full bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-stone/70"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h2 className="font-serif text-[2rem] leading-tight text-stone">{item.title}</h2>
                  <span className="rounded-full border border-stone/15 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-stone/70">
                    {isVideo ? "Reel" : "Cake"}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-stone/70">{item.summary}</p>
                <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-stone/60">
                  <span>{item.location}</span>
                  <span>{formatDate(item.shootDate)}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {isVideo ? (
                    <button
                      type="button"
                      onClick={() => setActiveVideo(item)}
                      className="gold-button"
                    >
                      Preview
                    </button>
                  ) : null}
                  <Link href={`/portfolio/${item.slug}`} className="outline-button">
                    Detail View
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {!filteredItems.length ? (
        <div className="glass-card mt-10 p-10 text-center text-stone/70">
          선택한 조건에 맞는 작업물이 아직 없습니다.
        </div>
      ) : null}

      {activeVideo && activeVideoId ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/72 px-4 py-10 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="w-full max-w-5xl rounded-[2.25rem] bg-[#faf5ed] p-4 shadow-soft sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gold">Reel Preview</p>
                <h3 className="mt-3 font-serif text-3xl text-stone">{activeVideo.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="soft-chip"
              >
                Close
              </button>
            </div>
            <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-stone/10 bg-black">
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={`/portfolio/${activeVideo.slug}`} className="outline-button">
                Detail View
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
