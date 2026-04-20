// react
import type { ReactNode } from 'react';

// components
import type { StackedFeatureCard } from '@/components/sections/StackedFeatureCardsSection';

// assets
import oneFillIcon from '@/assets/icons/1-filled.svg';
import twoFillIcon from '@/assets/icons/2-filled.svg';

/** Карточки секции «возможности» на странице интернет-магазина (1С-Битрикс). */
export const ONLINE_STORE_STACKED_CARDS: readonly StackedFeatureCard[] = [
  {
    icon: <img src={oneFillIcon} alt="" aria-hidden />,
    title: 'Интернет-магазин на шаблонах АСПРО',
    description: (
      <>
        Использование готовых решений АСПРО позволяет значительно сократить сроки разработки и
        снизить стоимость проекта. Такие шаблоны уже содержат готовую структуру интернет-магазина и
        необходимый функционал для запуска продаж.
      </>
    ),
    ctaLabel: 'Оставить заявку',
    ctaHref: '#contacts',
    features: [
      {
        text: 'Быстрый запуск проекта',
      },
      {
        text: 'Оптимальная структура каталога товаров',
      },
      {
        text: 'Встроенные маркетинговые инструменты',
      },
      {
        text: 'Адаптивный дизайн для всех устройств',
      },
    ],
  },
  {
    icon: <img src={twoFillIcon} alt="" aria-hidden />,
    title: 'Индивидуальная разработка',
    description: (
      <>
        Для проектов с особыми требованиями мы разрабатываем интернет-магазины с индивидуальным
        дизайном и расширенной функциональностью на базе 1С-Битрикс, адаптированные под
        бизнес-процессы компании и особенности онлайн-продаж.
      </>
    ),
    ctaLabel: 'Оставить заявку',
    ctaHref: '#contacts',
    features: [
      {
        text: 'Гибкую структуру каталога товаров и категорий',
      },
      {
        text: 'Уникальный пользовательский интерфейс',
      },
      {
        text: 'Сложные сценарии оформления и обработки заказов',
      },
      {
        text: 'Интеграцию с корпоративными системами и внешними сервисами',
      },
    ],
  },
];

export const ONLINE_STORE_STACKED = {
  advantagesLabel: 'Преимущества решения:' as ReactNode,
  cards: ONLINE_STORE_STACKED_CARDS,
};
