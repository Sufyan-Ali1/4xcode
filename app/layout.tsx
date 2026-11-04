import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { pageMetadata } from "@/data/metadata";
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

export const metadata = pageMetadata.home;

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
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <FormProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </FormProvider>
      </body>
    </html>
  );
}
