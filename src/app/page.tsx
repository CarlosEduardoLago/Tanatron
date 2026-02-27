import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { NovidadesSection } from "@/components/NovidadesSection";
import { AboutSection } from "@/components/AboutSection";
import { DiscographySection } from "@/components/DiscographySection";
import { VideosSection } from "@/components/VideosSection";
import { GallerySection } from "@/components/GallerySection";
import { MerchSection } from "@/components/MerchSection";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-page pt-12 sm:pt-14 md:pt-16">
      <Header />
      <HeroSection />
      <NovidadesSection />
      <AboutSection />
      <DiscographySection />
      <VideosSection />
      <GallerySection />
      <MerchSection />
      <SocialLinks />
      <Footer />
    </main>
  );
}
