import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { DiscographySection } from "@/components/DiscographySection";
import { VideosSection } from "@/components/VideosSection";
import { NovidadesSection } from "@/components/NovidadesSection";
import { MerchSection } from "@/components/MerchSection";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";

const GallerySection = dynamic(() => import("@/components/GallerySection").then((m) => m.GallerySection), {
  loading: () => (
    <section className="bg-page px-4 py-12 md:py-24" aria-labelledby="galeria-placeholder">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 h-8 w-32 animate-pulse rounded bg-page-mid sm:mb-10 md:mb-12" />
        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 md:gap-5">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-[4/3] animate-pulse rounded-lg bg-page-mid" />
          ))}
        </div>
      </div>
    </section>
  ),
  ssr: true,
});

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-page pt-14 sm:pt-16">
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
