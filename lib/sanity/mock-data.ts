import type {
  ContentLink,
  NewsPost,
  PackagePlan,
  PortfolioPrimaryCategory,
  PortfolioItem,
  PortfolioSecondaryCategory,
  SiteSettings,
} from "@/lib/sanity/types";

const placeholder = (seed: string) => ({
  alt: seed,
});

export const mockSiteSettings: SiteSettings = {
  brandName: "더멜로우",
  bannerTitle: "건강한 재료로 만드는 대전 봉명동 맞춤제작 케이크",
  bannerSubtitle:
    "100% 예약제로 운영하는 주문제작 케이크 공방입니다. 앙금플라워 떡케이크, 쌀파운드케이크, 화과자, 원데이 베이킹 클래스를 준비합니다.",
  heroImage: placeholder("the mellow custom rice cake"),
  homeMoodEnabled: true,
  homeMoodTitle: "Reservation Only",
  homeMoodText:
    "수업 혹은 작업 중에는 통화 연결이 어려워 네이버톡톡 또는 카카오톡 채널 문의를 권장합니다.",
  introTitle: "우리쌀과 건강한 재료로 특별한 날을 더 부드럽게 채웁니다",
  introText:
    "더멜로우는 대전 유성구 봉명동 도안센트럴프라자에 있는 예약제 케이크 공방입니다. 맞춤제작 케이크, 앙금플라워 떡케이크, 쌀파운드케이크, 화과자와 원데이 베이킹클래스를 운영하며 대전사랑카드 가맹점으로 안내할 수 있습니다.",
  homeStatsEnabled: true,
  homeStats: [
    {
      value: "100%",
      label: "Reservation",
    },
    {
      value: "Daejeon",
      label: "Bongmyeong-dong",
    },
    {
      value: "Rice Cake",
      label: "Healthy Ingredients",
    },
  ],
  aboutTitle: "100% 예약제로 운영하는 더멜로우의 제작 방식",
  aboutBody:
    "수업과 제작이 함께 이루어지는 공방 특성상 현장 응대와 전화 연결이 항상 원활하지 않을 수 있습니다. 네이버톡톡 또는 카카오톡 채널로 문의를 남겨주시면 주문 가능 여부, 디자인 상담, 클래스 안내를 순차적으로 답변드립니다.",
  aboutHighlights: [
    {
      text: "100% 예약제 주문제작, 대전사랑카드 가맹점",
    },
    {
      text: "맞춤제작 케이크, 앙금플라워 떡케이크, 쌀파운드케이크, 화과자",
    },
    {
      text: "원데이 베이킹클래스와 드로잉/체험 클래스 운영",
    },
    {
      text: "네이버톡톡과 카카오톡 채널을 통한 순차 상담",
    },
  ],
  portfolioTitle: "리뷰 사진과 주문제작 케이크 작업물",
  portfolioDescription:
    "앙금플라워, 그림 케이크, 쌀파운드케이크, 화과자와 클래스 후기를 한눈에 둘러볼 수 있도록 정리합니다.",
  packageTitle: "메뉴와 가격 안내",
  packageDescription:
    "케이크 종류별 가격은 디자인, 크기, 장식 난이도에 따라 달라질 수 있습니다. 정확한 금액은 가격표와 주문서 확인 후 상담으로 확정합니다.",
  packageCustomQuoteEnabled: true,
  packageCustomQuoteEyebrow: "Order Form",
  packageCustomQuoteTitle: "주문서 양식과 가격표를 확인한 뒤 문의해 주세요",
  contactHeading: "네이버톡톡 또는 카카오톡 채널로 문의를 남겨주세요",
  contactDescription:
    "수업 혹은 작업 중에는 통화 연결이 어려울 수 있습니다. 원하시는 날짜, 케이크 종류, 디자인 레퍼런스, 픽업 가능 시간을 함께 남겨주시면 순차적으로 답변드립니다.",
  reservationNotice:
    "100% 예약제 주문제작 매장입니다. 방문 전 네이버톡톡 또는 카카오톡 채널로 가능 일정을 먼저 확인해 주세요.",
  businessHours: [
    {
      day: "월-금",
      hours: "11:00 - 19:00",
      note: "외부 후기 기준 확인 정보",
    },
    {
      day: "토-일",
      hours: "10:00 - 17:00",
      note: "예약/클래스 일정에 따라 변동 가능",
    },
  ],
  parkingInfo:
    "네이버 플레이스에 주차 가능으로 표시됩니다. 정확한 주차 위치와 이용 가능 시간은 방문 전 문의로 확인해 주세요.",
  directionInfo:
    "유성온천역 1번 출구에서 도보 약 257m, 도안센트럴프라자 5층 518호입니다.",
  naverMapUrl:
    "https://map.naver.com/p/entry/place/1074958658?lng=127.3445723&lat=36.3522386&placePath=%2Fhome&entry=plt&searchType=place",
  naverTalkUrl:
    "https://map.naver.com/p/entry/place/1074958658?lng=127.3445723&lat=36.3522386&placePath=%2Fhome&entry=plt&searchType=place",
  orderFormUrl: "https://m.blog.naver.com/sochice/223057158527",
  riceCakePriceUrl: "https://blog.naver.com/sochice/223040126474",
  ricePoundPriceUrl: "https://blog.naver.com/sochice/223040132855",
  contactStepsTitle: "Order Guide",
  contactSteps: [
    {
      title: "Step 1",
      text: "가격표와 주문서 양식을 확인한 뒤 원하시는 날짜와 케이크 종류를 정리해 주세요.",
    },
    {
      title: "Step 2",
      text: "네이버톡톡 또는 카카오톡 채널로 디자인 레퍼런스와 픽업 희망 시간을 보내주세요.",
    },
    {
      title: "Step 3",
      text: "가능 일정과 금액 안내 후 예약이 확정되면 픽업/수령 방법을 안내드립니다.",
    },
  ],
  phone: "0507-1390-8568",
  email: "hello@themellow.example",
  address: "대전 유성구 계룡로132번길 10 도안센트럴프라자 518호",
  instagramUrl: "https://www.instagram.com/",
  kakaoUrl: "https://pf.kakao.com/",
};

export const mockPrimaryCategories: PortfolioPrimaryCategory[] = [
  {
    _id: "primary-category-1",
    title: "Cake",
    slug: "cake",
    description: "맞춤제작 케이크와 떡케이크 작업물",
  },
  {
    _id: "primary-category-2",
    title: "Class",
    slug: "class",
    description: "원데이 베이킹클래스와 체험 작업물",
  },
];

export const mockSecondaryCategories: PortfolioSecondaryCategory[] = [
  {
    _id: "secondary-category-1",
    title: "앙금플라워",
    slug: "flower-rice-cake",
    description: "앙금플라워 떡케이크",
    primaryCategorySlug: "cake",
    primaryCategoryTitle: "Cake",
  },
  {
    _id: "secondary-category-2",
    title: "그림 / 레터링",
    slug: "drawing-lettering",
    description: "그림 케이크와 맞춤 문구 케이크",
    primaryCategorySlug: "cake",
    primaryCategoryTitle: "Cake",
  },
  {
    _id: "secondary-category-3",
    title: "쌀파운드 / 화과자",
    slug: "rice-pound-wagashi",
    description: "쌀파운드케이크와 화과자",
    primaryCategorySlug: "cake",
    primaryCategoryTitle: "Cake",
  },
  {
    _id: "secondary-category-4",
    title: "원데이클래스",
    slug: "one-day-class",
    description: "베이킹과 만들기 클래스",
    primaryCategorySlug: "class",
    primaryCategoryTitle: "Class",
  },
  {
    _id: "secondary-category-5",
    title: "드로잉체험",
    slug: "drawing-class",
    description: "오일파스텔, 아크릴화, 수채화 등 드로잉 체험",
    primaryCategorySlug: "class",
    primaryCategoryTitle: "Class",
  },
];

export const mockPortfolioItems: PortfolioItem[] = [
  {
    _id: "portfolio-1",
    title: "앙금플라워 떡케이크",
    slug: "flower-rice-cake",
    summary:
      "건강한 재료와 섬세한 꽃 장식으로 완성하는 더멜로우 대표 떡케이크",
    description:
      "우리쌀로 만든 떡케이크 위에 앙금꽃을 올려 기념일, 부모님 선물, 백일과 돌잔치에 잘 어울리도록 제작합니다. 디자인과 색감은 예약 상담으로 조율합니다.",
    shootDate: "2026-04-10",
    location: "맞춤 문구 / 꽃색 조율 가능",
    mediaType: "photo",
    coverImage: placeholder("flower rice cake cover"),
    gallery: [
      placeholder("flower rice cake 1"),
      placeholder("flower rice cake 2"),
      placeholder("flower rice cake 3"),
      placeholder("flower rice cake 4"),
    ],
    primaryCategory: {
      title: "Cake",
      slug: "cake",
    },
    secondaryCategories: [
      {
        title: "앙금플라워",
        slug: "flower-rice-cake",
        primaryCategorySlug: "cake",
      },
    ],
    featured: true,
  },
  {
    _id: "portfolio-2",
    title: "그림 맞춤제작 케이크",
    slug: "drawing-custom-cake",
    summary: "원하는 컨셉과 그림을 상담해 제작하는 더멜로우 맞춤 케이크",
    description:
      "캐릭터, 가족, 기업 행사 등 레퍼런스가 있는 디자인은 상담을 통해 구현 가능 여부를 확인합니다. 주문 전 디자인 저작권과 제작 범위를 함께 안내합니다.",
    shootDate: "2026-04-02",
    location: "컨셉 주문제작 / 레퍼런스 상담",
    mediaType: "photo",
    coverImage: placeholder("drawing custom cake cover"),
    gallery: [
      placeholder("drawing custom cake 1"),
      placeholder("drawing custom cake 2"),
      placeholder("drawing custom cake 3"),
      placeholder("drawing custom cake 4"),
    ],
    primaryCategory: {
      title: "Cake",
      slug: "cake",
    },
    secondaryCategories: [
      {
        title: "그림 / 레터링",
        slug: "drawing-lettering",
        primaryCategorySlug: "cake",
      },
    ],
    featured: true,
  },
  {
    _id: "portfolio-3",
    title: "쌀파운드케이크와 화과자",
    slug: "rice-pound-and-wagashi",
    summary: "글루텐프리로 즐기기 좋은 촉촉한 쌀파운드케이크와 화과자",
    description:
      "굽지 않고 증기로 쪄내는 쌀파운드케이크와 선물용 화과자를 준비합니다. 계절과 구성에 따라 가능한 메뉴가 달라질 수 있어 사전 문의를 권장합니다.",
    shootDate: "2026-03-22",
    location: "선물 구성 / 클래스 연계 가능",
    mediaType: "photo",
    coverImage: placeholder("rice pound cake and wagashi cover"),
    gallery: [
      placeholder("rice pound cake 1"),
      placeholder("rice pound cake 2"),
      placeholder("wagashi 1"),
      placeholder("wagashi 2"),
    ],
    primaryCategory: {
      title: "Cake",
      slug: "cake",
    },
    secondaryCategories: [
      {
        title: "쌀파운드 / 화과자",
        slug: "rice-pound-wagashi",
        primaryCategorySlug: "cake",
      },
    ],
    featured: true,
  },
  {
    _id: "portfolio-4",
    title: "원데이 베이킹클래스",
    slug: "one-day-baking-class",
    summary: "떡케이크, 쌀파운드, 화과자 등을 직접 만들어보는 원데이 클래스",
    description:
      "예약제로 운영하는 소규모 클래스입니다. 케이크와 디저트를 직접 만들고 포장까지 경험할 수 있으며, 가능한 수업 일정은 채널 문의로 확인합니다.",
    shootDate: "2026-03-29",
    location: "예약제 클래스 / 봉명동 공방",
    mediaType: "video",
    youtubeUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    coverImage: placeholder("one day baking class cover"),
    gallery: [],
    primaryCategory: {
      title: "Class",
      slug: "class",
    },
    secondaryCategories: [
      {
        title: "원데이클래스",
        slug: "one-day-class",
        primaryCategorySlug: "class",
      },
    ],
    featured: true,
  },
];

export const mockPackages: PackagePlan[] = [
  {
    _id: "package-1",
    title: "앙금플라워 떡케이크",
    price: "가격표 확인",
    description: "우리쌀로 만든 떡케이크에 앙금꽃을 올리는 더멜로우 대표 메뉴",
    image: placeholder("flower rice cake menu"),
    features: [
      "꽃색과 문구 맞춤 상담",
      "부모님 선물, 생신, 백일/돌잔치 추천",
      "떡케이크 종류 및 가격표 링크 제공",
      "100% 예약제 제작",
    ],
    note: "정확한 가격은 떡케이크 가격 안내 링크와 주문서 확인 후 확정합니다.",
    badge: "Rice Cake",
    order: 1,
  },
  {
    _id: "package-2",
    title: "쌀파운드케이크",
    price: "가격표 확인",
    description: "글루텐프리로 즐기기 좋은 촉촉한 쌀파운드케이크",
    image: placeholder("rice pound cake menu"),
    features: [
      "증기로 쪄내는 쌀 디저트",
      "선물용 구성 상담 가능",
      "쌀케이크 종류 및 가격표 링크 제공",
      "재료와 가능한 맛은 시즌에 따라 변동",
    ],
    note: "원하는 구성과 수량을 함께 문의해 주세요.",
    badge: "Gluten Free",
    order: 2,
  },
  {
    _id: "package-3",
    title: "화과자 / 원데이 클래스",
    price: "문의",
    description: "화과자와 베이킹 체험, 드로잉 체험을 예약제로 운영합니다",
    image: placeholder("wagashi one day class menu"),
    features: [
      "화과자 선물 구성 상담",
      "원데이 베이킹클래스 운영",
      "드로잉 체험 1인 25,000원 안내 확인",
      "수업 일정은 채널 문의로 조율",
    ],
    note: "클래스와 체험 메뉴는 일정에 따라 운영 여부가 달라질 수 있습니다.",
    order: 3,
  },
];

export const mockContentLinks: ContentLink[] = [
  {
    _id: "content-1",
    title: "네이버 플레이스 리뷰와 사진",
    type: "review",
    source: "Naver Place",
    url: "https://map.naver.com/p/entry/place/1074958658?lng=127.3445723&lat=36.3522386&placePath=%2Fhome&entry=plt&searchType=place",
    description: "방문자 리뷰, 사진, 클립, 소식은 네이버 플레이스에서 함께 확인할 수 있습니다.",
    image: placeholder("naver place review photos"),
    publishedAt: "2026-04-01",
    featured: true,
  },
  {
    _id: "content-2",
    title: "떡케이크 종류 및 가격 안내",
    type: "blog",
    source: "Naver Blog",
    url: "https://blog.naver.com/sochice/223040126474",
    description: "앙금플라워 떡케이크 종류와 가격표를 확인하는 안내 글입니다.",
    image: placeholder("rice cake price blog"),
    publishedAt: "2023-03-01",
    featured: true,
  },
  {
    _id: "content-3",
    title: "쌀케이크 종류 및 가격 안내",
    type: "blog",
    source: "Naver Blog",
    url: "https://blog.naver.com/sochice/223040132855",
    description: "쌀파운드케이크와 쌀케이크 메뉴 가격표를 확인하는 안내 글입니다.",
    image: placeholder("rice pound price blog"),
    publishedAt: "2023-03-01",
    featured: true,
  },
  {
    _id: "content-4",
    title: "대전 이색카페 더멜로우 후기",
    type: "blog",
    source: "Tistory Review",
    url: "https://rani-rani.tistory.com/57",
    description: "공방 위치, 영업시간, 케이크와 클래스 후기를 소개한 외부 블로그 글입니다.",
    image: placeholder("the mellow blog review"),
    publishedAt: "2023-06-15",
    featured: true,
  },
];

export const mockNewsPosts: NewsPost[] = [
  {
    _id: "news-1",
    title: "100% 예약제 주문제작 안내",
    slug: "reservation-only-order",
    type: "notice",
    summary: "더멜로우는 예약제로 운영하며, 작업 중에는 통화 연결이 어려울 수 있습니다.",
    body:
      "주문 가능 여부는 네이버톡톡 또는 카카오톡 채널로 문의해 주세요. 케이크 종류, 희망 날짜, 디자인 레퍼런스, 픽업 시간을 함께 남겨주시면 순차적으로 답변드립니다.",
    publishedAt: "2026-04-01",
    image: placeholder("reservation notice"),
    active: true,
  },
  {
    _id: "news-2",
    title: "원데이 베이킹클래스 운영",
    slug: "one-day-baking-class-open",
    type: "class",
    summary: "떡케이크, 쌀파운드케이크, 화과자 등 클래스 일정을 문의로 확인하세요.",
    body:
      "소규모 예약제로 진행하는 원데이 베이킹클래스입니다. 가능한 수업 품목과 일정은 매장 상황에 따라 달라질 수 있어 채널 문의로 확인해 주세요.",
    publishedAt: "2026-03-20",
    image: placeholder("one day class news"),
    active: true,
  },
  {
    _id: "news-3",
    title: "가정의 달 시즌 케이크 선주문",
    slug: "family-month-preorder",
    type: "event",
    summary: "카네이션 케이크와 선물용 떡케이크는 시즌 전 미리 문의해 주세요.",
    body:
      "어버이날, 스승의날, 가족 행사 시즌에는 주문이 빠르게 마감될 수 있습니다. 원하시는 디자인과 수령일을 먼저 보내주시면 가능 일정을 안내드립니다.",
    publishedAt: "2026-03-01",
    image: placeholder("family month cake event"),
    active: true,
  },
];
