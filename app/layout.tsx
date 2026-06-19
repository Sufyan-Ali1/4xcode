import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FormProvider } from "./context/FormContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "4xCode | AI-Powered Software, SaaS & Web Development Studio",
  description:
    "4xCode engineers high-performance SaaS, AI agents, and web platforms for ambitious brands. Senior team, 132+ products shipped. Start your project today. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <FormProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </FormProvider>
      </body>
    </html>
  );
}