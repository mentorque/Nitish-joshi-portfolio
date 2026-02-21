import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

type Variant = "fade-up" | "fade-in" | "scale-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
}: ScrollRevealProps) {
  const { ref, revealed, animationClass } = useScrollReveal({ variant });

  return (
    <div
      ref={ref}
      className={cn(
        !revealed && "scroll-reveal-init",
        revealed && animationClass,
        className
      )}
      style={delay > 0 ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
