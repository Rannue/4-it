// react
import type { ReactNode } from 'react';

// components
import ArrowLongRightIcon from '@/shared/icons/ArrowLongRightIcon';
import Button from '@/shared/ui/Button';
import InteractiveTexture from '@/shared/ui/InteractiveTexture';

// assets
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
      className="btn--full"
      color="#ffffff"
      textColor="#01111E"
      href="#contacts"
      iconRight={<ArrowLongRightIcon />}
    >
      Оставить заявку
    </Button>
  );
}

function HeroMainColumn({
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
  const hasDescription = description != null && description !== '';
  const hasDescriptionSecondary =
    descriptionSecondary != null && descriptionSecondary !== '';

  return (
    <div className="hero-secondary-grid__cell hero-secondary-grid__cell--main">
      <div className="hero-secondary__content">
        <div className="hero-secondary__title-wrapper">
          <HeroBreadcrumbs items={breadcrumbs} />
          <h1 className="hero-secondary__title">{title}</h1>
        </div>
        <div className="hero-secondary__description-cta">
          {hasDescription ? (
            <p className="hero-secondary__description">{description}</p>
          ) : null}
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

/** Пустая ячейка сетки; слот совпадает с модификатором в SecondaryHero.css (--r1c1 … --r3c4). */
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

/** Порядок детей задаёт auto-placement на широком экране (4×3); ниже 1200px — правила в CSS. */
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
      <HeroGridSlot slot="r1c1" />
      <HeroGridSlot slot="r1c2" />
      <HeroGridSlot slot="r1c3" />
      <HeroGridSlot slot="r1c4" />
      <HeroGridSlot slot="r2c1" />
      <HeroMainColumn
        breadcrumbs={breadcrumbs}
        title={title}
        description={description}
        descriptionSecondary={descriptionSecondary}
      />
      <HeroAsideColumn />
      <HeroGridSlot slot="r2c4" />
      <HeroGridSlot slot="r3c1" band />
      <HeroGridSlot slot="r3c2" band />
      <HeroGridSlot slot="r3c3" band />
      <HeroGridSlot slot="r3c4" band />
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
    <div className="section-wrapper--px-only">
      <div className="section-wrapper__inner">
        <section id="home" className="hero-secondary">
          <HeroGrid
            breadcrumbs={breadcrumbs}
            title={title}
            description={description}
            descriptionSecondary={descriptionSecondary}
          />
        </section>
      </div>
    </div>
  );
}

export default SecondaryHero;
