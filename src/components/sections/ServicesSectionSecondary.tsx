import { useNavigate } from 'react-router-dom';
import ArrowLongRightIcon from '@/shared/icons/ArrowLongRightIcon';
import SupportPlansSection from '@/components/sections/SupportPlansSection';
import '@/app/App.css';
import './ServicesSectionSecondary.css';

export type ServicesSectionSecondaryProps = {
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

function ServicesSectionSecondary({ title, description, items }: ServicesSectionSecondaryProps) {
  const navigate = useNavigate();
  const totalRows = Math.ceil(items.length / GRID_COLS_DESKTOP);

  return (
    <section className="services-section-secondary">
      <div className="section-wrapper">
        <div className="section-wrapper__inner">
          <h2 className="services-section-secondary__title">{title}</h2>
          {description && <p className="services-section-secondary__description">{description}</p>}
        </div>
      </div>

      <div className="services-section-secondary__grid-wrapper">
        <div className="services-section-secondary__grid">
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
                  'services-section-secondary-card',
                  item.isActive ? 'services-section-secondary-card--active' : null,
                  clickable ? 'services-section-secondary-card--clickable' : null,
                  isLastRow ? 'services-section-secondary-card--last-row' : null,
                  spanFullRow ? 'services-section-secondary-card--span-full' : null,
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
                <div className="services-section-secondary-card__body">
                  <div className="services-section-secondary-card__head">
                    <h3 className="services-section-secondary-card__title">{item.title}</h3>
                    <span className="services-section-secondary-card__icon" aria-hidden="true">
                      <ArrowLongRightIcon />
                    </span>
                  </div>

                  <p className="services-section-secondary-card__text">{item.description}</p>
                </div>

                {item.supportFeatureBars ? (
                  <div className="services-section-secondary-card__support-bars">
                    <SupportPlansSection variant="start-preview" />
                  </div>
                ) : (
                  item.tags &&
                  item.tags.length > 0 && (
                    <div className="services-section-secondary-card__tags">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`services-section-secondary-card__tag${tag.isActive ? ' services-section-secondary-card__tag--active' : ''}`}
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

export default ServicesSectionSecondary;
