// react
import type { ReactNode } from 'react';
import { useId } from 'react';

import './ProductTierComparisonSection.css';

/** Одна строка: жирное начало + обычный текст */
export type ProductTierComparisonFeature = {
  lead: string;
  rest: string;
};

export type ProductTierComparisonCard = {
  /** По желанию: иконка над заголовком */
  icon?: ReactNode;
  title: string;
  subtitle: string;
  /** Переопределяет `advantagesLabel` секции для этой карточки */
  advantagesLabel?: ReactNode;
  features: readonly ProductTierComparisonFeature[];
};

export type ProductTierComparisonSectionProps = {
  /** Опциональный заголовок над колонками */
  heading?: ReactNode;
  /** Подпись над списком преимуществ в каждой карточке (например «Преимущества:»). Можно переопределить в `card.advantagesLabel` */
  advantagesLabel?: ReactNode;
  /** Карточки (обычно 2) */
  cards: readonly ProductTierComparisonCard[];
  id?: string;
  className?: string;
};

function ProductTierComparisonSection({
  heading,
  advantagesLabel,
  cards,
  id,
  className,
}: ProductTierComparisonSectionProps) {
  const headingId = useId().replace(/:/g, '');

  return (
    <section
      id={id}
      className={['product-tier-comparison section-wrapper--py-only', className].filter(Boolean).join(' ')}
      aria-labelledby={heading ? headingId : undefined}
    >
      <div className="product-tier-comparison__inner">
        {heading != null ? (
          <h2 id={headingId} className="product-tier-comparison__heading">
            {heading}
          </h2>
        ) : null}
        <div className="product-tier-comparison__grid">
          {cards.map((card, ci) => {
            const listLabel = card.advantagesLabel ?? advantagesLabel;
            return (
              <article key={`${card.title}-${ci}`} className="product-tier-comparison__card">
                {card.icon != null ? (
                  <div className="product-tier-comparison__icon" aria-hidden>
                    {card.icon}
                  </div>
                ) : null}
                <h3 className="product-tier-comparison__title">{card.title}</h3>
                <p className="product-tier-comparison__subtitle">{card.subtitle}</p>
                {listLabel != null && listLabel !== '' ? (
                  <p className="product-tier-comparison__advantages-label">{listLabel}</p>
                ) : null}
                <ul className="product-tier-comparison__features">
                  {card.features.map((f, fi) => (
                    <li key={fi} className="product-tier-comparison__feature">
                      <p className="product-tier-comparison__feature-text">
                        <strong>{f.lead}</strong> {f.rest}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductTierComparisonSection;
