import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CmsNotice } from "@/components/sections/cms-notice";
import { getSiteSettings } from "@/lib/sanity/fetchers";
import { absoluteUrl } from "@/lib/utils";

import "@/app/globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: "더멜로우 | 대전 봉명동 주문제작 케이크",
    template: "%s | 더멜로우",
  },
  description:
    "대전 유성구 봉명동 더멜로우의 주문제작 케이크, 앙금플라워 떡케이크, 쌀파운드케이크, 화과자, 원데이클래스를 안내합니다.",
  keywords: [
    "대전 주문제작 케이크",
    "봉명동 케이크",
    "더멜로우",
    "앙금플라워 떡케이크",
    "쌀파운드케이크",
  ],
  openGraph: {
    title: "더멜로우 | 대전 봉명동 주문제작 케이크",
    description:
      "100% 예약제로 운영하는 대전 봉명동 주문제작 케이크 공방입니다.",
    url: absoluteUrl("/"),
    siteName: "더멜로우",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "더멜로우 | 대전 봉명동 주문제작 케이크",
    description:
      "100% 예약제로 운영하는 대전 봉명동 주문제작 케이크 공방입니다.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html lang="ko" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans text-stone antialiased">
        <CmsNotice />
        <Header brandName={settings.brandName} />
        <main>{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
