/**
 * Configurações de animação reutilizáveis.
 * Respeita prefers-reduced-motion para acessibilidade.
 */

export const viewportOnce = { once: true, margin: "-80px" } as const;
export const viewportTight = { once: true, margin: "-60px" } as const;

/** Transição suave para entradas de seção */
export const tweenFast = { type: "tween" as const, duration: 0.25, ease: "easeOut" };
export const tweenNormal = { type: "tween" as const, duration: 0.4, ease: "easeOut" };
export const tweenSlow = { type: "tween" as const, duration: 0.6, ease: "easeOut" };

/** Variants para seções (scroll-triggered) */
export const sectionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const sectionItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: tweenNormal },
};

/** Versão reduzida (apenas opacidade) para prefers-reduced-motion */
export const sectionContainerReduced = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0 },
  },
};

export const sectionItemReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2 } },
};

/** Entrada do hero (imagem) */
export const heroImageVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: tweenSlow },
};

export const heroImageVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

/** Footer / elementos no final da página */
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: tweenNormal },
};

export const fadeInVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
};

/** Microinteração em botões/cards */
export const tapScale = { scale: 0.98 };
export const hoverScale = { scale: 1.02 };
export const hoverScaleSubtle = { scale: 1.01 };
