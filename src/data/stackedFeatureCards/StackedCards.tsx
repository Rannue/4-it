/**
 * Данные для `StackedFeatureCardsSection`: линейка Phishman (киберкультура).
 * Тарифы Битрикс24 — в `src/pages/bitrix24/Implementation.tsx`.
 * Импортируйте: `@/data/stackedFeatureCards` или `@/data/stackedFeatureCards/StackedCards`.
 *
 * Серая карточка преимущества (одна или две строки):
 * - одна строка: `{ text: '…' }` или `{ text: <>с <strong>разметкой</strong></> }`
 * - две строки (мелкая подпись + крупное значение): `{ text: 'Предоплата:', secondary: '3 месяца' }`
 *   или явно: `{ label: 'Предоплата:', value: '3 месяца' }`
 * У карточки: `priceNote`, `featuresLabel` (перебивает подпись колонки).
 * Для страницы киберкультуры без подписи над плитками — `CYBER_CULTURE_PHISHMAN_STACKED`. Иначе подпись — `PHISHMAN_ADVANTAGES_LABEL`.
 */
// react
import type { ReactNode } from 'react';

// components
import type { StackedFeatureCard } from '@/components/sections/StackedFeatureCardsSection';

// assets
import oneFillIcon from '@/assets/icons/1-filled.svg';
import twoFillIcon from '@/assets/icons/2-filled.svg';

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
    icon: <img src={oneFillIcon} alt="" aria-hidden />,
    title: 'PHISHMAN BASE',
    description: 'Редакция с базовым функционалом',
    ctaLabel: 'Оставить заявку',
    ctaHref: '#contacts',
    features: [
      {
        text: 'Быстрый старт:',
        secondary: 'Готовые сценарии, шаблоны и гибкие настройки позволяют начать работу сразу',
      },
      {
        text: 'Комплексный подход к противодействию социальной инженерии и фишингу без необходимости глубокой технической подготовки – минимальные затраты на запуск',
      },
      {
        text: 'Простое использование:',
        secondary: 'Решение под ключ с минимальными трудозатратами на внедрение и сопровождение',
      },
    ],
  },
  {
    icon: <img src={twoFillIcon} alt="" aria-hidden />,
    title: 'PHISHMAN ENTERPRISE',
    description: 'Редакция с продвинутым функционалом',
    ctaLabel: 'Оставить заявку',
    ctaHref: '#contacts',
    features: [
      {
        text: 'Быстрый старт:',
        secondary: 'Готовые сценарии, шаблоны и гибкие настройки позволяют начать работу сразу',
      },
      {
        text: 'Кастомизация содержимого курсов:',
        secondary:
          'Контент возможно изменить и дополнить под принятые в компании локальные нормативные акты, внутренние регламенты и процессы',
      },
      {
        text: 'Уникальная методология повышения киберкультуры:',
        secondary: 'Готовые сценарии, шаблоны и гибкие настройки позволяют начать работу сразу',
      },
      {
        text: 'Менеджмент системы:',
        secondary:
          'Возможность делегировать весь спектр работы с системой экспертам Phishman с учетом поставленных компанией целей',
      },
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
