// react
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';

import './SiteLoadingGate.css';

/** Progress never exceeds this until the window `load` event (real resources). */
const CAP_BEFORE_LOAD = 88;
/** Asymptotic time constant (ms): slower networks spend longer below the cap. */
const ASYMPTOTE_TAU_MS = 14000;
const HOLD_AT_FULL_MS = 350;

type SiteLoadingGateProps = {
  children: ReactNode;
};

function SiteLoadingOverlay({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const rafRef = useRef<number | null>(null);
  const doneRef = useRef(false);
  const loadCompletedRef = useRef(false);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    setExiting(true);
  }, []);

  const scheduleDismissAfterFull = useCallback(() => {
    setProgress(100);
    window.setTimeout(() => {
      finish();
      window.setTimeout(onDone, 450);
    }, HOLD_AT_FULL_MS);
  }, [finish, onDone]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onLoad = () => {
      if (loadCompletedRef.current) return;
      loadCompletedRef.current = true;
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      scheduleDismissAfterFull();
    };

    if (reduceMotion) {
      if (document.readyState === 'complete') {
        queueMicrotask(() => scheduleDismissAfterFull());
        return;
      }
      window.addEventListener('load', onLoad, { once: true });
      return () => window.removeEventListener('load', onLoad);
    }

    if (document.readyState === 'complete') {
      queueMicrotask(() => scheduleDismissAfterFull());
      return;
    }

    const start = performance.now();

    queueMicrotask(() => {
      if (document.readyState === 'interactive') {
        setProgress(p => Math.max(p, 42));
      }
    });

    const onDOMContentLoaded = () => {
      setProgress(p => Math.max(p, 36));
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', onDOMContentLoaded, { once: true });
    } else {
      queueMicrotask(onDOMContentLoaded);
    }

    window.addEventListener('load', onLoad, { once: true });

    const tick = (now: number) => {
      if (loadCompletedRef.current) return;
      const elapsed = now - start;
      const asymptotic = CAP_BEFORE_LOAD * (1 - Math.exp(-elapsed / ASYMPTOTE_TAU_MS));
      setProgress(p => Math.max(p, Math.min(asymptotic, CAP_BEFORE_LOAD)));
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('DOMContentLoaded', onDOMContentLoaded);
      window.removeEventListener('load', onLoad);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [finish, onDone, scheduleDismissAfterFull]);

  const p = Math.min(100, Math.max(0, progress));

  const overlayClass = exiting ? 'site-loading site-loading--exiting' : 'site-loading';

  return (
    <div
      className={overlayClass}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(p)}
      aria-label="Site loading"
    >
      <div className="site-loading__track-wrap">
        <span className="site-loading__percent" aria-hidden>
          {Math.round(p)}%
        </span>
        <div className="site-loading__track">
          <div className="site-loading__fill" style={{ ['--site-loading-p' as string]: `${p}%` }} />
        </div>
      </div>
    </div>
  );
}

function SiteLoadingGate({ children }: SiteLoadingGateProps) {
  // Intentionally no sessionStorage: show on every full reload (revisit later: once per session).
  const [showOverlay, setShowOverlay] = useState(true);

  const handleDone = useCallback(() => {
    setShowOverlay(false);
  }, []);

  return (
    <>
      {showOverlay ? <SiteLoadingOverlay onDone={handleDone} /> : null}
      {children}
    </>
  );
}

export default SiteLoadingGate;
