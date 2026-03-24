import { useNavigate } from 'react-router-dom';
import ArrowLongRightIcon from './icons/ArrowLongRightIcon';
import './ServicesType2Section.css';

type ServicesType2SectionProps = {
  title: string;
  description?: string;
  items: Array<{
    title: string;
    description: string;
    to?: string;
    isActive?: boolean;
  }>;
};

function ServicesType2Section({ title, description, items }: ServicesType2SectionProps) {
  const navigate = useNavigate();

  return (
    <div className="section-wrapper">
      <div className="section-wrapper__inner">
        <section className="services2">
          <h2 className="services2__title">{title}</h2>
      {description && <p className="services2__description">{description}</p>}

      <div className="services2__grid">
        {items.map(item => {
          const clickable = Boolean(item.to);
          return (
            <article
              key={item.title}
              className={[
                'services2-card',
                item.isActive ? 'services2-card--active' : null,
                clickable ? 'services2-card--clickable' : null,
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
              <div className="services2-card__head">
                <h3 className="services2-card__title">{item.title}</h3>
                <span className="services2-card__icon" aria-hidden="true">
                  <ArrowLongRightIcon />
                </span>
              </div>

              <p className="services2-card__text">{item.description}</p>
            </article>
          );
        })}
      </div>
        </section>
      </div>
    </div>
  );
}

export default ServicesType2Section;

