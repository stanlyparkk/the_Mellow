import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="section-kicker">404</p>
      <h1 className="mt-4 font-serif text-5xl text-stone">페이지를 찾을 수 없습니다</h1>
      <p className="mt-6 max-w-xl text-base leading-8 text-stone/70">
        주소가 변경되었거나 삭제되었을 수 있습니다. 갤러리 목록으로 이동해 다른 작업물을 살펴보세요.
      </p>
      <Link href="/portfolio" className="gold-button mt-8">
        Gallery
      </Link>
    </div>
  );
}
