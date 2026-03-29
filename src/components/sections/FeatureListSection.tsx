import './FeatureListSection.css';

type FeatureListSectionProps = {
  title: string;
  description?: string;
  items: Array<{
    icon: string;
    text: string;
  }>;
};

function FeatureListSection({ title, description, items }: FeatureListSectionProps) {
  return (
    <div className="section-wrapper">
      <div className="section-wrapper__inner">
        <section className="feature-list">
          <div className="feature-list__inner">
            <header className="feature-list__header">
              <h2 className="feature-list__title">{title}</h2>
              {description && <p className="feature-list__description">{description}</p>}
            </header>

            <ul className="feature-list__items">
              {items.map((item, index) => (
                <li key={index} className="feature-list__item">
                  <img className="feature-list__icon" src={item.icon} alt="" aria-hidden="true" />
                  <p
                    className="feature-list__text"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FeatureListSection;
