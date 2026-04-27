import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const portfolioPrimaryCategoryType = defineType({
  name: "portfolioPrimaryCategory",
  title: "Gallery Main Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "대분류명",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "슬러그",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "설명",
      type: "text",
      rows: 3,
    }),
  ],
});
