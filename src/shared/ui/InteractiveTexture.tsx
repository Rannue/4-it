// react
import { useCallback, useEffect, useLayoutEffect, useRef, type MouseEvent, type ReactNode } from 'react';

import { usePrefersReducedMotion } from '@/shared/hooks/usePrefersReducedMotion';

import './InteractiveTexture.css';

type InteractiveTextureProps = {
  children: ReactNode;
  className?: string;
  /** Параллакс от курсора — только на главной (`App`). */
  parallax?: boolean;
};

/** Насколько сдвигается слой текстуры (px) в противоположную сторону от курсора. */
const PARALLAX_MAX_PX = 14;
/** Скорость догона курсора / возврата в центр (0…1). */
const LERP = 0.14;

function finePointerHover(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

export default function InteractiveTexture({
  children,
  className,
  parallax = false,
}: InteractiveTextureProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ nx: 0, ny: 0 });
  const currentRef = useRef({ nx: 0, ny: 0 });
  const rafRef = useRef<number | null>(null);
  const tickRef = useRef<() => void>(() => {});
  const prefersReducedMotion = usePrefersReducedMotion();

  const parallaxActive = parallax && !prefersReducedMotion;

  const applyVisuals = useCallback(() => {
    const c = currentRef.current;
    const tx = -c.nx * PARALLAX_MAX_PX;
    const ty = -c.ny * PARALLAX_MAX_PX;
    parallaxRef.current?.style.setProperty('--itx', `${tx}px`);
    parallaxRef.current?.style.setProperty('--ity', `${ty}px`);
  }, []);

  useLayoutEffect(() => {
    if (!parallaxActive) {
      return;
    }
    tickRef.current = () => {
      rafRef.current = null;
      const c = currentRef.current;
      const t = targetRef.current;
      c.nx += (t.nx - c.nx) * LERP;
      c.ny += (t.ny - c.ny) * LERP;
      applyVisuals();

      if (Math.hypot(t.nx - c.nx, t.ny - c.ny) > 0.002) {
        rafRef.current = requestAnimationFrame(tickRef.current);
      }
    };
  }, [parallaxActive, applyVisuals]);

  useEffect(() => {
    if (parallax) {
      return;
    }
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    targetRef.current = { nx: 0, ny: 0 };
    currentRef.current = { nx: 0, ny: 0 };
    parallaxRef.current?.style.setProperty('--itx', '0px');
    parallaxRef.current?.style.setProperty('--ity', '0px');
  }, [parallax]);

  const ensureLoop = useCallback(() => {
    if (!parallaxActive || rafRef.current !== null) {
      return;
    }
    rafRef.current = requestAnimationFrame(tickRef.current);
  }, [parallaxActive]);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const updateTargetFromEvent = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const el = rootRef.current;
    if (!el) {
      return;
    }
    const r = el.getBoundingClientRect();
    if (r.width <= 0 || r.height <= 0) {
      return;
    }
    let nx = ((e.clientX - r.left) / r.width) * 2 - 1;
    let ny = ((e.clientY - r.top) / r.height) * 2 - 1;
    const k = 1.08;
    nx = Math.max(-1, Math.min(1, nx * k));
    ny = Math.max(-1, Math.min(1, ny * k));
    targetRef.current = { nx, ny };
  }, []);

  const handleMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!parallaxActive || !finePointerHover()) {
        return;
      }
      updateTargetFromEvent(e);
      ensureLoop();
    },
    [parallaxActive, updateTargetFromEvent, ensureLoop]
  );

  const handleLeave = useCallback(() => {
    targetRef.current = { nx: 0, ny: 0 };
    if (parallaxActive) {
      ensureLoop();
    }
  }, [parallaxActive, ensureLoop]);

  return (
    <div
      ref={rootRef}
      className={[
        'interactive-texture',
        parallax ? 'interactive-texture--parallax' : 'interactive-texture--static',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      data-reduced-motion={prefersReducedMotion ? 'true' : undefined}
      {...(parallax ? { 'data-home-texture-cursor': '' } : {})}
      onMouseMove={parallax ? handleMove : undefined}
      onMouseLeave={parallax ? handleLeave : undefined}
    >
      <div ref={parallaxRef} className="interactive-texture__parallax">
        {children}
      </div>
    </div>
  );
}
