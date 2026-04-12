/**
 * Данные для `StackedFeatureCardsSection`: тарифы Битрикс24 и линейка Phishman.
 * Импортируйте: `@/data/stackedFeatureCards` или `@/data/stackedFeatureCards/StackedCards`.
 *
 * Серая карточка преимущества (одна или две строки):
 * - одна строка: `{ text: '…' }` или `{ text: <>с <strong>разметкой</strong></> }`
 * - две строки (мелкая подпись + крупное значение): `{ text: 'Предоплата:', secondary: '3 месяца' }`
 *   или явно: `{ label: 'Предоплата:', value: '3 месяца' }`
 * У карточки: `priceNote`, `featuresLabel` (перебивает подпись колонки).
 * Для страницы киберкультуры без подписи над плитками — `CYBER_CULTURE_PHISHMAN_STACKED`. Иначе подпись — `PHISHMAN_ADVANTAGES_LABEL`.
 */
import type { ReactNode } from 'react';
import type { StackedFeatureCard } from '@/components/sections/StackedFeatureCardsSection';
import certificateIcon from '@/assets/icons/certificate.svg';
import timeIllustration from '@/assets/img/illustrations/time.svg';
import groupIllustration from '@/assets/img/illustrations/group.svg';
import leafIcon from '@/assets/icons/leaf.svg';

/** Тарифы / комплектации — страница внедрения Битрикс24 */
export const BITRIX24_IMPLEMENTATION_TIERS: readonly StackedFeatureCard[] = [
  {
    icon: <img src={certificateIcon} alt="" aria-hidden />,
    title: 'Начальное внедрение',
    description:
      'Подходит для компаний, которые только начинают работать с CRM и хотят быстро запустить основные функции.',
    ctaLabel: 'Оставить заявку',
    ctaHref: '/#contacts',
    features: [
      { text: 'развертывание и настройка портала' },
      { text: 'добавление сотрудников (до 10 сотрудников)' },
      { text: 'создание структуры компании' },
      { text: 'начальное внедрение и настройка crm инструментов' },
    ],
  },
  {
    icon: <img src={timeIllustration} alt="" aria-hidden />,
    title: 'Стандартное внедрение',
    description:
      'Подходит компаниям, которым нужна структурированная CRM с настроенными воронками продаж и ролями пользователей.',
    ctaLabel: 'Оставить заявку',
    ctaHref: '/#contacts',
    features: [
      { text: 'сбор и анализ требований' },
      { text: 'подготовка проектной документации' },
      { text: 'Предоплата:', secondary: '3 месяца' },
      {
        text: (
          <>
            настройка статусов и карточек <strong>Лидов</strong> и стадий <strong>Сделок</strong>
          </>
        ),
      },
      { text: 'настройка ролей и прав доступов пользователей' },
      { text: 'подключение почтового домена' },
      { text: 'построение воронок продаж' },
      { text: 'обучение сотрудников' },
    ],
  },
  {
    icon: <img src={groupIllustration} alt="" aria-hidden />,
    title: 'Корпоративное внедрение',
    titleAccent: true,
    description:
      'Подходит компаниям, которым нужна структурированная CRM с настроенными воронками продаж и ролями пользователей.',
    ctaLabel: 'Оставить заявку',
    ctaHref: '/#contacts',
    features: [
      { text: 'Предоплата:', secondary: '3 месяца' },
      { text: 'сбор и анализ требований' },
      { text: 'настройка и подключение телефонии' },
      { text: 'интеграция с мессенджерами' },
      { text: 'создание и настройка бизнес-процессов' },
      { text: 'загрузка клиентской базы и товаров' },
      { text: 'обучение сотрудников' },
    ],
  },
];

/**
 * Подпись над колонкой серых плиток на странице с `PHISHMAN_PRODUCT_LINE`.
 * — свой текст / разметка: строка или JSX
 * — без подписи: `null` или `''`
 * — дефолт из компонента («Преимущества:»): задайте `undefined`
 */
export const PHISHMAN_ADVANTAGES_LABEL: ReactNode | null | undefined = 'ПРЕИМУЩЕСТВА:';

/** Линейка Phishman (карточки + пункты справа; подпись колонки — `PHISHMAN_ADVANTAGES_LABEL`) */
export const PHISHMAN_PRODUCT_LINE: readonly StackedFeatureCard[] = [
  {
    icon: <img src={leafIcon} alt="" aria-hidden />,
    title: 'PHISHMAN BASE',
    description: 'Редакция с базовым функционалом',
    ctaLabel: 'Оставить заявку',
    ctaHref: '/#contacts',
    features: [
      {
        text: (
          <>
            <span className="stacked-feature-cards__feature-em">Комплексный подход </span>
            <span className="stacked-feature-cards__feature-muted">
              к противодействию социальной инженерии и фишингу без необходимости глубокой
              технической подготовки – минимальные затраты на запуск.
            </span>
          </>
        ),
      },
      { text: 'создание структуры компании' },
      { text: 'начальное внедрение и настройка crm инструментов' },
    ],
  },
  {
    icon: <img src={leafIcon} alt="" aria-hidden />,
    title: 'Стандартное внедрение',
    description:
      'Подходит компаниям, которым нужна структурированная CRM с настроенными воронками продаж и ролями пользователей.',
    ctaLabel: 'Оставить заявку',
    ctaHref: '/#contacts',
    features: [
      { text: 'сбор и анализ требований' },
      { text: 'подготовка проектной документации' },
      { text: 'Предоплата:', secondary: '3 месяца' },
      {
        text: (
          <>
            настройка статусов и карточек <strong>Лидов</strong> и стадий <strong>Сделок</strong>
          </>
        ),
      },
      { text: 'настройка ролей и прав доступов пользователей' },
      { text: 'подключение почтового домена' },
      { text: 'построение воронок продаж' },
      { text: 'обучение сотрудников' },
    ],
  },
  {
    icon: <img src={groupIllustration} alt="" aria-hidden />,
    title: 'Корпоративное внедрение',
    titleAccent: true,
    description:
      'Подходит компаниям, которым нужна структурированная CRM с настроенными воронками продаж и ролями пользователей.',
    ctaLabel: 'Оставить заявку',
    ctaHref: '/#contacts',
    features: [
      { text: 'Предоплата:', secondary: '3 месяца' },
      { text: 'сбор и анализ требований' },
      { text: 'настройка и подключение телефонии' },
      { text: 'интеграция с мессенджерами' },
      { text: 'создание и настройка бизнес-процессов' },
      { text: 'загрузка клиентской базы и товаров' },
      { text: 'обучение сотрудников' },
    ],
  },
];

/**
 * Секция stacked для страницы киберкультуры: те же карточки, без подписи над колонкой плиток.
 * Подключение: `{...CYBER_CULTURE_PHISHMAN_STACKED}` — на странице не задаётся `advantagesLabel`.
 */
export const CYBER_CULTURE_PHISHMAN_STACKED = {
  advantagesLabel: null as ReactNode,
  cards: PHISHMAN_PRODUCT_LINE,
};
