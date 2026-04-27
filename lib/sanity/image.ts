import imageUrlBuilder from "@sanity/image-url";

import { sanityClient } from "@/lib/sanity/client";
import type { SanityImage } from "@/lib/sanity/types";

const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: SanityImage) {
  return builder.image(source).auto("format");
}
