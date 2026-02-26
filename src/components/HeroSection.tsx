"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BAND_NAME, TAGLINE, LINKS, HERO_IMAGE } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center overflow-hidden px-4 py-12 text-center sm:min-h-[80vh] sm:py-16 md:min-h-[90vh] md:py-20">
      {/* Background: image (if set) + gradient + vignette + grid */}
      <div
        className="absolute inset-0 bg-black"
        aria-hidden
      />
      {HERO_IMAGE ? (
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            className="object-cover opacity-50"
            sizes="100vw"
            priority
          />
        </div>
      ) : null}
      <div
        className="absolute inset-0 opacity-60"
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
          boxShadow: "inset 0 0 120px 60px rgba(0,0,0,0.5)",
        }}
        aria-hidden
      />

      <motion.div
        className="relative z-10 flex flex-col items-center gap-5 sm:gap-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="font-darkfont max-w-[92vw] text-4xl tracking-[0.08em] text-white sm:text-5xl sm:tracking-[0.1em] md:text-6xl md:tracking-[0.12em] lg:text-7xl lg:tracking-[0.16em] xl:text-[4.5rem] xl:tracking-[0.18em]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            textShadow:
              "0 0 40px rgba(249, 115, 22, 0.4), 0 0 80px rgba(139, 92, 246, 0.15)",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            textRendering: "optimizeLegibility",
          }}
        >
          {BAND_NAME.toUpperCase()}
        </motion.h1>
        <motion.p
          className="text-sm font-medium uppercase tracking-widest text-zinc-400 sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          {TAGLINE}
        </motion.p>
        <motion.div
          className="flex w-full flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            asChild
            size="lg"
            className="min-h-[48px] w-full bg-primary text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90 sm:w-auto"
          >
            <a
              href={LINKS.spotify}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ouvir no Spotify"
            >
              Ouvir no Spotify
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-h-[48px] w-full border-amber-500/50 text-amber-500 transition-all hover:scale-105 hover:border-amber-500 hover:bg-amber-500/10 hover:text-amber-400 sm:w-auto"
          >
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver no YouTube"
            >
              Ver no YouTube
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
