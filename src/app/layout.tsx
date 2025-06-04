import type { Metadata } from "next";
import Header from '@/components/layout/header'
import '@/components/layout/header.css'
import './globals.css'

export const metadata: Metadata = {
  title: "模倣アプリ",
  description: "勉強するよ",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}