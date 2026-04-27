import Link from "next/link";

import { PortableImage } from "@/components/ui/portable-image";
import {
  getLatestNewsPosts,
  getSiteSettings,
} from "@/lib/sanity/fetchers";
import { formatDate } from "@/lib/utils";

export default async function HomePage() {
  const [settings, newsPosts] = await Promise.all([
    getSiteSettings(),
    getLatestNewsPosts(),
  ]);
  const latestNews = newsPosts[0];
  const showMoodCard =
    settings.homeMoodEnabled &&
    (settings.homeMoodTitle?.trim() || settings.homeMoodText?.trim());

  return (
    <div>
      <section className="container-shell grid gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-20">
        <div>
          <p className="section-kicker">Custom Cakes & Sweet Tables</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.02] text-stone sm:text-6xl lg:text-7xl">
            {settings.bannerTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone/70">
            {settings.bannerSubtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/portfolio" className="gold-button">
              Gallery View
            </Link>
            <Link href="/contact" className="outline-button">
              Order Guide
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 hidden h-52 w-52 rounded-full border border-white/70 bg-white/40 blur-2xl lg:block" />
          <PortableImage
            image={settings.heroImage}
            alt={settings.brandName}
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-[440px] sm:h-[560px] lg:h-[700px]"
          />
          {showMoodCard ? (
            <div className="page-panel absolute bottom-6 left-6 max-w-xs p-5 sm:bottom-8 sm:left-8">
              {settings.homeMoodTitle ? (
                <p className="text-xs uppercase tracking-[0.32em] text-gold">
                  {settings.homeMoodTitle}
                </p>
              ) : null}
              {settings.homeMoodText ? (
                <p className="mt-3 text-base leading-7 text-stone/70">
                  {settings.homeMoodText}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      <section className="container-shell py-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="page-panel">
            <p className="section-kicker">Store Info</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-stone">
              대전 유성구 봉명동 도안센트럴프라자 518호
            </h2>
            <p className="mt-5 text-base leading-8 text-stone/70">{settings.directionInfo}</p>
            <dl className="mt-6 grid gap-4">
              {(settings.businessHours || []).map((item) => (
                <div
                  key={`${item.day}-${item.hours}`}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-[1.25rem] border border-stone/10 bg-white/70 p-4"
                >
                  <dt className="font-semibold text-stone">{item.day}</dt>
                  <dd className="text-gold">{item.hours}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/store" className="gold-button">
                Store Info
              </Link>
              {settings.naverMapUrl ? (
                <a
                  href={settings.naverMapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="outline-button"
                >
                  Naver Map
                </a>
              ) : null}
            </div>
          </div>

          <div className="page-panel">
            <p className="section-kicker">Reservation Notice</p>
            <p className="mt-4 text-xl leading-9 text-stone">
              {settings.reservationNotice}
            </p>
            <p className="mt-5 text-base leading-8 text-stone/70">
              {settings.parkingInfo}
            </p>
          </div>
        </div>
      </section>

      {latestNews ? (
        <section className="container-shell pb-16 pt-8 lg:pb-24 lg:pt-14">
          <Link
            href={`/news/${latestNews.slug}`}
            className="group block border-y border-stone/15 py-8 transition hover:border-gold"
          >
            <div className="grid gap-6 lg:grid-cols-[0.28fr_1fr_0.18fr] lg:items-center">
              <p className="section-kicker">News</p>
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold">
                  <span>{latestNews.type}</span>
                  <span>{formatDate(latestNews.publishedAt)}</span>
                </div>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-stone sm:text-4xl">
                  {latestNews.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-stone/70">{latestNews.summary}</p>
              </div>
              <span className="text-sm uppercase tracking-[0.22em] text-gold transition group-hover:translate-x-1">
                Read
              </span>
            </div>
          </Link>
        </section>
      ) : null}
    </div>
  );
}
