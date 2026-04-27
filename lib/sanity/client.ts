import { createClient } from "next-sanity";

import {
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
  sanityReadToken,
} from "@/lib/sanity/env";

export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: false,
  token: sanityReadToken,
  perspective: "published",
  stega: false,
});
