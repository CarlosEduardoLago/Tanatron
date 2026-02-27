/**
 * Configurações de animação reutilizáveis.
 * Respeita prefers-reduced-motion para acessibilidade.
 */

export const viewportOnce = { once: true, margin: "-80px" } as const;
export const viewportTight = { once: true, margin: "-60px" } as const;

/** Easing dinâmico (ease-out-expo) — mais fluido */
const easeOut = [0.22, 0.61, 0.36, 1] as const;

/** Transições */
export const tweenFast = { type: "tween" as const, duration: 0.22, ease: easeOut };
export const tweenSection = { type: "tween" as const, duration: 0.4, ease: easeOut };
export const tweenNormal = { type: "tween" as const, duration: 0.45, ease: easeOut };
export const tweenHero = { type: "tween" as const, duration: 0.5, ease: easeOut };

/** Variants para seções — mais dinâmicos (y maior, easing marcado) */
export const sectionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const sectionItem = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: tweenSection },
};

/** Container com stagger mais marcado (galeria) */
export const sectionContainerFast = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

/** Item com leve x para direção (alternância visual) */
export const sectionItemFromLeft = {
  hidden: { opacity: 0, x: -20, y: 32 },
  show: { opacity: 1, x: 0, y: 0, transition: tweenSection },
};

/** Item vindo da direita (alternância) */
export const sectionItemFromRight = {
  hidden: { opacity: 0, x: 20, y: 32 },
  show: { opacity: 1, x: 0, y: 0, transition: tweenSection },
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

/** Microinterações em cards e CTAs */
export const tapScale = { scale: 0.98 };
export const hoverScaleSubtle = { scale: 1.02 };
export const hoverLift = { y: -4, transition: { duration: 0.2 } };
export const cardHover = { scale: 1.02, y: -2 };
export const cardTap = { scale: 0.98 };

/** Spring suave para microinterações mais orgânicas */
export const springSoft = { type: "spring" as const, stiffness: 400, damping: 25 };
export const springBouncy = { type: "spring" as const, stiffness: 300, damping: 20 };

/** Hover do header (nav links, ícones) */
export const navLinkHover = { y: -1, transition: { duration: 0.2 } };
export const iconHover = { scale: 1.12, transition: springSoft };
