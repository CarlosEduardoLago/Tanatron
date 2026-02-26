import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { DiscographySection } from "@/components/DiscographySection";
import { VideosSection } from "@/components/VideosSection";
import { AgendaSection } from "@/components/AgendaSection";
import { GallerySection } from "@/components/GallerySection";
import { ListenSection } from "@/components/ListenSection";
import { MerchSection } from "@/components/MerchSection";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black pt-14 sm:pt-16">
      <Header />
      <HeroSection />
      <AboutSection />
      <DiscographySection />
      <VideosSection />
      <AgendaSection />
      <GallerySection />
      <ListenSection />
      <MerchSection />
      <SocialLinks />
      <Footer />
    </main>
  );
}
