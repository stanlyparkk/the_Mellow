import type { Metadata } from "next";

import { PortfolioBrowser } from "@/components/portfolio-browser";
import { PageIntro } from "@/components/ui/page-intro";
import {
  getPortfolioItems,
  getPortfolioPrimaryCategories,
  getPortfolioSecondaryCategories,
  getSiteSettings,
} from "@/lib/sanity/fetchers";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description: "케이크 갤러리와 디저트 테이블 작업물을 둘러보세요.",
  path: "/portfolio",
});

export default async function PortfolioPage() {
  const [settings, primaryCategories, secondaryCategories, items] = await Promise.all([
    getSiteSettings(),
    getPortfolioPrimaryCategories(),
    getPortfolioSecondaryCategories(),
    getPortfolioItems(),
  ]);

  return (
    <div className="page-shell">
      <PageIntro
        eyebrow="Gallery"
        title={settings.portfolioTitle || "빈티지 레터링부터 파티 케이크까지 한눈에"}
        description={
          settings.portfolioDescription ||
          "행사 분위기와 디자인 무드별로 케이크 스타일을 정리해 두어 원하는 느낌을 빠르게 찾을 수 있습니다."
        }
      />

      <PortfolioBrowser
        items={items}
        primaryCategories={primaryCategories}
        secondaryCategories={secondaryCategories}
      />
    </div>
  );
}
