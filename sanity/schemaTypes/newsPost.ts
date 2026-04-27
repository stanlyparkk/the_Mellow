import { BellIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const newsPostType = defineType({
  name: "newsPost",
  title: "News / Events",
  type: "document",
  icon: BellIcon,
  fields: [
    defineField({
      name: "title",
      title: "제목",
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
      name: "type",
      title: "글 유형",
      type: "string",
      initialValue: "notice",
      options: {
        list: [
          { title: "소식", value: "notice" },
          { title: "이벤트", value: "event" },
          { title: "클래스", value: "class" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "목록용 짧은 설명",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "본문",
      type: "text",
      rows: 8,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "게시일",
      type: "date",
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
      name: "active",
      title: "공개 여부",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "linkUrl",
      title: "외부 링크",
      type: "url",
      description: "네이버 블로그 공지나 예약폼으로 연결할 때 사용합니다.",
    }),
  ],
});
