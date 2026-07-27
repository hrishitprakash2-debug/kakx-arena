import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Sports from "@/components/sections/Sports";
import Booking from "@/components/sections/Booking";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Sports />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
