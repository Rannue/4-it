// react
import { useEffect, useRef, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';

import { usePrefersReducedMotion } from '@/shared/hooks/usePrefersReducedMotion';

import './HomeCustomCursor.css';

const TEXTURE_ZONE_SELECTOR = '[data-home-texture-cursor]';

function subscribeFinePointer(onChange: () => void) {
  const mq = window.matchMedia('(pointer: fine)');
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

function getFinePointerSnapshot() {
  return window.matchMedia('(pointer: fine)').matches;
}

function getFinePointerServerSnapshot() {
  return false;
}

function useFinePointer(): boolean {
  return useSyncExternalStore(
    subscribeFinePointer,
    getFinePointerSnapshot,
    getFinePointerServerSnapshot
  );
}

const LERP_LEAD = 0.42;
const LERP_T1 = 0.32;
const LERP_T2 = 0.22;

function setDotTransform(el: HTMLDivElement | null, x: number, y: number) {
  if (!el) {
    return;
  }
  el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
}

function isOverHomeTexture(clientX: number, clientY: number): boolean {
  const el = document.elementFromPoint(clientX, clientY);
  return Boolean(el?.closest(TEXTURE_ZONE_SELECTOR));
}

export default function HomeCustomCursor() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const finePointer = useFinePointer();
  const disabled = prefersReducedMotion || !finePointer;

  const rootRef = useRef<HTMLDivElement>(null);
  const leadRef = useRef<HTMLDivElement>(null);
  const t1Ref = useRef<HTMLDivElement>(null);
  const t2Ref = useRef<HTMLDivElement>(null);

  const targetRef = useRef({ x: 0, y: 0 });
  const leadRefPos = useRef({ x: 0, y: 0 });
  const t1Pos = useRef({ x: 0, y: 0 });
  const t2Pos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const movedRef = useRef(false);
  const overTextureRef = useRef(false);

  useEffect(() => {
    if (disabled) {
      return;
    }

    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const over = isOverHomeTexture(x, y);
      overTextureRef.current = over;

      if (!over) {
        rootRef.current?.classList.remove('home-custom-cursor-root--active');
        movedRef.current = false;
        return;
      }

      if (!movedRef.current) {
        movedRef.current = true;
        targetRef.current = { x, y };
        leadRefPos.current = { x, y };
        t1Pos.current = { x, y };
        t2Pos.current = { x, y };
        setDotTransform(leadRef.current, x, y);
        setDotTransform(t1Ref.current, x, y);
        setDotTransform(t2Ref.current, x, y);
        rootRef.current?.classList.add('home-custom-cursor-root--active');
        return;
      }
      targetRef.current = { x, y };
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [disabled]);

  useEffect(() => {
    if (disabled) {
      return;
    }

    let alive = true;

    const tick = () => {
      if (!alive) {
        return;
      }

      if (overTextureRef.current) {
        const tg = targetRef.current;
        const L = leadRefPos.current;
        const A = t1Pos.current;
        const B = t2Pos.current;

        L.x += (tg.x - L.x) * LERP_LEAD;
        L.y += (tg.y - L.y) * LERP_LEAD;
        A.x += (L.x - A.x) * LERP_T1;
        A.y += (L.y - A.y) * LERP_T1;
        B.x += (A.x - B.x) * LERP_T2;
        B.y += (A.y - B.y) * LERP_T2;

        setDotTransform(leadRef.current, L.x, L.y);
        setDotTransform(t1Ref.current, A.x, A.y);
        setDotTransform(t2Ref.current, B.x, B.y);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      alive = false;
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [disabled]);

  if (disabled) {
    return null;
  }

  return createPortal(
    <div ref={rootRef} className="home-custom-cursor-root" aria-hidden>
      <div
        ref={t2Ref}
        className="home-custom-cursor__dot home-custom-cursor__trail home-custom-cursor__trail--2"
      />
      <div
        ref={t1Ref}
        className="home-custom-cursor__dot home-custom-cursor__trail home-custom-cursor__trail--1"
      />
      <div ref={leadRef} className="home-custom-cursor__dot home-custom-cursor__lead" />
    </div>,
    document.body
  );
}
