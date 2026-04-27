import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "brandName",
      title: "브랜드명",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bannerTitle",
      title: "메인 배너 문구",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bannerSubtitle",
      title: "메인 배너 보조 문구",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "메인 대표 이미지",
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "homeMoodEnabled",
      title: "메인 이미지 위 분위기 카드 표시",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "homeMoodTitle",
      title: "분위기 카드 제목",
      type: "string",
      hidden: ({ document }) => !document?.homeMoodEnabled,
    }),
    defineField({
      name: "homeMoodText",
      title: "분위기 카드 설명",
      type: "text",
      rows: 3,
      hidden: ({ document }) => !document?.homeMoodEnabled,
    }),
    defineField({
      name: "introTitle",
      title: "메인 소개 제목",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "introText",
      title: "메인 소개글",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "homeStatsEnabled",
      title: "메인 통계 영역 표시",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "homeStats",
      title: "메인 통계 항목",
      type: "array",
      hidden: ({ document }) => !document?.homeStatsEnabled,
      of: [
        {
          type: "object",
          name: "homeStat",
          fields: [
            defineField({
              name: "value",
              title: "큰 텍스트",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "label",
              title: "보조 문구",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "value",
              subtitle: "label",
            },
          },
        },
      ],
      validation: (rule) => rule.max(4),
    }),
    defineField({
      name: "aboutTitle",
      title: "About 제목",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "aboutBody",
      title: "About 소개글",
      type: "text",
      rows: 8,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "aboutHighlights",
      title: "About 하단 강조 문구 카드",
      type: "array",
      of: [
        {
          type: "object",
          name: "aboutHighlight",
          fields: [
            defineField({
              name: "text",
              title: "문구",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "text",
            },
          },
        },
      ],
    }),
    defineField({
      name: "portfolioTitle",
      title: "Gallery 페이지 제목",
      type: "string",
    }),
    defineField({
      name: "portfolioDescription",
      title: "Gallery 페이지 설명",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "packageTitle",
      title: "Menu 페이지 제목",
      type: "string",
    }),
    defineField({
      name: "packageDescription",
      title: "Menu 페이지 설명",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "packageCustomQuoteEnabled",
      title: "Menu 하단 맞춤 주문 영역 표시",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "packageCustomQuoteEyebrow",
      title: "맞춤 견적 영역 상단 문구",
      type: "string",
      hidden: ({ document }) => !document?.packageCustomQuoteEnabled,
    }),
    defineField({
      name: "packageCustomQuoteTitle",
      title: "맞춤 견적 영역 제목",
      type: "string",
      hidden: ({ document }) => !document?.packageCustomQuoteEnabled,
    }),
    defineField({
      name: "contactHeading",
      title: "Contact 제목",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "contactDescription",
      title: "Contact 안내 문구",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "reservationNotice",
      title: "예약/문의 안내 문구",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "businessHours",
      title: "영업 시간",
      type: "array",
      of: [
        {
          type: "object",
          name: "businessHour",
          fields: [
            defineField({
              name: "day",
              title: "요일",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "hours",
              title: "시간",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "note",
              title: "메모",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "day",
              subtitle: "hours",
            },
          },
        },
      ],
    }),
    defineField({
      name: "parkingInfo",
      title: "주차 안내",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "directionInfo",
      title: "오시는 길 안내",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "naverMapUrl",
      title: "네이버 지도 링크",
      type: "url",
    }),
    defineField({
      name: "naverTalkUrl",
      title: "네이버톡톡 링크",
      type: "url",
    }),
    defineField({
      name: "orderFormUrl",
      title: "주문서 양식 링크",
      type: "url",
    }),
    defineField({
      name: "riceCakePriceUrl",
      title: "떡케이크 가격표 링크",
      type: "url",
    }),
    defineField({
      name: "ricePoundPriceUrl",
      title: "쌀케이크 가격표 링크",
      type: "url",
    }),
    defineField({
      name: "contactStepsTitle",
      title: "Contact 진행 안내 제목",
      type: "string",
    }),
    defineField({
      name: "contactSteps",
      title: "Contact 진행 안내 단계",
      type: "array",
      of: [
        {
          type: "object",
          name: "contactStep",
          fields: [
            defineField({
              name: "title",
              title: "단계 제목",
              type: "string",
            }),
            defineField({
              name: "text",
              title: "설명",
              type: "text",
              rows: 3,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "text",
            },
          },
        },
      ],
    }),
    defineField({
      name: "phone",
      title: "연락처",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "이메일",
      type: "string",
      validation: (rule) => rule.email().required(),
    }),
    defineField({
      name: "address",
      title: "주소",
      type: "string",
    }),
    defineField({
      name: "instagramUrl",
      title: "인스타그램 링크",
      type: "url",
    }),
    defineField({
      name: "kakaoUrl",
      title: "카카오톡 상담 링크",
      type: "url",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
        subtitle: "홈 배너, 브랜드 소개, 메뉴/문의 정보를 관리합니다.",
      };
    },
  },
});
