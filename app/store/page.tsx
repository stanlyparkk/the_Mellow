import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/page-intro";
import { getSiteSettings } from "@/lib/sanity/fetchers";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Store Info",
  description: "더멜로우 주소, 지도, 영업시간, 주차와 예약 문의 방법을 안내합니다.",
  path: "/store",
});

function getNaverMapUrl(url?: string) {
  if (!url) {
    return null;
  }

  try {
    const parsed = new URL(url);
    const placeId = parsed.pathname.match(/place\/(\d+)/)?.[1];

    if (!placeId) {
      return url;
    }

    const params = new URLSearchParams({
      placePath: "/home",
      entry: "plt",
      searchType: "place",
    });
    const lng = parsed.searchParams.get("lng");
    const lat = parsed.searchParams.get("lat");

    if (lng) {
      params.set("lng", lng);
    }

    if (lat) {
      params.set("lat", lat);
    }

    return `https://map.naver.com/p/entry/place/${placeId}?${params.toString()}`;
  } catch {
    return url;
  }
}

export default async function StorePage() {
  const settings = await getSiteSettings();
  const hours = settings.businessHours?.filter((item) => item.day && item.hours) || [];
  const naverMapUrl = getNaverMapUrl(settings.naverMapUrl);

  return (
    <div className="page-shell">
      <PageIntro
        eyebrow="Store Info"
        title="더멜로우 방문과 예약 정보를 한곳에 정리했어요"
        description={
          settings.reservationNotice ||
          "100% 예약제 주문제작 매장입니다. 방문 전 채널 문의로 가능 일정을 확인해 주세요."
        }
        noWrapDesktop={false}
      />

      {naverMapUrl ? (
        <div className="mt-12 overflow-hidden rounded-[1.25rem] border border-stone/15 bg-white shadow-soft">
          <iframe
            src={naverMapUrl}
            title="더멜로우 네이버 지도"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <section className="grid gap-6">
          <div className="page-panel">
            <p className="section-kicker">Address</p>
            <h2 className="mt-4 font-serif text-4xl text-stone">{settings.address}</h2>
            {settings.directionInfo ? (
              <p className="mt-5 text-base leading-8 text-stone/70">{settings.directionInfo}</p>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-3">
              {naverMapUrl ? (
                <a
                  href={naverMapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="gold-button"
                >
                  Naver Map
                </a>
              ) : null}
              <a href={`tel:${settings.phone.replaceAll("-", "")}`} className="outline-button">
                Call
              </a>
            </div>
          </div>

          <div className="page-panel">
            <p className="section-kicker">Parking</p>
            <p className="mt-4 text-base leading-8 text-stone/70">
              {settings.parkingInfo || "주차 정보는 방문 전 매장으로 확인해 주세요."}
            </p>
          </div>
        </section>

        <section className="grid gap-6">
          <div className="page-panel">
            <p className="section-kicker">Business Hours</p>
            <div className="mt-5 grid gap-4">
              {hours.map((item) => (
                <div
                  key={`${item.day}-${item.hours}`}
                  className="rounded-[1.25rem] border border-stone/10 bg-white/70 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-lg font-semibold text-stone">{item.day}</p>
                    <p className="text-lg text-gold">{item.hours}</p>
                  </div>
                  {item.note ? (
                    <p className="mt-2 text-sm leading-7 text-stone/60">{item.note}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="page-panel">
            <p className="section-kicker">Quick Links</p>
            <div className="mt-5 grid gap-3">
              {settings.naverTalkUrl ? (
                <a
                  href={settings.naverTalkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="outline-button justify-start"
                >
                  Naver TalkTalk
                </a>
              ) : null}
              {settings.kakaoUrl ? (
                <a
                  href={settings.kakaoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="outline-button justify-start"
                >
                  Kakao Channel
                </a>
              ) : null}
              {settings.orderFormUrl ? (
                <a
                  href={settings.orderFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="outline-button justify-start"
                >
                  Order Form
                </a>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
