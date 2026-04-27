import type { Metadata } from "next";
import Link from "next/link";

import { getContentLinks, getNewsPosts } from "@/lib/sanity/fetchers";
import { buildMetadata, formatDate } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "News",
  description: "더멜로우 소식, 이벤트, 클래스 안내와 리뷰/블로그 링크를 확인하세요.",
  path: "/news",
});

const typeLabel = {
  notice: "소식",
  event: "이벤트",
  class: "클래스",
};

const linkLabel = {
  review: "리뷰",
  clip: "클립",
  blog: "블로그",
  notice: "공지",
};

export default async function NewsPage() {
  const [posts, links] = await Promise.all([getNewsPosts(), getContentLinks()]);
  const activePosts = posts.filter((post) => post.active !== false);

  return (
    <div className="page-shell">
      <div className="max-w-3xl">
        <p className="section-kicker">News</p>
        <h1 className="mt-5 font-serif text-5xl leading-tight text-stone sm:text-6xl">
          더멜로우 소식
        </h1>
        <p className="mt-6 text-base leading-8 text-stone/70">
          시즌 주문 안내, 이벤트, 클래스 공지를 게시판 형태로 정리합니다.
        </p>
      </div>

      <section className="mt-12 overflow-hidden border-y border-stone/15">
        {activePosts.map((post) => (
          <Link
            key={post._id}
            href={`/news/${post.slug}`}
            className="grid gap-3 border-b border-stone/10 py-5 transition last:border-b-0 hover:bg-white/45 md:grid-cols-[8rem_1fr_9rem] md:items-center md:px-4"
          >
            <span className="text-sm font-semibold text-gold">{typeLabel[post.type]}</span>
            <span>
              <strong className="block text-lg font-semibold text-stone">{post.title}</strong>
              <span className="mt-1 block text-sm leading-6 text-stone/65">{post.summary}</span>
            </span>
            <span className="text-sm text-stone/55 md:text-right">{formatDate(post.publishedAt)}</span>
          </Link>
        ))}
      </section>

      <section className="mt-16">
        <p className="section-kicker">Reviews / Clips / Blog</p>
        <h2 className="mt-4 font-serif text-4xl text-stone">외부 콘텐츠 링크</h2>
        <div className="mt-8 overflow-hidden border-y border-stone/15">
          {links.map((item) => (
            <a
              key={item._id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="grid gap-3 border-b border-stone/10 py-5 transition last:border-b-0 hover:bg-white/45 md:grid-cols-[8rem_1fr_8rem] md:items-center md:px-4"
            >
              <span className="text-sm font-semibold text-gold">{linkLabel[item.type]}</span>
              <span>
                <strong className="block text-lg font-semibold text-stone">{item.title}</strong>
                {item.description ? (
                  <span className="mt-1 block text-sm leading-6 text-stone/65">
                    {item.description}
                  </span>
                ) : null}
              </span>
              <span className="text-sm text-stone/55 md:text-right">{item.source}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
