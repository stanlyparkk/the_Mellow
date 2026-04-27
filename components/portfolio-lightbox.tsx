"use client";

import { useState } from "react";

import { PortableImage } from "@/components/ui/portable-image";
import type { SanityImage } from "@/lib/sanity/types";

type LightboxImage = {
  image?: SanityImage;
  alt: string;
  className?: string;
};

export function PortfolioLightbox({ images }: { images: LightboxImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {images.map((item, index) => (
          <button
            key={`${item.alt}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group block text-left ${item.className || ""}`}
            aria-label={`${item.alt} 크게 보기`}
          >
            <PortableImage
              image={item.image}
              alt={item.alt}
              priority={index === 0}
              sizes={index === 0 ? "(min-width: 1024px) 50vw, 100vw" : undefined}
              className={`transition duration-500 group-hover:scale-[1.01] ${
                index === 0 ? "h-[420px] sm:h-[680px]" : "h-[340px]"
              }`}
            />
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-stone/82 px-4 py-8 backdrop-blur-sm"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-4 text-white">
              <p className="text-sm uppercase tracking-[0.22em]">{active.alt}</p>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="rounded-full border border-white/40 bg-white/12 px-4 py-2 text-sm uppercase tracking-[0.2em]"
              >
                Close
              </button>
            </div>
            <PortableImage image={active.image} alt={active.alt} className="h-[78vh]" />
          </div>
        </div>
      ) : null}
    </>
  );
}
