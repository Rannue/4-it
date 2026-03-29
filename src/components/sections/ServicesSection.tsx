import type { KeyboardEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ArrowLongRightIcon from '@/components/icons/ArrowLongRightIcon';
import './ServicesSection.css';

export type ServiceTag = {
  label: string;
  to: string;
};

export type ServiceItem = {
  title: string;
  description?: string;
  /** Route to navigate on card click */
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
              const go = () => {
                if (item.to) navigate(item.to);
              };
              const onKeyDown = (e: KeyboardEvent) => {
                if (clickable && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  go();
                }
              };

              return (
                <article
                  key={item.title}
                  className={['services-card', clickable ? 'services-card--clickable' : null]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={clickable ? go : undefined}
                  onKeyDown={clickable ? onKeyDown : undefined}
                  role={clickable ? 'link' : undefined}
                  tabIndex={clickable ? 0 : undefined}
                  aria-label={
                    clickable
                      ? (item.ariaLabel ?? `Перейти: ${item.title}`)
                      : undefined
                  }
                >
                  <header className="services-card__header">
                    <h3 className="services-card__title">{item.title}</h3>
                    <span className="services-card__icon" aria-hidden="true">
                      <ArrowLongRightIcon />
                    </span>
                  </header>

                  {item.description && <p className="services-card__text">{item.description}</p>}

                  {item.tags && item.tags.length > 0 && (
                    <div className="services-card__tags" onClick={e => e.stopPropagation()}>
                      {item.tags.map(tag => (
                        <Link
                          key={`${item.title}:${tag.to}`}
                          className="services-tag"
                          to={tag.to}
                          onClick={e => e.stopPropagation()}
                        >
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
