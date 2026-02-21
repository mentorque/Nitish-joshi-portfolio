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
  threshold = 0.1,
  rootMargin = "0px 0px -40px 0px",
  once = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setRevealed(true);
          if (once && el) {
            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, revealed, animationClass: ANIMATION_CLASS[variant] };
}
