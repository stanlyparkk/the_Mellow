import type { Metadata } from "next";
import Link from "next/link";

import { PageIntro } from "@/components/ui/page-intro";
import { PortableImage } from "@/components/ui/portable-image";
import { getPackages, getSiteSettings } from "@/lib/sanity/fetchers";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Menu / Price",
  description: "케이크 메뉴와 기본 가격대, 주문 옵션을 안내합니다.",
  path: "/packages",
});

export default async function PackagesPage() {
  const [settings, packages] = await Promise.all([getSiteSettings(), getPackages()]);
  const showCustomQuote =
    settings.packageCustomQuoteEnabled &&
    (settings.packageCustomQuoteEyebrow?.trim() || settings.packageCustomQuoteTitle?.trim());

  return (
    <div className="page-shell">
      <PageIntro
        eyebrow="Cake Menu / Price"
        title={settings.packageTitle || "행사 분위기와 예산에 맞춰 고르는 케이크 메뉴"}
        description={
          settings.packageDescription ||
          "기본 가격과 구성은 빠르게 확인하고, 문구 변경이나 장식 추가는 상담을 통해 맞춤으로 조정할 수 있습니다."
        }
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {packages.map((pkg) => (
          <article
            key={pkg._id}
            className="page-panel flex h-full flex-col overflow-hidden p-5 transition duration-300 hover:-translate-y-1"
          >
            <PortableImage image={pkg.image} alt={pkg.title} className="h-64" />
            <div className="flex items-center justify-between gap-4">
            <h2 className="mt-6 font-serif text-3xl text-stone">{pkg.title}</h2>
              {pkg.badge ? (
                <span className="mt-6 rounded-full bg-[#e8efe2] px-3 py-1 text-xs uppercase tracking-[0.24em] text-gold">
                  {pkg.badge}
                </span>
              ) : null}
            </div>
            <p className="mt-5 text-4xl font-semibold text-gold">{pkg.price}</p>
            <p className="mt-4 text-sm leading-7 text-stone/70">{pkg.description}</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-stone/75">
              {pkg.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            {pkg.note ? <p className="mt-6 text-sm leading-7 text-stone/60">{pkg.note}</p> : null}
          </article>
        ))}
      </div>

      {showCustomQuote ? (
        <div className="page-panel mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {settings.packageCustomQuoteEyebrow ? (
              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                {settings.packageCustomQuoteEyebrow}
              </p>
            ) : null}
            {settings.packageCustomQuoteTitle ? (
              <h3 className="mt-3 font-serif text-3xl text-stone">
                {settings.packageCustomQuoteTitle}
              </h3>
            ) : null}
          </div>
          <Link href="/contact" className="gold-button">
            Order Inquiry
          </Link>
        </div>
      ) : null}

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {settings.orderFormUrl ? (
          <a href={settings.orderFormUrl} target="_blank" rel="noreferrer" className="outline-button">
            Order Form
          </a>
        ) : null}
        {settings.riceCakePriceUrl ? (
          <a href={settings.riceCakePriceUrl} target="_blank" rel="noreferrer" className="outline-button">
            Rice Cake Price
          </a>
        ) : null}
        {settings.ricePoundPriceUrl ? (
          <a href={settings.ricePoundPriceUrl} target="_blank" rel="noreferrer" className="outline-button">
            Rice Cake Menu
          </a>
        ) : null}
      </div>
    </div>
  );
}
