import Image from "next/image";

import { isSanityConfigured } from "@/lib/sanity/env";
import { urlForImage } from "@/lib/sanity/image";
import type { SanityImage } from "@/lib/sanity/types";

type PortableImageProps = {
  image?: SanityImage;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function PortableImage({
  image,
  alt,
  className,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
}: PortableImageProps) {
  const hasSanityImage = isSanityConfigured && image?.asset?._ref;

  if (!hasSanityImage) {
    return (
      <div
        className={`flex h-full min-h-[320px] items-end overflow-hidden rounded-[2rem] border border-white/60 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(236,220,191,0.88)_42%,rgba(201,170,122,0.78))] p-6 text-sm uppercase tracking-[0.35em] text-stone/60 ${className || ""}`}
      >
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-[2rem] ${className || ""}`}>
      <Image
        src={urlForImage(image).width(1600).height(2000).url()}
        alt={image?.alt || alt}
        fill
        priority={priority}
        className="object-cover"
        sizes={sizes}
      />
    </div>
  );
}
