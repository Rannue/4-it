// components
import type { InterestingFactItem } from '@/components/sections/InterestingFacts';

// assets
import buildingIllustration from '@/assets/img/illustrations/buildings.svg';
import scanningIllustration from '@/assets/img/illustrations/scaning.svg';
import downIllustration from '@/assets/img/illustrations/down.svg';

export const CERTIFICATION_INTERESTING_FACTS: readonly InterestingFactItem[] = [
  {
    id: 'cert-oac-requirements',
    image: buildingIllustration,
    imageAlt: 'Аттестация и сертификация',
    visualVariant: 'orange',
    description: (
      <>
        <strong>Более 60%</strong> компаний, пострадавших от кибератак, закрываются в течение
        полугода после инцидента
      </>
    ),
  },
  {
    id: 'cert-documentation-cycle',
    image: scanningIllustration,
    imageAlt: 'Нормативная база',
    visualVariant: 'image',
    description: (
      <>
        <strong>90% кибератак</strong> можно предотвратить, если своевременно выявить уязвимости в
        системе защиты
      </>
    ),
  },
  {
    id: 'cert-szi-lifecycle',
    image: downIllustration,
    imageAlt: 'Жизненный цикл СЗИ',
    visualVariant: 'image',
    description: (
      <>
        Аттестация СЗИ помогает снизить риски утечек данных на <strong>80%</strong>
      </>
    ),
  },
];
