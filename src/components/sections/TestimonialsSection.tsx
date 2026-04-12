// react
import { useCallback, useEffect, useId, useRef, useState } from 'react';

// assets
import asbLogo from '@/assets/img/partners/asb-new 1.svg';

import './TestimonialsSection.css';

const QUOTE =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

type TestimonialItem = {
  id: string;
  originalHref: string;
};

const ITEMS: TestimonialItem[] = [
  { id: '1', originalHref: '#' },
  { id: '2', originalHref: '#' },
  { id: '3', originalHref: '#' },
];

function NavChevronLeft() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavChevronRight() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CardLinkArrow() {
  const clipId = useId().replace(/:/g, '');
  return (
    <svg
      className="testimonials-card__link-icon"
      width={18}
      height={18}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M14.1663 5.83398L5.83301 14.1673"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66699 5.83398H14.167V13.334"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function TestimonialsSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateNav = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const eps = 4;
    setCanPrev(scrollLeft > eps);
    setCanNext(scrollLeft < scrollWidth - clientWidth - eps);
  }, []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    updateNav();
    el.addEventListener('scroll', updateNav, { passive: true });
    const ro = new ResizeObserver(updateNav);
    ro.observe(el);
    window.addEventListener('resize', updateNav);
    return () => {
      el.removeEventListener('scroll', updateNav);
      ro.disconnect();
      window.removeEventListener('resize', updateNav);
    };
  }, [updateNav]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = viewportRef.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>('.testimonials-card');
    const gap = 20;
    const step = (first?.offsetWidth ?? el.clientWidth * 0.72) + gap;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="section-wrapper">
        <div className="section-wrapper__inner">
          <div className="testimonials__shell">
            <header className="testimonials__head">
              <h2 id="testimonials-heading" className="testimonials__title">
                Что о нас говорят?
              </h2>
              <div className="testimonials__nav" role="group" aria-label="Навигация по отзывам">
                <button
                  type="button"
                  className="testimonials__nav-btn"
                  disabled={!canPrev}
                  aria-label="Предыдущий отзыв"
                  onClick={() => scrollByDir(-1)}
                >
                  <NavChevronLeft />
                </button>
                <button
                  type="button"
                  className="testimonials__nav-btn"
                  disabled={!canNext}
                  aria-label="Следующий отзыв"
                  onClick={() => scrollByDir(1)}
                >
                  <NavChevronRight />
                </button>
              </div>
            </header>

            <div className="testimonials__stage">
              <div ref={viewportRef} className="testimonials__viewport">
                <div className="testimonials__track">
                  {ITEMS.map(item => (
                    <article key={item.id} className="testimonials-card">
                      <p className="testimonials-card__quote">{QUOTE}</p>
                      <footer className="testimonials-card__footer">
                        <div className="testimonials-card__person">
                          <div className="testimonials-card__avatar" aria-hidden="true">
                            ИИ
                          </div>
                          <div className="testimonials-card__author">
                            <p className="testimonials-card__name">Иванов Иван Иванович</p>
                            <p className="testimonials-card__role">Должность</p>
                          </div>
                        </div>
                        <span className="testimonials-card__divider" aria-hidden="true" />
                        <img
                          src={asbLogo}
                          alt="АСБ Лизинг"
                          className="testimonials-card__logo"
                        />
                        <a href={item.originalHref} className="testimonials-card__link">
                          Смотреть оригинал
                          <CardLinkArrow />
                        </a>
                      </footer>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
