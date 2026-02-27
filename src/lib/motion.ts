/**
 * Configurações de animação reutilizáveis.
 * Respeita prefers-reduced-motion para acessibilidade.
 */

export const viewportOnce = { once: true, margin: "-80px" } as const;
export const viewportTight = { once: true, margin: "-60px" } as const;

/** Easing suave (ease-out-quad) */
const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

/** Transições: duração um pouco menor, curva suave */
export const tweenFast = { type: "tween" as const, duration: 0.25, ease: easeOut };
export const tweenSection = { type: "tween" as const, duration: 0.35, ease: easeOut };
export const tweenNormal = { type: "tween" as const, duration: 0.4, ease: easeOut };
export const tweenHero = { type: "tween" as const, duration: 0.5, ease: easeOut };

/** Variants para seções (scroll-triggered) — stagger mais legível */
export const sectionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

export const sectionItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: tweenSection },
};

/** Versão reduzida (apenas opacidade) para prefers-reduced-motion */
export const sectionContainerReduced = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0 },
  },
};

export const sectionItemReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2 } },
};

/** Entrada do hero (imagem) — fluida e perceptível */
export const heroImageVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 0.85, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export const heroImageVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

/** Overlays do hero — entrada suave após a imagem */
export const heroOverlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] },
  },
};

/** Footer / elementos no final da página */
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: tweenSection },
};

export const fadeInVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
};

/** Microinteração só em CTAs principais (scale leve) */
export const tapScale = { scale: 0.98 };
export const hoverScaleSubtle = { scale: 1.01 };
/** Galeria: scale bem sutil */
export const galleryHoverScale = 1.01;
export const galleryTapScale = 0.99;
