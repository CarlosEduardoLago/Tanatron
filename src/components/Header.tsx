"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BAND_NAME } from "@/lib/constants";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Onde Ouvir", href: "#onde-ouvir" },
  { label: "Merch", href: "#merch" },
  { label: "Redes", href: "#redes" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-800/80 bg-black/90 backdrop-blur-sm">
        <div className="flex h-14 items-center justify-between px-4 sm:h-16">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-logo text-xl tracking-widest text-white hover:text-amber-500/90 sm:text-2xl"
            aria-label={`${BAND_NAME} — início`}
          >
            {BAND_NAME.toUpperCase()}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Abrir menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              role="presentation"
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
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
              className="fixed left-0 top-0 z-[70] flex h-full w-full max-w-sm flex-col bg-zinc-900 shadow-2xl"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex h-14 items-center justify-between border-b border-zinc-800 px-4 sm:h-16">
                <span className="font-logo text-lg tracking-widest text-white sm:text-xl">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                  aria-label="Fechar menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col gap-1 p-4">
                {navItems.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className="block rounded-lg px-4 py-3 text-lg font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
