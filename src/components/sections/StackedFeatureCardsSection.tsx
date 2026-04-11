import type { ReactNode } from 'react';
import { useId } from 'react';
import Button from '@/shared/ui/Button';
import './StackedFeatureCardsSection.css';

export type StackedFeatureCardFeature = {
  /** Текст пункта; можно передать JSX для выделения отдельных слов */
  text: ReactNode;
};

export type StackedFeatureCard = {
  /** Номер в шапке карточки «/ 01»; по умолчанию 01, 02… по порядку */
  cardIndex?: string;
  title: string;
  /** Кратко, кому подходит тариф */
  description: string;
  /** Заголовок и описание цветом акцента (как «Корпоративное внедрение») */
  titleAccent?: boolean;
  ctaLabel: string;
  ctaHref: string;
  features: readonly StackedFeatureCardFeature[];
};

export type StackedFeatureCardsSectionProps = {
  cards: readonly StackedFeatureCard[];
  heading?: ReactNode;
  ariaLabel?: string;
  className?: string;
  id?: string;
};

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
              return (
                <div key={`${card.title}-${index}`} className="stacked-feature-cards__slot">
                  <article
                    className="stacked-feature-cards__card"
                    aria-labelledby={`sfc-title-${index}`}
                  >
                    <div className="stacked-feature-cards__card-inner">
                      <div className="stacked-feature-cards__idx-cell">
                        <span className="stacked-feature-cards__card-idx" aria-hidden>
                          / {idx}
                        </span>
                      </div>
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
                      <Button
                        href={card.ctaHref}
                        className="stacked-feature-cards__cta"
                        color="#01111E"
                        textColor="#ffffff"
                        iconRight={<CtaArrowIcon />}
                      >
                        {card.ctaLabel}
                      </Button>
                      <div className="stacked-feature-cards__features">
                        {card.features.map((feature, fi) => (
                          <div
                            key={typeof feature.text === 'string' ? `${feature.text}-${fi}` : fi}
                            className="stacked-feature-cards__feature"
                          >
                            <span className="stacked-feature-cards__feature-text">
                              {feature.text}
                            </span>
                          </div>
                        ))}
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
