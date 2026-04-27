import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/page-intro";
import { PortableImage } from "@/components/ui/portable-image";
import { getSiteSettings } from "@/lib/sanity/fetchers";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "케이크 브랜드의 무드와 제작 철학을 소개합니다.",
  path: "/about",
});

export default async function AboutPage() {
  const settings = await getSiteSettings();
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

        <div>
          <PortableImage
            image={settings.heroImage}
            alt={`${settings.brandName} 대표 이미지`}
            priority
            className="h-[420px] sm:h-[560px]"
          />
        </div>
      </div>
    </div>
  );
}
