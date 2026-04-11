import { Link } from 'react-router-dom';
import './HeroBreadcrumbs.css';

export type BreadcrumbItem = {
  label: string;
  /** Маршрут react-router (предпочтительно) */
  to?: string;
  /** Алиас для `to` */
  href?: string;
};

type HeroBreadcrumbsProps = {
  items: BreadcrumbItem[];
};

/**
 * Хлебные крошки для вторичного hero: перенос сегментов как у тегов (flex-wrap).
 */
function HeroBreadcrumbs({ items }: HeroBreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav className="hero-breadcrumbs" aria-label="Хлебные крошки">
      <ol className="hero-breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const currentProps = isLast ? ({ 'aria-current': 'page' } as const) : {};
          const linkTo = item.to ?? item.href;

          const segment = linkTo ? (
            <Link to={linkTo} className="hero-breadcrumbs__link" {...currentProps}>
              {item.label}
            </Link>
          ) : (
            <span className="hero-breadcrumbs__text" {...currentProps}>
              {item.label}
            </span>
          );

          return (
            <li
              key={`${linkTo ?? ''}-${item.label}-${index}`}
              className={
                isLast
                  ? 'hero-breadcrumbs__item hero-breadcrumbs__item--current'
                  : 'hero-breadcrumbs__item'
              }
            >
              {index > 0 ? (
                <span className="hero-breadcrumbs__sep" aria-hidden>
                  /
                </span>
              ) : null}
              {segment}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default HeroBreadcrumbs;
