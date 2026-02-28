import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { DiscographySection } from "@/components/DiscographySection";
import { VideosSection } from "@/components/VideosSection";
import { NovidadesSection } from "@/components/NovidadesSection";
import { LazyGallerySection } from "@/components/LazyGallerySection";
import { MerchSection } from "@/components/MerchSection";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full min-w-0 max-w-full overflow-x-clip bg-page pt-14 sm:pt-16">
      <Header />
      <HeroSection />
      <AboutSection />
      <DiscographySection />
      <VideosSection />
      <NovidadesSection />
      <LazyGallerySection />
      <MerchSection />
      <SocialLinks />
      <Footer />
    </main>
  );
}
