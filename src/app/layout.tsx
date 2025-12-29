import type { Metadata } from "next";
import QueryClientProvider from "@/constance/providers/query-client-provider";

import { iransansfanum } from "../lib/iransans-font";
import "./globals.css";

export const metadata: Metadata = {
  title: "داده پردازان بنیان آوا",
  description:
    "سایت رسمی داده پردازان بنیان آوا، ارائه دهنده خدمات پردازش داده و مشاوره فناوری اطلاعات.",
  keywords: "داده پردازان، بنیان آوا، پردازش داده، مشاوره فناوری اطلاعات",
  openGraph: {
    title: "داده پردازان بنیان آوا",
    description:
      "سایت رسمی داده پردازان بنیان آوا، ارائه دهنده خدمات پردازش داده و مشاوره فناوری اطلاعات.",
    images: [
      {
        url: "URL_to_image", // آدرس تصویر شما
        width: 1200,
        height: 630,
      },
    ],
    siteName: "داده پردازان بنیان آوا",
  },
  twitter: {
    card: "summary_large_image",
    title: "داده پردازان بنیان آوا",
    description:
      "سایت رسمی داده پردازان بنیان آوا، ارائه دهنده خدمات پردازش داده و مشاوره فناوری اطلاعات.",
    images: ["URL_to_image"], // آدرس تصویر شما
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body dir="rtl" className={`${iransansfanum.className} antialiased`}>
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
}
