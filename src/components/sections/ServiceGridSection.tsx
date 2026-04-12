// react
import { useNavigate } from 'react-router-dom';

// components
import ArrowLongRightIcon from '@/shared/icons/ArrowLongRightIcon';
import SupportPlansSection from '@/components/sections/SupportPlansSection';

import './ServiceGridSection.css';

export type ServiceGridSectionProps = {
  title: string;
  description?: string;
  items: Array<{
    title: string;
    description: string;
    to?: string;
    isActive?: boolean;
    tags?: Array<{
      label: string;
      isActive?: boolean;
    }>;
    /** Тот же блок «включённые часы», что на странице направлений техподдержки */
    supportFeatureBars?: boolean;
  }>;
};

const GRID_COLS_DESKTOP = 2;

function ServiceGridSection({ title, description, items }: ServiceGridSectionProps) {
  const navigate = useNavigate();
  const totalRows = Math.ceil(items.length / GRID_COLS_DESKTOP);

  return (
    <section className="service-grid-section section-wrapper--py-only">
      <header className="service-grid-section__intro">
        <h2 className="service-grid-section__title">{title}</h2>
        {description && <p className="service-grid-section__description">{description}</p>}
      </header>

      <div className="service-grid-section__grid-wrapper">
        <div className="service-grid-section__grid">
          {items.map((item, index) => {
            const clickable = Boolean(item.to);
            const row = Math.floor(index / GRID_COLS_DESKTOP);
            const isLastRow = row === totalRows - 1;
            const spanFullRow =
              items.length % GRID_COLS_DESKTOP === 1 && index === items.length - 1;
            return (
              <article
                key={item.title}
                className={[
                  'service-grid-section__card',
                  item.isActive ? 'service-grid-section__card--active' : null,
                  clickable ? 'service-grid-section__card--clickable' : null,
                  isLastRow ? 'service-grid-section__card--last-row' : null,
                  spanFullRow ? 'service-grid-section__card--span-full' : null,
                ]
                  .filter(Boolean)
                  .join(' ')}
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
                <div className="service-grid-section__card-body">
                  <div className="service-grid-section__card-head">
                    <h3 className="service-grid-section__card-title">{item.title}</h3>
                    <span className="service-grid-section__card-icon" aria-hidden="true">
                      <ArrowLongRightIcon />
                    </span>
                  </div>

                  <p className="service-grid-section__card-text">{item.description}</p>
                </div>

                {item.supportFeatureBars ? (
                  <div className="service-grid-section__card-support-bars">
                    <SupportPlansSection variant="start-preview" />
                  </div>
                ) : (
                  item.tags &&
                  item.tags.length > 0 && (
                    <div className="service-grid-section__card-tags">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`service-grid-section__card-tag${tag.isActive ? ' service-grid-section__card-tag--active' : ''}`}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  )
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceGridSection;
