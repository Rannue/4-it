import type { ReactNode } from 'react';
import './ManufacturersSection.css';

export type ManufacturerLogo = {
  src: string;
  alt: string;
};

export type ManufacturersSectionProps = {
  title: ReactNode;
  description?: string;
  logos: readonly ManufacturerLogo[];
};

export default function ManufacturersSection({
  title,
  description,
  logos,
}: ManufacturersSectionProps) {
  return (
    <div className="section-wrapper manufacturers-section">
      <div className="section-wrapper__inner">
        <section className="manufacturers">
          <header className="manufacturers__header">
            <h2 className="manufacturers__title">{title}</h2>
            {description ? <p className="manufacturers__description">{description}</p> : null}
          </header>

          <ul className="manufacturers__logos" role="list">
            {logos.map((logo, index) => (
              <li key={`${index}-${logo.src}`} className="manufacturers__card">
                <img
                  className="manufacturers__logo"
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
