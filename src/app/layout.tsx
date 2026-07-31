import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "KAKX Arena — Box Cricket, Cricket Academy, Badminton & Pickleball | Ghaziabad",
  description: siteConfig.description,
  keywords: [
    "KAKX Arena", "sports arena Ghaziabad", "box cricket Wave City", "cricket academy Ghaziabad",
    "badminton court Ghaziabad", "pickleball Ghaziabad", "book sports slot",
  ],
  openGraph: {
    title: "KAKX Arena — Fuel Your Play",
    description: siteConfig.description,
    type: "website",
    images: ["/images/hero.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body className="bg-arena-bg text-white antialiased">
        {children}
      </body>
    </html>
  );
}
