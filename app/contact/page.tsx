import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/page-intro";
import { getSiteSettings } from "@/lib/sanity/fetchers";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "케이크 주문과 상담 문의를 남겨주세요.",
  path: "/contact",
});

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const contactSteps = settings.contactSteps?.filter((step) => step.text?.trim()) || [];

  return (
    <div className="page-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <PageIntro
            eyebrow="Order / Contact"
            title={settings.contactHeading}
            description={settings.contactDescription}
            noWrapDesktop={false}
          />

          <dl className="mt-10 grid gap-6">
            {settings.reservationNotice ? (
              <div className="page-panel p-6">
                <dt className="text-xs uppercase tracking-[0.26em] text-gold">Notice</dt>
                <dd className="mt-3 text-base leading-8 text-stone/70">
                  {settings.reservationNotice}
                </dd>
              </div>
            ) : null}
            <div className="page-panel p-6">
              <dt className="text-xs uppercase tracking-[0.26em] text-gold">Phone</dt>
              <dd className="mt-3 text-lg text-stone">
                <a href={`tel:${settings.phone.replaceAll("-", "")}`}>{settings.phone}</a>
              </dd>
            </div>
            <div className="page-panel p-6">
              <dt className="text-xs uppercase tracking-[0.26em] text-gold">Email</dt>
              <dd className="mt-3 text-lg text-stone">
                <a href={`mailto:${settings.email}`}>{settings.email}</a>
              </dd>
            </div>
            <div className="page-panel p-6">
              <dt className="text-xs uppercase tracking-[0.26em] text-gold">Pickup Studio</dt>
              <dd className="mt-3 text-lg text-stone">{settings.address}</dd>
              {settings.naverMapUrl ? (
                <a
                  href={settings.naverMapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="outline-button mt-5"
                >
                  Naver Map
                </a>
              ) : null}
            </div>
          </dl>
        </div>

        <div className="page-panel p-8 sm:p-10">
          {settings.contactStepsTitle ? (
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              {settings.contactStepsTitle}
            </p>
          ) : null}
          {contactSteps.length ? (
            <div className="mt-6 grid gap-5">
              {contactSteps.map((step, index) => (
                <div
                  key={`${step.title || "step"}-${index}`}
                  className="rounded-[1.75rem] border border-stone/10 bg-white/70 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3e2c6] text-xs uppercase tracking-[0.22em] text-gold">
                      {index + 1}
                    </span>
                    <p className="text-xs uppercase tracking-[0.24em] text-gold">
                      {step.title || `Step ${index + 1}`}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-stone/70">{step.text}</p>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-4">
              {settings.naverTalkUrl ? (
                <a
                  href={settings.naverTalkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="gold-button"
                >
              Naver TalkTalk
                </a>
              ) : null}
              <a href={settings.kakaoUrl} target="_blank" rel="noreferrer" className="gold-button">
              Kakao Order
              </a>
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="outline-button"
              >
              Instagram DM
              </a>
          </div>

          <div className="mt-8 grid gap-3">
            {settings.orderFormUrl ? (
              <a href={settings.orderFormUrl} target="_blank" rel="noreferrer" className="outline-button justify-start">
                Order Form
              </a>
            ) : null}
            {settings.riceCakePriceUrl ? (
              <a href={settings.riceCakePriceUrl} target="_blank" rel="noreferrer" className="outline-button justify-start">
                Rice Cake Price Guide
              </a>
            ) : null}
            {settings.ricePoundPriceUrl ? (
              <a href={settings.ricePoundPriceUrl} target="_blank" rel="noreferrer" className="outline-button justify-start">
                Rice Pound Cake Guide
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
