// react
import { useEffect, useRef, useState, type ReactNode } from 'react';

// shared
import { usePrefersReducedMotion } from '@/shared/hooks/usePrefersReducedMotion';

import './AchievementsSection.css';

/** Счётчик 0 → target при появлении в зоне видимости (как rootMargin у ScrollReveal). */
function CountUpStat({ target, suffix = '+' }: { target: number; suffix?: string }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);
  const [value, setValue] = useState(0);

  const display = prefersReducedMotion ? target : value;

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const el = ref.current;
    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);

          const durationMs = 1100;
          const t0 = performance.now();
          const step = (now: number) => {
            const t = Math.min(1, (now - t0) / durationMs);
            const eased = 1 - (1 - t) ** 3;
            setValue(Math.round(eased * target));
            if (t < 1) {
              rafRef.current = requestAnimationFrame(step);
            } else {
              rafRef.current = null;
            }
          };
          rafRef.current = requestAnimationFrame(step);
        }
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [prefersReducedMotion, target]);

  return (
    <span ref={ref} className="achievements__accent" suppressHydrationWarning>
      {display}
      {suffix}
    </span>
  );
}

const ACHIEVEMENTS: Array<{ title: ReactNode; description: string }> = [
  {
    title: (
      <>
        <span className="achievements__highlight">Золотой</span> партнер <br />
        Битрикс24
      </>
    ),
    description:
      'Автоматизация бизнеса на Битрикс24: внедрение, сопровождение, обслуживание, проекты под ключ.',
  },
  {
    title: (
      <>
        <CountUpStat target={15} />
        <br /> лет опыта
      </>
    ),
    description: 'Предлагаем качественные услуги в IT‑сфере с 2008 года.',
  },
  {
    title: (
      <>
        Партнер <br />
        Kaspersky
      </>
    ),
    description: 'Поставляем лицензии и комплексные программные решения.',
  },
  {
    title: (
      <>
        <CountUpStat target={40} />
        <br /> направлений
      </>
    ),
    description: 'Более 40 направлений в IT: разработка, автоматизация, кибербезопасность.',
  },
];

function AchievementsSection() {
  return (
    <div className="achievements-section">
      <div className="achievements-section__inner">
        <section className="achievements" aria-label="Достижения компании">
          <div className="achievements__grid">
            {ACHIEVEMENTS.map((item, index) => (
              <article key={index} className="achievements__card">
                <h3 className="achievements__title">{item.title}</h3>
                <p className="achievements__text">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AchievementsSection;
