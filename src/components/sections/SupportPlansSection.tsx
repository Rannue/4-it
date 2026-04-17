// components
import Button from '@/shared/ui/Button';

// data
import type { SupportPlanFeatureRow } from '@/constants/supportPlans';
import { SUPPORT_DIRECTION_CARDS, SUPPORT_PLAN_FEATURE_ROWS_START } from '@/constants/supportPlans';

import './SupportPlansSection.css';

function valueAfterColon(value: string) {
  return value.replace(/^\s*:\s*/, '');
}

type SupportPlanFeatureListProps = {
  rows: readonly SupportPlanFeatureRow[];
  /** Сумма без «BYN» — блок «{amount} BYN в месяц» над списком */
  priceAmount?: string;
};

function SupportPlanFeatureList({ rows, priceAmount }: SupportPlanFeatureListProps) {
  return (
    <div className="support-hours-bars">
      {priceAmount != null && priceAmount !== '' && (
        <div className="support-hours-bars__price">
          <span className="support-hours-bars__price-amount">{priceAmount} BYN</span>
          <span className="support-hours-bars__price-period"> в месяц</span>
        </div>
      )}
      <ul className="support-hours-bars__list">
        {rows.map((row, i) => (
          <li key={i} className="support-hours-bars__row">
            <span className="support-hours-bars__label">{row.label}:</span>
            <br />
            <span className="support-hours-bars__detail">{valueAfterColon(row.value)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SupportPlanPriceFooter({ amount }: { amount: string }) {
  return (
    <div className="support-hours-bars__price">
      <span className="support-hours-bars__price-amount">{amount} BYN</span>
      <span className="support-hours-bars__price-period"> в месяц</span>
    </div>
  );
}

export type SupportPlansSectionProps = {
  /**
   * `section` — блок «Тарифы сопровождения» (страница техподдержки).
   * `start-preview` — только список параметров тарифа START (карточка на главной).
   */
  variant?: 'section' | 'start-preview';
};

function SupportPlansSection({ variant = 'section' }: SupportPlansSectionProps) {
  if (variant === 'start-preview') {
    return <SupportPlanFeatureList rows={SUPPORT_PLAN_FEATURE_ROWS_START} />;
  }

  return (
    <section className="support-plans" aria-labelledby="support-plans-heading">
      <div className="section-wrapper">
        <div className="section-wrapper__inner">
          <h2 id="support-plans-heading" className="support-plans__title">
            Тарифы сопровождения
          </h2>

          <div className="support-plans__band">
            <div className="support-plans__cards">
              {SUPPORT_DIRECTION_CARDS.map((card, index) => (
                <article key={index} className="support-plans-card">
                  <h3
                    className={
                      card.accentTitle
                        ? 'support-plans-card__title support-plans-card__title--accent'
                        : 'support-plans-card__title'
                    }
                  >
                    {card.name}
                  </h3>

                  <div className="support-plans-card__features">
                    <SupportPlanFeatureList rows={card.features} />
                  </div>

                  <div className="support-plans-card__footer">
                    <SupportPlanPriceFooter amount={card.price} />
                    <Button
                      className="support-plans-card__btn"
                      color="#01111E"
                      textColor="#ffffff"
                      href="#contacts"
                    >
                      Оставить заявку
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <p className="support-plans__footnote">
            Не знаете, какой тариф выбрать? Позвоните нам по телефону +375 (44) 555 44 16 или{' '}
            <a className="support-plans__footnote-link" href="#technical-support-contact">
              закажите обратный звонок.
            </a>{' '}
            <br />
            Мы поможем подобрать оптимальное решение для вашего бизнеса.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SupportPlansSection;
