import type { ReactNode } from 'react';
import './FeatureBanner.css';

export type FeatureBannerProps = {
  title?: ReactNode;
  description: ReactNode;
  /** Дополнительный блок текста под основным описанием */
  descriptionSecondary?: ReactNode;
  image: string;
  imageAlt?: string;
};

function FeatureBanner({
  title,
  description,
  descriptionSecondary,
  image,
  imageAlt = '',
}: FeatureBannerProps) {
  const showTitle =
    title != null &&
    title !== '' &&
    !(typeof title === 'string' && title.trim() === '');

  return (
    <div className="section-wrapper">
      <div className="section-wrapper__inner">
        <section className="feature-banner">
          {showTitle ? (
            <header className="feature-banner__header">
              <div className="feature-banner__header-inner">
                <h2 className="info-grid__title">{title}</h2>
              </div>
            </header>
          ) : null}
          <div className="feature-banner__panel">
            <div className="feature-banner__visual">
              <img className="feature-banner__image" src={image} alt={imageAlt} />
            </div>
            <div className="feature-banner__content">
              <div className="feature-banner__text">
                <div className="feature-banner__paragraph">{description}</div>
                {descriptionSecondary != null && descriptionSecondary !== '' ? (
                  <div className="feature-banner__paragraph">{descriptionSecondary}</div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FeatureBanner;
