import { useEffect, useRef, useState } from "react";

type RevealVariant = "fade-up" | "fade-in" | "scale-in";

const ANIMATION_CLASS: Record<RevealVariant, string> = {
  "fade-up": "animate-reveal-fade-up",
  "fade-in": "animate-reveal-fade-in",
  "scale-in": "animate-reveal-scale-in",
};

interface UseScrollRevealOptions {
  variant?: RevealVariant;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal({
  variant = "fade-up",
  threshold = 0.05,
  rootMargin = "0px 0px -120px 0px",
  once = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (rafId !== null) cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(() => {
            setRevealed(true);
            if (once && el) observer.unobserve(el);
            rafId = null;
          });
          break;
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return { ref, revealed, animationClass: ANIMATION_CLASS[variant] };
}
