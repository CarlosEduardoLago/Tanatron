import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { ListenSection } from "@/components/ListenSection";
import { MerchSection } from "@/components/MerchSection";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ListenSection />
      <MerchSection />
      <SocialLinks />
      <Footer />
    </main>
  );
}
