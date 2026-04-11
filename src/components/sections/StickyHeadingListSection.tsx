import type { ReactNode } from 'react';
import './StickyHeadingListSection.css';

export type StickyHeadingListItem = {
  /** Текст пункта (отображается в верхнем регистре) */
  text: string;
};

type StickyHeadingListSectionProps = {
  /** Содержимое заголовка (например, часть текста + span с классом sticky-heading-list__title-accent) */
  title: ReactNode;
  items: readonly StickyHeadingListItem[];
  /** Изображение под заголовком в левой колонке; можно не передавать */
  illustration?: { src: string; alt?: string };
  id?: string;
  className?: string;
};

function formatIndex(n: number) {
  return String(n).padStart(2, '0');
}

function StickyHeadingListSection({
  title,
  items,
  illustration,
  id,
  className,
}: StickyHeadingListSectionProps) {
  return (
    <section
      id={id}
      className={['sticky-heading-list', className].filter(Boolean).join(' ')}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="section-wrapper__inner">
        <div className="sticky-heading-list__container">
          <div className="sticky-heading-list__grid">
            <div className="sticky-heading-list__title-wrap">
              <h2 id={id ? `${id}-heading` : undefined} className="sticky-heading-list__title">
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
                    [ {formatIndex(index + 1)} ]
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
