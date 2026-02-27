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
    <section className="relative flex min-h-[60svh] flex-col items-center justify-center overflow-hidden sm:min-h-[75vh] md:min-h-[82vh]">
      <div className="absolute inset-0 bg-page" aria-hidden />

      {HERO_IMAGE && (
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
      )}

      <motion.div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 40%, rgba(30,27,75,0.4) 0%, transparent 50%), radial-gradient(ellipse 100% 100% at 50% 100%, rgba(249,115,22,0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(139,92,246,0.12) 0%, transparent 45%)",
        }}
        initial="hidden"
        animate="visible"
        variants={heroOverlayVariants}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: "inset 0 0 80px 40px rgba(0,0,0,0.15)" }}
        initial="hidden"
        animate="visible"
        variants={heroOverlayVariants}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/25 to-transparent"
        initial="hidden"
        animate="visible"
        variants={heroOverlayVariants}
        aria-hidden
      />
    </section>
  );
}
