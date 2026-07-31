import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCta from "@/components/layout/MobileCta";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Sports from "@/components/sections/Sports";
import Academy from "@/components/sections/Academy";
import Booking from "@/components/sections/Booking";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import Local from "@/components/sections/Local";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <Hero />
      <Stats />
      <Sports />
      <Academy />
      <Booking />
      <Gallery />
      <Reviews />
      <Local />
      <Faq />
      <Contact />
      <Footer />
      {/* spacer so the sticky mobile CTA never covers footer content */}
      <div className="h-16 md:hidden" />
      <MobileCta />
      <BackToTop />
    </main>
  );
}
