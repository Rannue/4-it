// react
import type { ReactNode } from 'react';

import './InterestingFacts.css';

/** Карточка: текст + иллюстрация как URL картинки или произвольный узел (`<svg>`, композиция и т.д.) */
export type InterestingFactItem =
  | {
      id?: string;
      description: ReactNode;
      visualVariant?: 'orange' | 'image';
      image: string;
      imageAlt?: string;
    }
  | {
      id?: string;
      description: ReactNode;
      visualVariant?: 'orange' | 'image';
      visual: ReactNode;
    };

type InterestingFactsProps = {
  items: readonly InterestingFactItem[];
  className?: string;
};

function InterestingFacts({ items, className }: InterestingFactsProps) {
  return (
    <div className={['interesting-facts__wrap', className].filter(Boolean).join(' ')}>
      <div className="section-wrapper__inner">
        <section className="facts">
          <div className="facts__grid">
            {items.map((item, index) => {
              const variant = item.visualVariant ?? 'image';
              const visualClass =
                variant === 'orange' ? 'facts-card__visual--orange' : 'facts-card__visual--image';
              const key = item.id ?? index;
              return (
                <article key={key} className="facts-card">
                  <div className={`facts-card__visual ${visualClass}`}>
                    {'image' in item ? (
                      <img
                        src={item.image}
                        alt={item.imageAlt ?? ''}
                        className="facts-card__image"
                      />
                    ) : (
                      <div className="facts-card__illustration">{item.visual}</div>
                    )}
                  </div>
                  <p className="facts-card__text">{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default InterestingFacts;
