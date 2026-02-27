import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { DiscographySection } from "@/components/DiscographySection";
import { VideosSection } from "@/components/VideosSection";
import { NovidadesSection } from "@/components/NovidadesSection";
import { GallerySection } from "@/components/GallerySection";
import { MerchSection } from "@/components/MerchSection";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black pt-12 sm:pt-14 md:pt-16">
      <Header />
      <HeroSection />
      <AboutSection />
      <DiscographySection />
      <VideosSection />
      <NovidadesSection />
      <GallerySection />
      <MerchSection />
      <SocialLinks />
      <Footer />
    </main>
  );
}
