"use client";

import { motion } from "framer-motion";
import { LINKS } from "@/lib/constants";
import { sectionContainer, sectionItem, cardHover, cardTap } from "@/lib/motion";

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C8.333.014 8.741 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function AboutMeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

const linkConfig = [
  {
    key: "spotify",
    href: LINKS.spotify,
    label: "Spotify",
    ariaLabel: "Tanatron no Spotify",
    icon: SpotifyIcon,
    iconColor: "text-[#1ed760]",
    hoverBorder: "hover:border-[#1ed760]/50",
  },
  {
    key: "youtube",
    href: LINKS.youtube,
    label: "YouTube",
    ariaLabel: "Canal da Tanatron no YouTube",
    icon: YoutubeIcon,
    iconColor: "text-red-500",
    hoverBorder: "hover:border-red-500/50",
  },
  {
    key: "instagram",
    href: LINKS.instagram,
    label: "Instagram",
    ariaLabel: "Instagram @tanatronband",
    icon: InstagramIcon,
    iconColor: "text-zinc-300",
    hoverBorder: "hover:border-violet-500/50",
  },
  {
    key: "aboutMe",
    href: LINKS.aboutMe,
    label: "about.me",
    ariaLabel: "about.me/tanatron",
    icon: AboutMeIcon,
    iconColor: "text-zinc-300",
    hoverBorder: "hover:border-violet-500/50",
  },
] as const;

export function SocialLinks() {
  return (
    <motion.section
      id="redes"
      className="bg-page-mid/80 px-4 py-12 md:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionContainer}
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-2 font-logo text-2xl tracking-widest text-white sm:mb-3 sm:text-3xl md:text-4xl"
          variants={sectionItem}
        >
          REDES
        </motion.h2>
        <motion.div
          className="mb-6 h-0.5 w-16 bg-amber-500/80 sm:mb-8"
          variants={sectionItem}
          aria-hidden
        />
        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-6"
          variants={sectionItem}
        >
          {linkConfig.map(({ key, href, label, ariaLabel, icon: Icon, iconColor, hoverBorder }) => (
            <motion.a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`min-h-[48px] flex items-center justify-center gap-3 rounded-lg border border-page-border bg-page-surface/80 px-6 py-3 text-zinc-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-page ${hoverBorder}`}
              aria-label={ariaLabel}
              whileHover={cardHover}
              whileTap={cardTap}
              transition={{ duration: 0.2 }}
            >
              <Icon className={`h-6 w-6 shrink-0 ${iconColor}`} />
              <span>{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
