"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BAND_NAME, LINKS } from "@/lib/constants";
import { navLinkHover, iconHover } from "@/lib/motion";

const navItems = [
  { label: "HOME", href: "#" },
  { label: "NOVIDADES", href: "#novidades" },
  { label: "BIOGRAFIA", href: "#sobre" },
  { label: "DISCOGRAFIA", href: "#discografia" },
  { label: "FOTOS", href: "#galeria" },
  { label: "VÍDEOS", href: "#videos" },
  { label: "INSTAGRAM", href: "#instagram" },
  { label: "CONTATO", href: "#redes" },
];

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C8.333.014 8.741 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const socialLinks = [
  { key: "spotify", href: LINKS.spotify, label: "Spotify", icon: SpotifyIcon, color: "text-[#1ed760] hover:text-[#1ed760]" },
  { key: "youtube", href: LINKS.youtube, label: "YouTube", icon: YoutubeIcon, color: "text-zinc-400 hover:text-red-500" },
  { key: "instagram", href: LINKS.instagram, label: "Instagram", icon: InstagramIcon, color: "text-zinc-400 hover:text-violet-400" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.body.style.overflowX = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.overflowX = "hidden";
    };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 w-full max-w-full overflow-x-clip border-b border-page-border/80 bg-page/95 backdrop-blur-sm">
        <div className="flex h-14 min-w-0 items-center justify-between gap-4 overflow-x-clip px-4 sm:h-16 lg:mx-auto lg:max-w-7xl lg:px-8 xl:px-12">
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="shrink-0 font-darkfont text-xl tracking-widest text-white hover:text-amber-500/90 sm:text-2xl"
            aria-label={`${BAND_NAME} — início`}
            whileHover={navLinkHover}
          >
            {BAND_NAME.toUpperCase()}
          </motion.a>

          {/* Desktop: nav + social */}
          <nav aria-label="Menu principal" className="hidden items-center gap-0.5 lg:flex xl:gap-1">
            {navItems.map(({ label, href }) => (
              <motion.a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="rounded px-1.5 py-2 text-[11px] font-medium uppercase tracking-wider text-zinc-400 transition hover:bg-page-mid hover:text-white xl:px-2.5 xl:text-xs 2xl:px-3 2xl:text-sm"
                whileHover={navLinkHover}
              >
                {label}
              </motion.a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 lg:flex lg:gap-3">
            {socialLinks.map(({ key, href, label, icon: Icon, color }) => (
              <motion.a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-9 w-9 items-center justify-center rounded-full border border-page-border bg-page-surface/80 transition hover:border-zinc-600 ${color}`}
                aria-label={label}
                whileHover={iconHover}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>

          {/* Mobile: hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-page-mid hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-page lg:hidden"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Abrir menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              role="presentation"
              className="fixed inset-0 z-[60] bg-page/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              aria-hidden
            />
            <motion.nav
              role="dialog"
              aria-label="Menu de navegação"
              className="fixed left-0 top-0 z-[70] flex h-full w-full max-w-sm flex-col bg-page-surface shadow-2xl"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex h-14 items-center justify-between border-b border-page-border px-4 sm:h-16">
                <span className="font-logo text-lg tracking-widest text-white sm:text-xl">Menu</span>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-page-mid hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-page-surface"
                  aria-label="Fechar menu"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
                {navItems.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className="block rounded-lg px-4 py-3 text-lg font-medium text-zinc-300 transition hover:bg-page-mid hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
                <li className="mt-4 border-t border-page-border pt-4">
                  <span className="mb-2 block px-4 text-sm font-medium uppercase tracking-wider text-zinc-500">Redes</span>
                  <div className="flex flex-wrap gap-2 px-4">
                    {socialLinks.map(({ key, href, label, icon: Icon, color }) => (
                      <motion.a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex h-10 w-10 items-center justify-center rounded-full border border-page-border bg-page-mid/80 transition ${color}`}
                        aria-label={label}
                        whileHover={iconHover}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
