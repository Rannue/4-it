// react
import { useEffect, useRef, useState, type ReactNode } from 'react';

import './ScrollReveal.css';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay: `index * staggerStepMs` after the element intersects. */
  staggerIndex?: number;
  staggerStepMs?: number;
};

function motionReduced(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function ScrollReveal({
  children,
  className,
  staggerIndex = 0,
  staggerStepMs = 70,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const revealTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [visible, setVisible] = useState(() => motionReduced());
  const delayMs = staggerIndex * staggerStepMs;

  useEffect(() => {
    if (motionReduced()) {
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          const show = () => {
            revealTimeoutRef.current = null;
            setVisible(true);
          };
          if (delayMs > 0) {
            revealTimeoutRef.current = window.setTimeout(show, delayMs);
          } else {
            show();
          }
        });
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (revealTimeoutRef.current !== null) {
        clearTimeout(revealTimeoutRef.current);
      }
    };
  }, [delayMs]);

  const rootClass = ['scroll-reveal', visible ? 'scroll-reveal--visible' : null, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={rootClass}>
      {children}
    </div>
  );
}
