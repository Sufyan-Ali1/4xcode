import { geistSans, geistMono } from "@/lib/fonts";
import "./globals.css";
import { pageMetadata } from "@/data/metadata";
import MotionProvider from "@/components/layout/MotionProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FormProvider } from "./context/FormContext";

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
          <MotionProvider>
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </MotionProvider>
        </FormProvider>
      </body>
    </html>
  );
}
