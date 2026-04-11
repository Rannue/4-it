import { useId, type KeyboardEvent, type SVGProps } from 'react';
import { Link, useNavigate, type NavigateFunction } from 'react-router-dom';
import './ServicesSection.css';

/** Клик и Enter/Space для «карточки-ссылки» (role="link" + tabIndex={0}). */
function serviceCardLinkHandlers(to: string, navigate: NavigateFunction) {
  const open = () => navigate(to);

  return {
    onClick: open,
    onKeyDown: (event: KeyboardEvent<HTMLElement>) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      open();
    },
  };
}

export type ServiceTag = {
  label: string;
  to: string;
};

export type ServiceItem = {
  title: string;
  description?: string;
  to?: string;
  tags?: ServiceTag[];
  /** Для строки-ссылки (screen readers) */
  ariaLabel?: string;
};

type ServicesSectionProps = {
  sidebarTitle?: string;
  items: ServiceItem[];
};

function RowArrowIcon(props: SVGProps<SVGSVGElement>) {
  const id = useId().replace(/:/g, '');
  const clipId = `services-row-arrow-clip-${id}`;

  return (
    <svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M24.0834 9.91602L9.91675 24.0827"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.3333 9.91602H24.0833V22.666"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width={34} height={34} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ServicesSection({ sidebarTitle = 'Услуги', items }: ServicesSectionProps) {
  const navigate = useNavigate();

  const tagsBlock = (item: ServiceItem) =>
    item.tags && item.tags.length > 0 ? (
      <div className="services-card__tags">
        {item.tags.map((tag) => (
          <Link
            key={tag.label}
            to={tag.to}
            className="services-tag"
            onClick={(e) => e.stopPropagation()}
          >
            {tag.label}
          </Link>
        ))}
      </div>
    ) : null;

  return (
    <section className="services services--list">
      <div className="services__list-gutter">
        <div className="services__list-column services__list-column--header">
          <h2 className="services__heading">{sidebarTitle}</h2>
        </div>
      </div>
      <div className="services__list-stack">
        {items.map((item) => {
          const isClickable = Boolean(item.to);
          const cardClass = `services-card services-card--list${isClickable ? ' services-card--clickable' : ''}`;

          return (
            <div key={item.title} className="services__list-row-shell">
              <div className="services__list-gutter">
                <div className="services__list-column services__list-column--row">
                  <article
                    className={cardClass}
                    role={isClickable ? 'link' : undefined}
                    aria-label={item.ariaLabel}
                    tabIndex={isClickable ? 0 : undefined}
                    {...(item.to ? serviceCardLinkHandlers(item.to, navigate) : {})}
                  >
                    <div className="services-card__row">
                      <h3 className="services-card__title">{item.title}</h3>
                      <div className="services-card__body">
                        {item.description && (
                          <p className="services-card__text">{item.description}</p>
                        )}
                        {tagsBlock(item)}
                      </div>
                      {isClickable && (
                        <span className="services-card__arrow" aria-hidden>
                          <RowArrowIcon className="services-card__arrow-icon" />
                        </span>
                      )}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesSection;
