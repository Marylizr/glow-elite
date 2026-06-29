"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  direction?: "left" | "right";
};

export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  direction = "right",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.28,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ "--scroll-reveal-delay": `${delayMs}ms` } as CSSProperties}
      className={`scroll-reveal scroll-reveal-${direction} ${
        visible ? "scroll-reveal-visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
