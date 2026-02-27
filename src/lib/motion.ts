/**
 * Configurações de animação reutilizáveis — dinâmicas e modernas.
 * Respeita prefers-reduced-motion para acessibilidade.
 */

export const viewportOnce = { once: true, margin: "-80px" } as const;
export const viewportTight = { once: true, margin: "-60px" } as const;

/** Spring moderno (leve bounce) */
export const spring = { type: "spring" as const, stiffness: 260, damping: 20 };
export const springSoft = { type: "spring" as const, stiffness: 200, damping: 25 };
export const springBouncy = { type: "spring" as const, stiffness: 300, damping: 18 };

/** Tween para entradas longas */
export const tweenFast = { type: "tween" as const, duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] };
export const tweenNormal = { type: "tween" as const, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] };
export const tweenSlow = { type: "tween" as const, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] };

/** Variants para seções — spring + stagger mais dinâmico */
export const sectionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export const sectionItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: spring },
};

/** Linha do título (revelar da esquerda) */
export const lineReveal = {
  hidden: { opacity: 0, scaleX: 0 },
  show: { opacity: 1, scaleX: 1, transition: { ...spring, delay: 0.1 } },
};

/** Versão reduzida para prefers-reduced-motion */
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

/** Hero — entrada mais dramática (scale + fade) */
export const heroImageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const heroImageVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

/** Overlays do hero (entrada em sequência) */
export const heroOverlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.35 } },
};

/** Footer — slide suave de baixo */
export const fadeInVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: springSoft },
};

export const fadeInVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
};

/** Microinterações — spring para feedback mais vivo */
export const tapScale = { scale: 0.96 };
export const hoverScale = { scale: 1.04 };
export const hoverScaleSubtle = { scale: 1.02 };

/** Card hover — levantar + scale */
export const cardHover = { y: -8, scale: 1.02, transition: spring };
export const cardTap = { scale: 0.98, transition: { duration: 0.15 } };
