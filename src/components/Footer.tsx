"use client";

import { motion } from "framer-motion";
import { BAND_NAME } from "@/lib/constants";
import { useReducedMotionContext } from "@/contexts/ReducedMotionContext";
import { fadeInVariants, fadeInVariantsReduced } from "@/lib/motion";

export function Footer() {
  const reduced = useReducedMotionContext();
  const variants = reduced ? fadeInVariantsReduced : fadeInVariants;

  return (
    <motion.footer
      className="overflow-x-clip border-t border-page-border px-4 py-8 text-center text-sm text-zinc-500 lg:px-12 xl:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
    >
      <p>
        {BAND_NAME} — {new Date().getFullYear()}
      </p>
    </motion.footer>
  );
}
