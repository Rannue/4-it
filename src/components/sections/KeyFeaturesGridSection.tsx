// react
import type { ReactNode } from 'react';

// assets
import fingerprintIcon from '@/assets/icons/fingerprint.svg';

import './KeyFeaturesGridSection.css';

export type KeyFeaturesGridTextCell = {
  kind: 'text';
  title: string;
  intro: string;
  bullets?: readonly string[];
  footnote?: string;
};

export type KeyFeaturesGridImageCell = {
  kind: 'image';
  src: string;
  alt: string;
  /**
   * `center` — по умолчанию;
   * `product` — крупное изображение по центру (коробка продукта);
   * `screen-corner` — скрин внизу справа с обрезкой.
   */
  layout?: 'center' | 'product' | 'screen-corner';
};

export type KeyFeaturesGridEmptyCell = {
  kind: 'empty';
};

export type KeyFeaturesGridCell =
  | KeyFeaturesGridTextCell
  | KeyFeaturesGridImageCell
  | KeyFeaturesGridEmptyCell;

type KeyFeaturesGridSectionProps = {
  title: ReactNode;
  cells: readonly KeyFeaturesGridCell[];
};

function KeyFeaturesGridSection({ title, cells }: KeyFeaturesGridSectionProps) {
  return (
    <section className="key-features-grid">
      <header className="key-features-grid__header">
        <div className="key-features-grid__header-inner">
          <h2 className="key-features-grid__title">{title}</h2>
        </div>
      </header>

      <div className="key-features-grid__wrapper">
        <div className="key-features-grid__grid">
          {cells.map((cell, index) => {
            if (cell.kind === 'empty') {
              return (
                <div
                  key={index}
                  className="key-features-grid__cell key-features-grid__cell--empty"
                  aria-hidden
                />
              );
            }

            if (cell.kind === 'image' && cell.layout === 'screen-corner') {
              return (
                <div
                  key={index}
                  className="key-features-grid__cell key-features-grid__cell--media key-features-grid__cell--media-screen"
                >
                  <div className="key-features-grid__media-frame">
                    <img
                      className="key-features-grid__media-img key-features-grid__media-img--screen-corner"
                      src={cell.src}
                      alt={cell.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              );
            }

            if (cell.kind === 'image' && cell.layout === 'product') {
              return (
                <div
                  key={index}
                  className="key-features-grid__cell key-features-grid__cell--media key-features-grid__cell--media-product"
                >
                  <img
                    className="key-features-grid__media-img key-features-grid__media-img--product"
                    src={cell.src}
                    alt={cell.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              );
            }

            if (cell.kind === 'image') {
              return (
                <div key={index} className="key-features-grid__cell key-features-grid__cell--media">
                  <img
                    className="key-features-grid__media-img"
                    src={cell.src}
                    alt={cell.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              );
            }

            return (
              <article
                key={index}
                className="key-features-grid__cell key-features-grid__cell--text"
              >
                <div className="key-features-grid__text-body">
                  <h3 className="key-features-grid__cell-title">{cell.title}</h3>
                  <p className="key-features-grid__intro">{cell.intro}</p>
                  {cell.bullets && cell.bullets.length > 0 ? (
                    <ul className="key-features-grid__list">
                      {cell.bullets.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {cell.footnote ? (
                    <p className="key-features-grid__footnote">{cell.footnote}</p>
                  ) : null}
                </div>
                <img
                  className="key-features-grid__fingerprint"
                  src={fingerprintIcon}
                  alt=""
                  width={40}
                  height={40}
                  aria-hidden
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default KeyFeaturesGridSection;
