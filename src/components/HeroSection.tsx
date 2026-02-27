"use client";

import Image from "next/image";
import { HERO_IMAGE } from "@/lib/constants";

const heroImageSrc =
  process.env.NEXT_PUBLIC_BASE_PATH && HERO_IMAGE.startsWith("/")
    ? process.env.NEXT_PUBLIC_BASE_PATH + HERO_IMAGE
    : HERO_IMAGE;

export function HeroSection() {
  return (
    <section className="relative flex min-h-[min(100vh-3.5rem,72svh)] flex-col items-center justify-center overflow-hidden px-4 py-8 text-center sm:min-h-[80vh] sm:py-12 md:min-h-[90vh] md:py-20">
      {/* Background: image (if set) + gradient + vignette + grid */}
      <div
        className="absolute inset-0 bg-black"
        aria-hidden
      />
      {HERO_IMAGE ? (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-black" aria-hidden>
          <Image
            src={heroImageSrc}
            alt=""
            fill
            className="object-contain opacity-90 md:object-cover md:object-center"
            sizes="100vw"
            priority
          />
        </div>
      ) : null}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 40%, rgba(30, 27, 75, 0.4) 0%, transparent 50%), radial-gradient(ellipse 100% 100% at 50% 100%, rgba(249, 115, 22, 0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 45%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 80px 40px rgba(0,0,0,0.15)",
        }}
        aria-hidden
      />
      {/* Leve escurecimento na base */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/25 to-transparent pointer-events-none"
        aria-hidden
      />
    </section>
  );
}
