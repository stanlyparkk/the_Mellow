import { ImageIcon, PlayIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const portfolioType = defineType({
  name: "portfolio",
  title: "Gallery / Works",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "title",
      title: "작업물 제목",
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
      name: "summary",
      title: "목록용 짧은 설명",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mediaType",
      title: "콘텐츠 유형",
      type: "string",
      initialValue: "photo",
      options: {
        list: [
          { title: "사진", value: "photo" },
          { title: "릴스 / 영상", value: "video" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "youtubeUrl",
      title: "유튜브 링크",
      type: "url",
      hidden: ({ document }) => document?.mediaType !== "video",
      validation: (rule) =>
        rule.custom((value, context) => {
          if (context.document?.mediaType === "video" && !value) {
            return "영상 작업물에는 유튜브 링크가 필요합니다.";
          }
          return true;
        }),
    }),
    defineField({
      name: "description",
      title: "상세 설명",
      type: "text",
      rows: 8,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shootDate",
      title: "등록일 또는 시즌 날짜",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "주문 메모 / 행사 메모",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "대표 이미지",
      type: "image",
      description: "영상 작업물에서는 비워두면 유튜브 썸네일이 사용됩니다.",
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
      validation: (rule) =>
        rule.custom((value, context) => {
          if (context.document?.mediaType === "photo" && !value) {
            return "사진 작업물에는 대표 이미지가 필요합니다.";
          }
          return true;
        }),
    }),
    defineField({
      name: "gallery",
      title: "갤러리 이미지",
      type: "array",
      description: "상세 페이지에 추가로 보여줄 이미지입니다. 대표 이미지만으로도 등록할 수 있습니다.",
      of: [
        defineArrayMember({
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
      ],
      hidden: ({ document }) => document?.mediaType !== "photo",
    }),
    defineField({
      name: "primaryCategory",
      title: "메인 카테고리",
      type: "reference",
      to: [{ type: "portfolioPrimaryCategory" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "secondaryCategories",
      title: "스타일 카테고리",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "portfolioSecondaryCategory" }],
        }),
      ],
    }),
    defineField({
      name: "featured",
      title: "메인 노출 여부",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "mediaType",
      media: "coverImage",
    },
    prepare({ title, subtitle, media }) {
      const mappedSubtitle =
        subtitle === "video" ? "릴스 / 영상 작업물" : "사진 작업물";
      return {
        title,
        subtitle: mappedSubtitle,
        media: media || (subtitle === "video" ? PlayIcon : ImageIcon),
      };
    },
  },
});
