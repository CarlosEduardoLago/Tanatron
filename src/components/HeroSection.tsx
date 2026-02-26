"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BAND_NAME, TAGLINE, LINKS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center">
      {/* Background: gradient + vignette + grid pattern */}
      <div
        className="absolute inset-0 bg-black"
        aria-hidden
      />
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
        className="relative z-10 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="font-logo text-6xl tracking-[0.35em] text-white sm:text-7xl md:text-8xl lg:text-9xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            textShadow:
              "0 0 50px rgba(249, 115, 22, 0.35), 0 0 100px rgba(139, 92, 246, 0.2)",
          }}
        >
          {BAND_NAME.toUpperCase()}
        </motion.h1>
        <motion.p
          className="font-medium uppercase tracking-widest text-zinc-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          {TAGLINE}
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
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
            className="border-amber-500/50 text-amber-500 transition-all hover:scale-105 hover:border-amber-500 hover:bg-amber-500/10 hover:text-amber-400"
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
