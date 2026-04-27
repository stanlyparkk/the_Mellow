import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import { sanityDataset, sanityProjectId } from "./lib/sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "더멜로우 Studio",
  projectId: sanityProjectId,
  dataset: sanityDataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
