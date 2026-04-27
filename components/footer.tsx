"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { SiteSettings } from "@/lib/sanity/types";

export function Footer({ settings }: { settings: SiteSettings }) {
  const pathname = usePathname();

  return (
    <footer className="border-t border-stone/10 bg-[linear-gradient(180deg,rgba(255,254,248,0.7),rgba(223,232,214,0.72))]">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="text-[1.3rem] font-semibold tracking-[0.24em] text-stone">
            {settings.brandName}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-stone/70">
            {settings.bannerSubtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={settings.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="soft-chip"
            >
              Instagram
            </a>
            <a
              href={settings.kakaoUrl}
              target="_blank"
              rel="noreferrer"
              className="soft-chip"
            >
              KakaoTalk
            </a>
          </div>
        </div>

        <div className="grid gap-3 text-sm text-stone/70">
          <a href={`tel:${settings.phone.replaceAll("-", "")}`} className="hover:text-stone">
            {settings.phone}
          </a>
          <a href={`mailto:${settings.email}`} className="hover:text-stone">
            {settings.email}
          </a>
          <p>{settings.address}</p>
          <div className="flex flex-wrap gap-4 pt-2 uppercase tracking-[0.22em]">
            <Link href="/portfolio" className="hover:text-stone">
              Gallery
            </Link>
            <Link href="/packages" className="hover:text-stone">
              Menu
            </Link>
            <Link href="/news" className="hover:text-stone">
              News
            </Link>
            <Link href="/store" className="hover:text-stone">
              Store
            </Link>
            <Link href="/contact" className="hover:text-stone">
              Order
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
