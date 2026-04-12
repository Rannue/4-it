// react
import { useEffect, useRef, useState } from 'react';

import './AnimatedAuditGoalText.css';

const REVEALED_COLOR = '#01111E';
const UNREVEALED_COLOR = '#D3D4DB';

type AnimatedAuditGoalTextProps = {
  /** Основной текст с покадровым раскрытием цвета при скролле. */
  text: string;
  /** Подпись слева (например капсом); если не передана — одна колонка на всю ширину. */
  asideLabel?: string;
};

/** Двухколоночный блок: опциональная подпись слева + анимированная строка справа. */
function AnimatedAuditGoalText({ text, asideLabel }: AnimatedAuditGoalTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [progress, setProgress] = useState(0);
  const hasAside = Boolean(asideLabel?.trim());

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      const start = viewportHeight * 0.9;
      const end = viewportHeight * 0.2;

      const raw = (start - rect.top) / (start - end);
      const clamped = Math.min(1, Math.max(0, raw));
      setProgress(clamped);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="section-wrapper animated-goal">
      <div
        className={
          hasAside ? 'animated-goal__grid' : 'animated-goal__grid animated-goal__grid--single'
        }
      >
        {hasAside ? (
          <aside className="animated-goal__aside">
            <span className="animated-goal__aside-label">{asideLabel}</span>
          </aside>
        ) : null}
        <div className="animated-goal__main">
          <p ref={ref} className="animated-goal__text">
            {(() => {
              const words = text.trim().split(/\s+/).filter(Boolean);
              const totalLetters = words.reduce((sum, word) => sum + word.length, 0);

              return words.map((word, wordIdx) => {
                const offset = words.slice(0, wordIdx).reduce((s, w) => s + w.length, 0);
                return (
                  <span key={wordIdx} className="animated-goal__word">
                    {word.split('').map((char, charIdx) => {
                      const letterIndex = offset + charIdx;
                      const threshold = totalLetters > 1 ? letterIndex / (totalLetters - 1) : 1;
                      const revealed = progress >= threshold;

                      return (
                        <span
                          key={`${wordIdx}-${charIdx}`}
                          style={{
                            color: revealed ? REVEALED_COLOR : UNREVEALED_COLOR,
                            transition: 'color 80ms linear',
                          }}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </span>
                );
              });
            })()}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AnimatedAuditGoalText;
