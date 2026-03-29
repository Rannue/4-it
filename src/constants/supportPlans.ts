export type SupportPlanFeatureRow = {
  label: string;
  /** Текст после двоеточия (в разметке можно писать с ведущим «: » — компонент уберёт). */
  value: string;
};

/** 4-IT START — для страницы тарифов и превью на главной */
export const SUPPORT_PLAN_FEATURE_ROWS_START: readonly SupportPlanFeatureRow[] = [
  { label: 'Количество включенных часов работ', value: ': 3 часа' },
  { label: 'Стоимость доп. часа без НДС', value: ': 95 BYN' },
  { label: 'Предоплата', value: ': 3 месяца' },
  { label: 'Скорость реакции', value: ': до 7 часов' },
  { label: 'Режим поддержки', value: ': с 9:00 до 18:00 кроме выходных' },
];

/** 4-IT PRO */
export const SUPPORT_PLAN_FEATURE_ROWS_PRO: readonly SupportPlanFeatureRow[] = [
  { label: 'Количество включенных часов работ', value: ': 5 часов' },
  { label: 'Стоимость доп. часа без НДС', value: ': 92 BYN' },
  { label: 'Предоплата', value: ': 3 месяца' },
  { label: 'Скорость реакции', value: ': до 6 часов' },
  { label: 'Режим поддержки', value: ': с 9:00 до 18:00 кроме выходных' },
];

/** 4-IT PARTNER */
export const SUPPORT_PLAN_FEATURE_ROWS_PARTNER: readonly SupportPlanFeatureRow[] = [
  { label: 'Количество включенных часов работ', value: ': 7 часов' },
  { label: 'Стоимость доп. часа без НДС', value: ': 90 BYN' },
  { label: 'Предоплата', value: ': 3 месяца' },
  { label: 'Скорость реакции', value: ': до 4 часов' },
  { label: 'Режим поддержки', value: ': с 9:00 до 18:00 кроме выходных' },
];

export type SupportDirectionCard = {
  name: string;
  accentTitle: boolean;
  price: string;
  features: readonly SupportPlanFeatureRow[];
};

export const SUPPORT_DIRECTION_CARDS: readonly SupportDirectionCard[] = [
  {
    name: '4-IT START',
    accentTitle: false,
    price: '300',
    features: SUPPORT_PLAN_FEATURE_ROWS_START,
  },
  { name: '4-IT PRO', accentTitle: false, price: '500', features: SUPPORT_PLAN_FEATURE_ROWS_PRO },
  {
    name: '4-IT PARTNER',
    accentTitle: true,
    price: '700',
    features: SUPPORT_PLAN_FEATURE_ROWS_PARTNER,
  },
];
