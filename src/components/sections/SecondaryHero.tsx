// react
import type { ReactNode } from 'react';

// components
import Button from '@/shared/ui/Button';

// constants
import { CRM_FORM_URL } from '@/constants/siteContacts';
import InteractiveTexture from '@/shared/ui/InteractiveTexture';

// assets
import ArrowRightIcon from '@/assets/icons/arrow-up-right.svg';
import texture from '@/assets/img/texture.png';

// local
import HeroBreadcrumbs, { type BreadcrumbItem } from './HeroBreadcrumbs';

import './SecondaryHero.css';

export type { BreadcrumbItem };

type SecondaryHeroProps = {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description?: ReactNode;
  /** Второй абзац под основным описанием (необязательно). */
  descriptionSecondary?: ReactNode;
};

function RequestCtaButton() {
  return (
    <Button
      className="btn--full btn--secondary btn-text-base"
      color="var(--color-white)"
      textColor="#01111E"
      href={CRM_FORM_URL}
      target="_blank"
      iconRight={<img src={ArrowRightIcon} alt="" style={{ height: '24px', width: '24px' }} />}
    >
      Оставить заявку
    </Button>
  );
}

function HeroMainColumn({ breadcrumbs, title }: { breadcrumbs: BreadcrumbItem[]; title: string }) {
  return (
    <div className="hero-secondary-grid__cell hero-secondary-grid__cell--main">
      <div className="hero-secondary__content">
        <div className="hero-secondary__title-wrapper">
          <HeroBreadcrumbs items={breadcrumbs} />
          <h1 className="hero-secondary__title">{title}</h1>
        </div>
      </div>
    </div>
  );
}

/** Описание услуги: на десктопе — отдельная ячейка слева от картинки с кнопкой; на мобильном — свой ряд. */
function HeroDescriptionColumn({
  description,
  descriptionSecondary,
}: {
  description?: ReactNode;
  descriptionSecondary?: ReactNode;
}) {
  const hasDescription = description != null && description !== '';
  const hasDescriptionSecondary = descriptionSecondary != null && descriptionSecondary !== '';

  return (
    <div className="hero-secondary-grid__cell hero-secondary-grid__cell--description">
      <div className="hero-secondary__content">
        <div className="hero-secondary__description-cta">
          {hasDescription ? <p className="hero-secondary__description">{description}</p> : null}
          {hasDescriptionSecondary ? (
            <p className="hero-secondary__description hero-secondary__description--secondary">
              {descriptionSecondary}
            </p>
          ) : null}
          <div className="hero-secondary__cta-mobile">
            <RequestCtaButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroAsideColumn() {
  return (
    <div className="hero-secondary-grid__cell hero-secondary-grid__cell--aside">
      <InteractiveTexture>
        <img src={texture} alt="" className="hero-secondary__texture" aria-hidden />
      </InteractiveTexture>
      <div className="hero-secondary-grid__buttons-container">
        <RequestCtaButton />
      </div>
    </div>
  );
}

/** Пустая ячейка сетки; слот — модификатор в SecondaryHero.css (r1c2, r1c3, r3c3). */
function HeroGridSlot({ slot, band }: { slot: string; band?: boolean }) {
  return (
    <div
      className={[
        'hero-secondary-grid__cell',
        `hero-secondary-grid__cell--${slot}`,
        band ? 'hero-secondary-grid__cell--band' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden
    />
  );
}

/**
 * Порядок детей: r1c2, r1c3 (верхняя полоса), main (заголовок), aside (картинка + кнопка,
 * нижний правый слот), description (описание, нижний левый слот), r3c3 (заполнитель).
 * Ниже 900px — одна колонка, правила в CSS.
 */
function HeroGrid({
  breadcrumbs,
  title,
  description,
  descriptionSecondary,
}: {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description?: ReactNode;
  descriptionSecondary?: ReactNode;
}) {
  return (
    <div className="hero-secondary-grid">
      <HeroGridSlot slot="r1c2" />
      <HeroGridSlot slot="r1c3" />
      <HeroMainColumn breadcrumbs={breadcrumbs} title={title} />
      <HeroAsideColumn />
      <HeroDescriptionColumn description={description} descriptionSecondary={descriptionSecondary} />
      <HeroGridSlot slot="r3c3" band />
    </div>
  );
}

function SecondaryHero({
  breadcrumbs,
  title,
  description,
  descriptionSecondary,
}: SecondaryHeroProps) {
  return (
    <div className="hero-secondary__shell">
      <section id="home" className="hero-secondary">
        <div className="hero-secondary__cols-wrapper">
          <div className="hero-secondary__cols">
            <HeroGrid
              breadcrumbs={breadcrumbs}
              title={title}
              description={description}
              descriptionSecondary={descriptionSecondary}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecondaryHero;
