// react
import type { ReactNode } from 'react';

import './FeatureBanner.css';

export type FeatureBannerComplianceHeadline = {
  line1: string;
  line2: string;
};

export type FeatureBannerProps = {
  complianceHeadline: FeatureBannerComplianceHeadline;
  description: ReactNode;
  descriptionSecondary?: ReactNode;
  complianceVisual: string;
  imageAlt?: string;
};

function FeatureBanner({
  complianceHeadline,
  description,
  descriptionSecondary,
  complianceVisual,
  imageAlt = '',
}: FeatureBannerProps) {
  return (
    <div className="section-wrapper">
      <div className="section-wrapper__inner">
        <section className="feature-banner feature-banner--compliance">
          <div className="feature-banner__compliance-panel">
            <div className="feature-banner__compliance-visual">
              <img
                className="feature-banner__compliance-image"
                src={complianceVisual}
                alt={imageAlt}
              />
            </div>
            <div className="feature-banner__compliance-copy">
              <h2 className="feature-banner__compliance-headline">
                <span className="feature-banner__compliance-headline-line">
                  {complianceHeadline.line1}
                </span>
                <span className="feature-banner__compliance-headline-line feature-banner__compliance-headline-line--accent">
                  {complianceHeadline.line2}
                </span>
              </h2>
              <div className="feature-banner__compliance-text">
                <div className="feature-banner__compliance-paragraph">{description}</div>
                {descriptionSecondary != null && descriptionSecondary !== '' ? (
                  <div className="feature-banner__compliance-paragraph">{descriptionSecondary}</div>
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
