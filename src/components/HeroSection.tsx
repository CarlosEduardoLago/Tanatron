"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { HERO_IMAGE, BAND_NAME, TAGLINE } from "@/lib/constants";

const heroImageSrc =
  process.env.NEXT_PUBLIC_BASE_PATH && HERO_IMAGE.startsWith("/")
    ? process.env.NEXT_PUBLIC_BASE_PATH + HERO_IMAGE
    : HERO_IMAGE;

/* Borda + glow amber harmonioso com a paleta marrom */
const AMBER_BORDER = "1px solid rgba(245, 158, 11, 0.28)";
const AMBER_GLOW =
  "0 0 24px rgba(245, 158, 11, 0.1), 0 0 48px rgba(245, 158, 11, 0.05), inset 0 0 0 1px rgba(245, 158, 11, 0.12)";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.88]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.98]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], [0, 30]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0.25, 0.35]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[min(100vh-3.5rem,72svh)] min-w-0 max-w-full flex-col items-center justify-center overflow-x-clip px-4 pt-1 pb-3 text-center sm:min-h-[75vh] sm:pt-3 sm:pb-6 md:min-h-[80vh] md:pt-4 md:pb-8"
    >
      {/* Background: image (if set) + gradient + vignette */}
      <div
        className="absolute inset-0 bg-page"
        aria-hidden
      />
      {HERO_IMAGE ? (
        <motion.div
          className="absolute inset-0 flex items-center justify-center overflow-hidden bg-page"
          aria-hidden
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-[1%] rounded-sm pointer-events-none"
            style={{
              border: AMBER_BORDER,
              boxShadow: AMBER_GLOW,
            }}
            aria-hidden
          />
          <motion.div
            className="absolute inset-[1%] flex items-center justify-center overflow-hidden rounded-sm"
            style={{ opacity, scale, y: imageY }}
          >
            <Image
              src={heroImageSrc}
              alt={`${BAND_NAME} — ${TAGLINE}`}
              fill
              className="object-cover object-center opacity-95"
              sizes="(max-width: 767px) 100vw, (min-width: 768px) 1280px"
              priority
            />
          </motion.div>
        </motion.div>
      ) : null}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 40%, rgba(30, 27, 75, 0.4) 0%, transparent 50%), radial-gradient(ellipse 100% 100% at 50% 100%, rgba(249, 115, 22, 0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 45%)",
          opacity: overlayOpacity,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 60px 30px rgba(0,0,0,0.1)",
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
