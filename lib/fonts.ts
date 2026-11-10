import localFont from "next/font/local";

// Bundled Latin variable fonts keep development and builds independent of Google Fonts.
export const spaceGrotesk = localFont({
  src: "../public/fonts/space-grotesk-latin.woff2",
  weight: "300 700",
  style: "normal",
  display: "swap",
});

export const inter = localFont({
  src: "../public/fonts/inter-latin.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

export const geistSans = localFont({
  src: "../public/fonts/geist-latin.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-geist-sans",
});

export const geistMono = localFont({
  src: "../public/fonts/geist-mono-latin.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-geist-mono",
});

export const jakarta = localFont({
  src: "../public/fonts/plus-jakarta-sans-latin.woff2",
  weight: "200 800",
  style: "normal",
  display: "swap",
});

export const mono = localFont({
  src: "../public/fonts/jetbrains-mono-latin.woff2",
  weight: "100 800",
  style: "normal",
  display: "swap",
});
