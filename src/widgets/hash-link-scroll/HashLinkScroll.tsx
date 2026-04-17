// react
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Клики по ссылкам вида `<a href="#id">` на текущей странице: синхронизация hash с React Router
 * и явная прокрутка к элементу (нативный якорь в SPA часто ведёт себя нестабильно).
 */
function HashLinkScroll() {
  const navigate = useNavigate();
  const location = useLocation();
  const locationRef = useRef(location);

  useEffect(() => {
    locationRef.current = location;
  }, [location]);

  useEffect(() => {
    const onClickCapture = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const el = e.target;
      if (!(el instanceof Element)) return;
      const anchor = el.closest('a');
      if (!anchor) return;
      const raw = anchor.getAttribute('href');
      if (raw == null || !raw.startsWith('#') || raw.length < 2) return;
      if (anchor.target === '_blank') return;

      const id = decodeURIComponent(raw.slice(1));
      if (!id) return;
      const targetEl = document.getElementById(id);
      if (!targetEl) return;

      e.preventDefault();
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const { pathname, search } = locationRef.current;
      navigate({ pathname, search, hash: raw });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({
            behavior: reduceMotion ? 'auto' : 'smooth',
            block: 'start',
          });
        });
      });
    };

    document.addEventListener('click', onClickCapture, true);
    return () => document.removeEventListener('click', onClickCapture, true);
  }, [navigate]);

  return null;
}

export default HashLinkScroll;
