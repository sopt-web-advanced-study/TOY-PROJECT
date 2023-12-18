import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '심심스 1조',
  description: '도윤가영혠이의 프로젝트입니다',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
