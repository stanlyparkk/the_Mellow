import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PortableImage } from "@/components/ui/portable-image";
import { getNewsPostBySlug, getNewsPosts } from "@/lib/sanity/fetchers";
import { buildMetadata, formatDate } from "@/lib/utils";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const typeLabel = {
  notice: "소식",
  event: "이벤트",
  class: "클래스",
};

export async function generateStaticParams() {
  const posts = await getNewsPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "News",
      description: "소식 글을 찾을 수 없습니다.",
      path: `/news/${slug}`,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.summary,
    path: `/news/${post.slug}`,
  });
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="page-shell">
      <div className="mx-auto max-w-4xl">
        <Link href="/news" className="text-sm uppercase tracking-[0.22em] text-gold">
          News List
        </Link>
        <div className="mt-8 border-b border-stone/15 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-stone/60">
            <span className="font-semibold text-gold">{typeLabel[post.type]}</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <h1 className="mt-5 font-serif text-5xl leading-tight text-stone sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone/70">{post.summary}</p>
        </div>

        <PortableImage image={post.image} alt={post.title} className="mt-10 h-[460px]" />

        <div className="mt-10 whitespace-pre-line text-base leading-9 text-stone/78">
          {post.body}
        </div>

        {post.linkUrl ? (
          <a href={post.linkUrl} target="_blank" rel="noreferrer" className="gold-button mt-10">
            Related Link
          </a>
        ) : null}
      </div>
    </article>
  );
}
