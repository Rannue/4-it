import { Link, useNavigate } from 'react-router-dom';
import ArrowLongRightIcon from './icons/ArrowLongRightIcon';
import './Services.css';

export type ServiceTag = {
  label: string;
  to: string;
};

export type ServiceItem = {
  title: string;
  description?: string;
  /** Route to navigate on header click */
  to?: string;
  tags?: ServiceTag[];
  ariaLabel?: string;
};

type ServicesSectionProps = {
  sidebarTitle?: string;
  items: ServiceItem[];
};

function ServicesSection({ sidebarTitle = 'Услуги', items }: ServicesSectionProps) {
  const navigate = useNavigate();

  return (
    <div className="section-wrapper">
      <div className="section-wrapper__inner">
        <section className="services">
          <aside className="services__sidebar">
        <h2 className="services__sidebar-title">{sidebarTitle}</h2>
      </aside>

      <div className="services__content">
        {items.map(item => {
          const clickable = Boolean(item.to);
          return (
            <article key={item.title} className="services-card">
              <header
                className="services-card__header"
                onClick={
                  clickable
                    ? () => {
                        navigate(item.to!);
                      }
                    : undefined
                }
                role={clickable ? 'button' : undefined}
                tabIndex={clickable ? 0 : undefined}
              >
                <h3 className="services-card__title">{item.title}</h3>
                <button
                  type="button"
                  className="services-card__icon"
                  aria-label={item.ariaLabel ?? (clickable ? `Перейти: ${item.title}` : item.title)}
                  onClick={
                    clickable
                      ? e => {
                          e.preventDefault();
                          e.stopPropagation();
                          navigate(item.to!);
                        }
                      : undefined
                  }
                >
                  <ArrowLongRightIcon />
                </button>
              </header>

              {item.description && <p className="services-card__text">{item.description}</p>}

              {item.tags && item.tags.length > 0 && (
                <div className="services-card__tags">
                  {item.tags.map(tag => (
                    <Link key={`${item.title}:${tag.to}`} className="services-tag" to={tag.to}>
                      {tag.label}
                    </Link>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
        </section>
      </div>
    </div>
  );
}

export default ServicesSection;

