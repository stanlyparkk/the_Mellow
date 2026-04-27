# 더멜로우

Next.js App Router, TypeScript, Tailwind CSS, Sanity CMS를 사용한 대전 봉명동 케이크 전문점 홍보 사이트입니다.

## 포함 페이지

- 메인 페이지
- About 페이지
- Gallery 목록 페이지
- Gallery 상세 페이지
- Menu / Price 페이지
- News 페이지
- Store Info 페이지
- Order / Contact 페이지
- Sanity Studio는 Cloudflare Worker 용량 제한 때문에 별도 운영 권장

## Studio에서 관리하는 항목

- 브랜드명과 메인 문구
- 100% 예약제 안내 문구
- 주소, 영업시간, 주차, 오시는 길, 지도 링크
- 네이버톡톡, 카카오톡, 주문서, 가격표 링크
- Gallery 카테고리와 작업물
- Menu / Price 항목
- 리뷰, 클립, 블로그 외부 링크
- 소식, 이벤트, 클래스 안내 글

## 환경변수

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-02-19
SANITY_API_READ_TOKEN=
```

공개 dataset이면 `SANITY_API_READ_TOKEN`은 비워둘 수 있습니다.

## 메모

- 이미지 설정은 Cloudflare 배포를 고려해 `next/image`를 unoptimized 모드로 맞춰두었습니다.
- Sanity 환경변수가 없더라도 더멜로우 샘플 데이터로 화면 확인이 가능합니다.
- 네이버 플레이스 원문은 동적 페이지라 fetch가 막힐 수 있어, 지도/리뷰는 외부 링크 카드로 연결하는 구조입니다.
- Cloudflare Free Workers 배포를 위해 공개 사이트 번들에서는 내장 `/studio` 라우트를 제외했습니다.
