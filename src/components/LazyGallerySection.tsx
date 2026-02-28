"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const GallerySection = dynamic(() => import("@/components/GallerySection").then((m) => m.GallerySection), {
  loading: () => (
    <section className="overflow-x-clip bg-page px-4 py-12 md:py-24" aria-labelledby="galeria-placeholder">
      <div className="mx-auto min-w-0 max-w-6xl">
        <div className="mb-6 h-8 w-32 animate-pulse rounded bg-page-mid sm:mb-10 md:mb-12" />
        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 md:gap-5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="aspect-[4/3] animate-pulse rounded-lg bg-page-mid" />
          ))}
        </div>
      </div>
    </section>
  ),
  ssr: true,
});

/** Carrega a galeria apenas quando o usuário rola perto dela (economia de JS e imagens no carregamento inicial) */
export function LazyGallerySection() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setShouldLoad(true);
      },
      { rootMargin: "200px", threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-1" aria-hidden />
      {shouldLoad ? <GallerySection /> : (
        <section className="overflow-x-clip bg-page px-4 py-12 md:py-24" aria-labelledby="galeria-placeholder">
          <div className="mx-auto min-w-0 max-w-6xl">
            <div className="mb-6 h-8 w-32 animate-pulse rounded bg-page-mid sm:mb-10 md:mb-12" />
            <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 md:gap-5">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-[4/3] animate-pulse rounded-lg bg-page-mid" />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
