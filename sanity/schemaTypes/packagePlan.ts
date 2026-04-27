import { DocumentsIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const packagePlanType = defineType({
  name: "packagePlan",
  title: "Menu / Price",
  type: "document",
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: "title",
      title: "메뉴명",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "가격",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "설명",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "대표 이미지",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "대체 텍스트",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "features",
      title: "구성 또는 옵션",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.min(2).required(),
    }),
    defineField({
      name: "note",
      title: "추가 안내",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "badge",
      title: "뱃지 문구",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "정렬 순서",
      type: "number",
      initialValue: 1,
    }),
  ],
});
