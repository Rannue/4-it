import './SecondaryHero.css';
import texture from '@/assets/img/texture.png';
import Button from '@/shared/ui/Button';
import ArrowLongRightIcon from '@/shared/icons/ArrowLongRightIcon';
import HeroBreadcrumbs, { type BreadcrumbItem } from './HeroBreadcrumbs';

export type { BreadcrumbItem };

type SecondaryHeroProps = {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description?: string;
};

function RequestCtaButton() {
  return (
    <Button
      className="btn--full"
      color="#ffffff"
      textColor="#01111E"
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
}: {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description?: string;
}) {
  return (
    <div className="hero-secondary-grid__cell hero-secondary-grid__cell--main">
      <div className="hero-secondary__content">
        <div className="hero-secondary__title-wrapper">
          <HeroBreadcrumbs items={breadcrumbs} />
          <h1 className="hero-secondary__title">{title}</h1>
        </div>
        <div className="hero-secondary__description-cta">
          {description && <p className="hero-secondary__description">{description}</p>}
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
      <img src={texture} alt="" className="hero-secondary__texture" aria-hidden />
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
}: {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description?: string;
}) {
  return (
    <div className="hero-secondary-grid">
      <HeroGridSlot slot="r1c1" />
      <HeroGridSlot slot="r1c2" />
      <HeroGridSlot slot="r1c3" />
      <HeroGridSlot slot="r1c4" />
      <HeroGridSlot slot="r2c1" />
      <HeroMainColumn breadcrumbs={breadcrumbs} title={title} description={description} />
      <HeroAsideColumn />
      <HeroGridSlot slot="r2c4" />
      <HeroGridSlot slot="r3c1" band />
      <HeroGridSlot slot="r3c2" band />
      <HeroGridSlot slot="r3c3" band />
      <HeroGridSlot slot="r3c4" band />
    </div>
  );
}

function SecondaryHero({ breadcrumbs, title, description }: SecondaryHeroProps) {
  return (
    <div className="section-wrapper-secondary">
      <div className="section-wrapper__inner">
        <section id="home" className="hero-secondary">
          <HeroGrid breadcrumbs={breadcrumbs} title={title} description={description} />
        </section>
      </div>
    </div>
  );
}

export default SecondaryHero;
