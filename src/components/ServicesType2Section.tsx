import { useNavigate } from 'react-router-dom';
import ArrowLongRightIcon from './icons/ArrowLongRightIcon';
import '../App.css';
import './ServicesType2Section.css';

type ServicesType2SectionProps = {
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
  }>;
};

const SERVICES2_COLS_DESKTOP = 2;

function ServicesType2Section({ title, description, items }: ServicesType2SectionProps) {
  const navigate = useNavigate();
  const totalRows = Math.ceil(items.length / SERVICES2_COLS_DESKTOP);

  return (
    <section className="services2">
      <div className="section-wrapper">
        <div className="section-wrapper__inner">
          <h2 className="services2__title">{title}</h2>
          {description && <p className="services2__description">{description}</p>}
        </div>
      </div>

      <div className="services2__grid-wrapper">
        <div className="services2__grid">
          {items.map((item, index) => {
            const clickable = Boolean(item.to);
            const row = Math.floor(index / SERVICES2_COLS_DESKTOP);
            const isLastRow = row === totalRows - 1;
            const spanFullRow =
              items.length % SERVICES2_COLS_DESKTOP === 1 && index === items.length - 1;
            return (
              <article
                key={item.title}
                className={[
                  'services2-card',
                  item.isActive ? 'services2-card--active' : null,
                  clickable ? 'services2-card--clickable' : null,
                  isLastRow ? 'services2-card--last-row' : null,
                  spanFullRow ? 'services2-card--span-full' : null,
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
                <div className="services2-card__body">
                  <div className="services2-card__head">
                    <h3 className="services2-card__title">{item.title}</h3>
                    <span className="services2-card__icon" aria-hidden="true">
                      <ArrowLongRightIcon />
                    </span>
                  </div>

                  <p className="services2-card__text">{item.description}</p>
                </div>

                {item.tags && item.tags.length > 0 && (
                  <div className="services2-card__tags">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`services2-card__tag${tag.isActive ? ' services2-card__tag--active' : ''}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesType2Section;

