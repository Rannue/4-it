import './FeatureBanner.css';

type FeatureBannerProps = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
};

function FeatureBanner({ title, description, image, imageAlt = '' }: FeatureBannerProps) {
  return (
    <div className="section-wrapper">
      <div className="section-wrapper__inner">
        <section className="feature-banner">
          <div className="feature-banner__inner">
            <div className="feature-banner__content">
              <h2 className="feature-banner__title">{title}</h2>
              <p className="feature-banner__description">{description}</p>
            </div>
            <div className="feature-banner__media">
              <img className="feature-banner__image" src={image} alt={imageAlt} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FeatureBanner;
