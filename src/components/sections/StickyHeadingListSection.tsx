import type { ReactNode } from 'react';
import './StickyHeadingListSection.css';

export type StickyHeadingListItem = {
  text: string;
};

export type StickyHeadingListSectionProps = {
  title: ReactNode;
  items: readonly StickyHeadingListItem[];
  illustration?: { src: string; alt?: string };
  id?: string;
  className?: string;
};

const ROOT_CLASS = 'sticky-heading-list';

function padIndex(n: number) {
  return String(n).padStart(2, '0');
}

function StickyHeadingListSection({
  title,
  items,
  illustration,
  id,
  className,
}: StickyHeadingListSectionProps) {
  const headingId = id ? `${id}-heading` : undefined;
  const rootClass = [ROOT_CLASS, className].filter(Boolean).join(' ');

  return (
    <section
      id={id}
      className={rootClass}
      aria-labelledby={headingId}
    >
      <div className="section-wrapper">
        <div className="section-wrapper__inner">
          <div className="sticky-heading-list__grid">
            <div className="sticky-heading-list__title-wrap">
              <h2 id={headingId} className="sticky-heading-list__title">
                {title}
              </h2>
              {illustration?.src ? (
                <div className="sticky-heading-list__illustration">
                  <img
                    className="sticky-heading-list__illustration-img"
                    src={illustration.src}
                    alt={illustration.alt ?? ''}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : null}
            </div>

            <ul className="sticky-heading-list__rows">
              {items.map((item, index) => (
                <li key={index} className="sticky-heading-list__row">
                  <span className="sticky-heading-list__index" aria-hidden="true">
                    [ {padIndex(index + 1)} ]
                  </span>
                  <p className="sticky-heading-list__text">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StickyHeadingListSection;
