// react
import type { ReactNode } from 'react';
import { useId } from 'react';

// components
import Button from '@/shared/ui/Button';

import './StackedFeatureCardsSection.css';

/**
 * Одна серая карточка преимущества:
 * - одна строка: `{ text: '…' }`
 * - две строки (подпись мелко + значение крупно): `{ text: 'Предоплата:', secondary: '3 месяца' }`
 * - то же через явные поля: `{ label: 'Предоплата:', value: '3 месяца' }`
 */
export type StackedFeatureCardFeature =
  | { text: ReactNode; secondary?: ReactNode; label?: never; value?: never }
  | { label: ReactNode; value: ReactNode; text?: never; secondary?: never };

export type StackedFeatureCard = {
  /** Номер «/ 01» слева; если передан icon — номер не показывается */
  cardIndex?: string;
  /** Иконка слева (например `<img src={icon} alt="" />` или SVG) */
  icon?: ReactNode;
  title: string;
  /** Кратко, кому подходит тариф */
  description: string;
  /** Заголовок и описание цветом акцента */
  titleAccent?: boolean;
  ctaLabel: string;
  ctaHref: string;
  /** Необязательная подпись у кнопки (например цена: «300 BYN в месяц») */
  priceNote?: ReactNode;
  /** Переопределяет `advantagesLabel` секции для этой карточки */
  featuresLabel?: ReactNode;
  features: readonly StackedFeatureCardFeature[];
};

export type StackedFeatureCardsSectionProps = {
  cards: readonly StackedFeatureCard[];
  heading?: ReactNode;
  /** Подпись над списком преимуществ (по умолчанию «Преимущества:»). У отдельной карточки можно задать свой `featuresLabel` */
  advantagesLabel?: ReactNode;
  ariaLabel?: string;
  className?: string;
  id?: string;
};

function isLabelValueFeature(
  f: StackedFeatureCardFeature
): f is { label: ReactNode; value: ReactNode } {
  return 'label' in f && 'value' in f;
}

function isTextSecondaryFeature(
  f: StackedFeatureCardFeature
): f is { text: ReactNode; secondary: ReactNode } {
  return 'text' in f && 'secondary' in f && f.secondary != null && f.secondary !== '';
}

function isTwoLineFeature(f: StackedFeatureCardFeature): boolean {
  return isLabelValueFeature(f) || isTextSecondaryFeature(f);
}

function CtaArrowIcon() {
  const clipId = useId().replace(/:/g, '');
  return (
    <svg
      width={20}
      height={20}
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

function formatCardIndex(index: number, explicit?: string) {
  if (explicit != null && explicit !== '') return explicit;
  return String(index + 1).padStart(2, '0');
}

function StackedFeatureCardsSection({
  cards,
  heading,
  advantagesLabel = 'Преимущества:',
  ariaLabel = 'Комплектации и услуги',
  className,
  id,
}: StackedFeatureCardsSectionProps) {
  const headingId = useId().replace(/:/g, '');

  return (
    <section
      id={id}
      className={['stacked-feature-cards', className].filter(Boolean).join(' ')}
      aria-labelledby={heading ? headingId : undefined}
      aria-label={heading ? undefined : ariaLabel}
    >
      <div className="section-wrapper">
        <div className="stacked-feature-cards__shell">
          <div className="stacked-feature-cards__container">
            {heading ? (
              <h2 id={headingId} className="stacked-feature-cards__heading">
                {heading}
              </h2>
            ) : null}
            {cards.map((card, index) => {
              const idx = formatCardIndex(index, card.cardIndex);
              const accent = Boolean(card.titleAccent);
              const hasIcon = Boolean(card.icon);
              const colLabel = card.featuresLabel ?? advantagesLabel;

              return (
                <div key={`${card.title}-${index}`} className="stacked-feature-cards__slot">
                  <article
                    className="stacked-feature-cards__card"
                    aria-labelledby={`sfc-title-${index}`}
                  >
                    <div className="stacked-feature-cards__card-inner">
                      <div className="stacked-feature-cards__idx-cell">
                        {hasIcon ? (
                          <div className="stacked-feature-cards__icon-wrap">{card.icon}</div>
                        ) : (
                          <span className="stacked-feature-cards__card-idx" aria-hidden>
                            / {idx}
                          </span>
                        )}
                      </div>
                      <div className="stacked-feature-cards__mid">
                        <div className="stacked-feature-cards__lead-top">
                          <h3
                            id={`sfc-title-${index}`}
                            className={[
                              'stacked-feature-cards__title',
                              accent ? 'stacked-feature-cards__title--accent' : '',
                            ]
                              .filter(Boolean)
                              .join(' ')}
                          >
                            {card.title}
                          </h3>
                          <p
                            className={[
                              'stacked-feature-cards__description',
                              accent ? 'stacked-feature-cards__description--accent' : '',
                            ]
                              .filter(Boolean)
                              .join(' ')}
                          >
                            {card.description}
                          </p>
                        </div>
                        <div className="stacked-feature-cards__cta-row">
                          {card.priceNote != null && card.priceNote !== '' ? (
                            <span className="stacked-feature-cards__price-note">
                              {card.priceNote}
                            </span>
                          ) : null}
                          <Button
                            href={card.ctaHref}
                            className="stacked-feature-cards__cta"
                            color="#01111E"
                            textColor="#ffffff"
                            iconRight={<CtaArrowIcon />}
                          >
                            {card.ctaLabel}
                          </Button>
                        </div>
                      </div>
                      <div className="stacked-feature-cards__features-wrap">
                        {colLabel != null && colLabel !== '' ? (
                          <p className="stacked-feature-cards__features-heading">{colLabel}</p>
                        ) : null}
                        <div className="stacked-feature-cards__features">
                          {card.features.map((feature, fi) => (
                            <div
                              key={fi}
                              className={[
                                'stacked-feature-cards__feature',
                                isTwoLineFeature(feature)
                                  ? 'stacked-feature-cards__feature--pair'
                                  : '',
                              ]
                                .filter(Boolean)
                                .join(' ')}
                            >
                              {isLabelValueFeature(feature) ? (
                                <>
                                  <span className="stacked-feature-cards__feature-label">
                                    {feature.label}
                                  </span>
                                  <span className="stacked-feature-cards__feature-value">
                                    {feature.value}
                                  </span>
                                </>
                              ) : isTextSecondaryFeature(feature) ? (
                                <>
                                  <span className="stacked-feature-cards__feature-label">
                                    {feature.text}
                                  </span>
                                  <span className="stacked-feature-cards__feature-value">
                                    {feature.secondary}
                                  </span>
                                </>
                              ) : (
                                <span className="stacked-feature-cards__feature-text">
                                  {feature.text}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StackedFeatureCardsSection;
