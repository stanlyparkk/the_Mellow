import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const portfolioSecondaryCategoryType = defineType({
  name: "portfolioSecondaryCategory",
  title: "Gallery Style Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "중분류명",
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
      name: "primaryCategory",
      title: "연결 대분류",
      type: "reference",
      to: [{ type: "portfolioPrimaryCategory" }],
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
