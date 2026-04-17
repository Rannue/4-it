// components
import type { InterestingFactItem } from '@/components/sections/InterestingFacts';

// assets
import alarmIllustration from '@/assets/img/illustrations/alarm.svg';
import moneyIllustration from '@/assets/img/illustrations/money.svg';
import smsIllustration from '@/assets/img/illustrations/sms.svg';

export const CYBERSECURITY_INTERESTING_FACTS: readonly InterestingFactItem[] = [
  {
    id: 'companies-after-attack',
    image: alarmIllustration,
    imageAlt: 'Иллюстрация',
    visualVariant: 'orange',
    description: (
      <>
        Ежедневно в мире происходит <br />
        <strong>более 300 000</strong> кибератак
      </>
    ),
  },
  {
    id: 'prevent-attacks',
    image: moneyIllustration,
    imageAlt: 'Иллюстрация',
    visualVariant: 'image',
    description: (
      <>
        Утечка данных обходится компаниям <br />в среднем в <strong>$4,35 млн.</strong> в год
      </>
    ),
  },
  {
    id: 'szi-attestation',
    image: smsIllustration,
    imageAlt: 'Иллюстрация аттестации СЗИ',
    visualVariant: 'image',
    description: (
      <>
        <strong>Более 90%</strong> кибератак <br />
        начинаются с фишинговых писем
      </>
    ),
  },
];
