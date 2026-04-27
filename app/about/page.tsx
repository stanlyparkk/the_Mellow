import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/page-intro";
import { PortableImage } from "@/components/ui/portable-image";
import { getPortfolioItems, getSiteSettings } from "@/lib/sanity/fetchers";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "케이크 브랜드의 무드와 제작 철학을 소개합니다.",
  path: "/about",
});

export default async function AboutPage() {
  const [settings, portfolios] = await Promise.all([
    getSiteSettings(),
    getPortfolioItems(),
  ]);

  const highlighted = portfolios
    .filter((item) => item.mediaType === "photo")
    .slice(0, 2);
  const aboutHighlights =
    settings.aboutHighlights?.filter((item) => item.text?.trim()) || [];

  return (
    <div className="page-shell">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <PageIntro
            eyebrow="About The Bakery"
            title={settings.aboutTitle}
            description={settings.aboutBody}
            noWrapDesktop={false}
          />

          {aboutHighlights.length ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {aboutHighlights.map((item, index) => (
                <div
                  key={`${item.text}-${index}`}
                  className="page-panel relative overflow-hidden p-6 text-sm leading-7 text-stone/70"
                >
                  <div className="mb-4 h-2 w-12 rounded-full bg-gradient-to-r from-gold to-[#ead3aa]" />
                  {item.text}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {highlighted.map((item, index) => (
            <PortableImage
              key={item._id}
              image={item.coverImage}
              alt={item.title}
              priority={index === 0}
              className={
                index === 0
                  ? "h-[420px] sm:col-span-2 sm:h-[560px]"
                  : "h-[320px] transition duration-500 hover:-translate-y-1"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
