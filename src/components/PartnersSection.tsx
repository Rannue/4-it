import './PartnersSection.css';

type PartnersSectionProps = {
  title: string;
  description?: string;
  logos: Array<{
    src: string;
    alt: string;
  }>;
};

function PartnersSection({ title, description, logos }: PartnersSectionProps) {
  return (
    <div className="section-wrapper">
      <div className="section-wrapper__inner">
        <section className="partners">
          <div className="partners__inner">
            <header className="partners__header">
              <h2 className="partners__title">{title}</h2>
              {description && <p className="partners__description">{description}</p>}
            </header>

            <div className="partners__grid">
              {logos.map(logo => (
                <div key={logo.alt} className="partners__card">
                  <img className="partners__logo" src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PartnersSection;
