import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAKX ARENA | Play. Compete. Dominate. | Wave City, Ghaziabad",
  description: "Premium sports facility in Wave City, Ghaziabad. Book Badminton, Football, Cricket, Pickleball courts. Open 24 hours. 4.8★ rated.",
  keywords: ["sports arena ghaziabad", "kakx arena", "wave city sports", "badminton court ghaziabad", "football turf ghaziabad", "box cricket ghaziabad"],
  openGraph: {
    title: "KAKX ARENA | Premium Sports Facility",
    description: "Book Badminton, Football, Cricket, Pickleball in Wave City, Ghaziabad.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-black text-white antialiased">{children}</body>
    </html>
  );
}
