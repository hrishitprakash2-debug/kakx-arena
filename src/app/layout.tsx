import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import Analytics from "@/components/layout/Analytics";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://kakx-arena.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "KAKX Arena — Box Cricket, Badminton, Pickleball & Pro Academy | Ghaziabad",
  description: siteConfig.description,
  keywords: [
    "KAKX Arena", "sports arena Ghaziabad", "box cricket Wave City", "cricket academy Ghaziabad",
    "badminton court Ghaziabad", "pickleball Ghaziabad", "book sports slot",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "KAKX Arena — Fuel Your Play",
    description: siteConfig.description,
    type: "website",
    url: SITE_URL,
    images: ["/images/hero.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0D",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "KAKX Arena",
  image: `${SITE_URL}/images/hero.jpg`,
  url: SITE_URL,
  telephone: "+918375060708",
  priceRange: "₹200 - ₹325",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sector-11, Wave City",
    addressLocality: "Ghaziabad",
    addressRegion: "Uttar Pradesh",
    postalCode: "201015",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "82",
  },
  sameAs: ["https://www.instagram.com/kakx.arena"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body className="bg-arena-bg text-white antialiased">
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
