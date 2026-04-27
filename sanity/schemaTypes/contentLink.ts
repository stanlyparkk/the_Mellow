import { LinkIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const contentLinkType = defineType({
  name: "contentLink",
  title: "Reviews / Clips / Blog Links",
  type: "document",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "title",
      title: "제목",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "콘텐츠 유형",
      type: "string",
      initialValue: "review",
      options: {
        list: [
          { title: "리뷰", value: "review" },
          { title: "클립 / 영상", value: "clip" },
          { title: "블로그", value: "blog" },
          { title: "공지 링크", value: "notice" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "source",
      title: "출처",
      type: "string",
      description: "예: 네이버 리뷰, 네이버 클립, 블로그, 인스타그램",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "링크",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "짧은 설명",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "썸네일 이미지",
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
      name: "publishedAt",
      title: "등록일",
      type: "date",
    }),
    defineField({
      name: "featured",
      title: "메인 노출 여부",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
