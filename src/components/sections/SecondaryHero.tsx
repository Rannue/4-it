import { Link } from 'react-router-dom';
import './SecondaryHero.css';
import texture from '@/assets/img/texture.png';
import Button from '@/components/ui/Button';
import ArrowLongRightIcon from '@/components/icons/ArrowLongRightIcon';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type SecondaryHeroProps = {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description?: string;
};

function SecondaryHero({ breadcrumbs, title, description }: SecondaryHeroProps) {
  return (
    <div className="section-wrapper">
      <div className="section-wrapper__inner">
        <section id="home" className="hero-secondary">
          <div className="hero-secondary-grid">
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell">
              <div className="hero-secondary__content">
                <div className="hero-secondary__title-wrapper">
                  <nav className="hero-secondary__breadcrumbs" aria-label="Хлебные крошки">
                    <ol>
                      {breadcrumbs.map((item, index) => (
                        <li key={`${item.label}-${index}`}>
                          {item.href ? (
                            <Link to={item.href}>{item.label}</Link>
                          ) : (
                            <span>{item.label}</span>
                          )}
                        </li>
                      ))}
                    </ol>
                  </nav>
                  <h1 className="hero-secondary__title">{title}</h1>
                </div>
                {description && <p className="hero-secondary__description">{description}</p>}
              </div>
            </div>
            <div className="hero-secondary-grid__cell">
              <img src={texture} alt="" className="hero-secondary__texture" aria-hidden="true" />
              <div className="hero-secondary-grid__buttons-container">
                <Button
                  className="btn--full"
                  color="#ffffff"
                  textColor="#111827"
                  iconRight={<ArrowLongRightIcon />}
                >
                  Оставить заявку
                </Button>
              </div>
            </div>
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell"></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SecondaryHero;
