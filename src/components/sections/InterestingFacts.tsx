import type { CSSProperties, ReactNode } from 'react';
import './InterestingFacts.css';
import certificationIllustration from '@/assets/img/illustrations/certification.svg';
import scanningIllustration from '@/assets/img/illustrations/scaning.svg';
import buildingsIllustration from '@/assets/img/illustrations/buildings.svg';

export type InterestingFactItem = {
  /** URL импортированного ассета или строка пути */
  image: string;
  imageAlt?: string;
  /** Текст или JSX (например, с <strong>) */
  description: ReactNode;
  /** Вариант фона блока с картинкой */
  visualVariant?: 'orange' | 'image';
};

const DEFAULT_ITEMS: InterestingFactItem[] = [
  {
    image: buildingsIllustration,
    imageAlt: 'Иллюстрация',
    visualVariant: 'orange',
    description: (
      <>
        <strong>Более 60% компаний</strong>, пострадавших от кибератак, закрываются в течение
        полугода после инцидента
      </>
    ),
  },
  {
    image: scanningIllustration,
    imageAlt: 'Иллюстрация',
    visualVariant: 'image',
    description: (
      <>
        <strong>90% кибератак</strong> можно предотвратить, если своевременно выявить уязвимости в
        системе защиты.
      </>
    ),
  },
  {
    image: certificationIllustration,
    imageAlt: 'Иллюстрация аттестации СЗИ',
    visualVariant: 'image',
    description: (
      <>
        Аттестация СЗИ помогает снизить риски утечек данных <strong>на 80%</strong>
      </>
    ),
  },
];

type InterestingFactsProps = {
  /** Если не передать — показываются встроенные три факта для страницы аттестации */
  items?: InterestingFactItem[];
  className?: string;
};

function gridPlacement(index: number, total: number): CSSProperties | undefined {
  if (total !== 3) return undefined;
  if (index === 0) return { gridColumn: 1, gridRow: 1 };
  if (index === 1) return { gridColumn: 2, gridRow: 1 };
  if (index === 2) return { gridColumn: 3, gridRow: 2 };
  return undefined;
}

function InterestingFacts({ items, className }: InterestingFactsProps) {
  const list = items && items.length > 0 ? items : DEFAULT_ITEMS;

  return (
    <div className={['section-wrapper', className].filter(Boolean).join(' ')}>
      <div className="section-wrapper__inner">
        <section className="facts">
          <div
            className={
              list.length === 3 ? 'facts__grid facts__grid--layout-3' : 'facts__grid facts__grid--auto'
            }
          >
            {list.map((item, index) => {
              const variant = item.visualVariant ?? 'image';
              return (
                <article
                  key={index}
                  className="facts-card"
                  style={gridPlacement(index, list.length)}
                >
                  <div
                    className={`facts-card__visual facts-card__visual--${variant === 'orange' ? 'orange' : 'image'}`}
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt ?? ''}
                      className="facts-card__image"
                    />
                  </div>
                  <p className="facts-card__text">{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default InterestingFacts;
