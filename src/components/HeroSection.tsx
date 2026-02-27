"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { HERO_IMAGE, BAND_NAME, TAGLINE } from "@/lib/constants";
import { heroImageVariants, heroImageVariantsReduced, heroOverlayVariants } from "@/lib/motion";

const heroImageSrc =
  process.env.NEXT_PUBLIC_BASE_PATH && HERO_IMAGE.startsWith("/")
    ? process.env.NEXT_PUBLIC_BASE_PATH + HERO_IMAGE
    : HERO_IMAGE;

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? heroImageVariantsReduced : heroImageVariants;

  return (
    <section className="relative flex min-h-[min(100vh-3rem,62svh)] flex-col items-center justify-center overflow-hidden px-2 py-4 text-center sm:min-h-[76vh] sm:px-4 sm:py-8 md:min-h-[82vh] md:py-12">
      <div
        className="absolute inset-0 bg-page"
        aria-hidden
      />
      {HERO_IMAGE ? (
        <motion.div
          className="absolute inset-0 flex items-center justify-center overflow-hidden bg-page"
          aria-hidden
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <Image
            src={heroImageSrc}
            alt={`${BAND_NAME} — ${TAGLINE}`}
            fill
            className="object-contain object-[center_38%] opacity-90"
            sizes="(min-width: 768px) 1280px, 100vw"
            priority
          />
        </motion.div>
      ) : null}
      <motion.div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 40%, rgba(30, 27, 75, 0.4) 0%, transparent 50%), radial-gradient(ellipse 100% 100% at 50% 100%, rgba(249, 115, 22, 0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 45%)",
        }}
        initial="hidden"
        animate="visible"
        variants={heroOverlayVariants}
        aria-hidden
      />
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        initial="hidden"
        animate="visible"
        variants={heroOverlayVariants}
        aria-hidden
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 80px 40px rgba(0,0,0,0.15)",
        }}
        initial="hidden"
        animate="visible"
        variants={heroOverlayVariants}
        aria-hidden
      />
      {/* Leve escurecimento na base */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/25 to-transparent pointer-events-none"
        initial="hidden"
        animate="visible"
        variants={heroOverlayVariants}
        aria-hidden
      />
    </section>
  );
}
