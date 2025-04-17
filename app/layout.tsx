import "../styles/global.css";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "서울신내과",
  description: "서울신내과 공식 홈페이지입니다.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <script
          type="text/javascript"
          src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=216f4dec592e079802b6e64affeb8848&autoload=false"
        ></script>
      </head>
      <body>
        <header className="site-header">
          <img src="/images/logo.png" alt="서울신내과 로고" className="logo" />
        </header>
        <nav className="site-nav">
          <Link href="/">홈</Link>
          <Link href="/doctor">의료진 소개</Link>
          <Link href="/#clinic-section">진료안내</Link>
          <Link href="/#contact-section">오시는 길</Link>
        </nav>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          © 2025 서울신내과. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
