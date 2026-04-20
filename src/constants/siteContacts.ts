/** Реквизиты и контакты для страницы «Контакты», футера и карт. */

export const SITE_COMPANY = {
  legalName: 'ООО «ФорАйТи»',
  unp: '191065975',
} as const;

/** Юридический адрес (регистрация), как в карточке лицензии на сайте. */
export const SITE_LEGAL_ADDRESS = '220074, г. Минск, ул. Харьковская, д. 75, комн. 7' as const;

export const SITE_EMAIL = 'info@4-it.by' as const;

export const SITE_PHONE = {
  e164: '+375445554416',
  display: '+375 (44) 555 44 16',
} as const;

export const SITE_OFFICE = {
  building: 'БЦ «Royal Plaza», ст. м. Немига',
  /** Одна строка для поиска на картах (как в футере). */
  streetLine: 'г. Минск, Проспект Победителей 7А',
  floor: '20 этаж, 17 офис',
  hours: 'пн-пт с 9:00 до 18:00',
} as const;

/** Центр карты и метка: БЦ Royal Plaza, пр. Победителей, 7А, Минск (lon, lat). */
const ROYAL_PLAZA_LON = 27.549731;
const ROYAL_PLAZA_LAT = 53.9077;

/** Ссылка «открыть в Яндекс.Картах» — карточка здания Royal Plaza. */
export const YANDEX_MAPS_OPEN_URL = `https://yandex.by/maps/org/royal_plaza/1200538146/?ll=${ROYAL_PLAZA_LON}%2C${ROYAL_PLAZA_LAT}&z=17`;

/**
 * Виджет карты: та же точка, что и у карточки организации на Яндекс.Картах.
 */
export const YANDEX_MAP_WIDGET_SRC = `https://yandex.ru/map-widget/v1/?ll=${ROYAL_PLAZA_LON}%2C${ROYAL_PLAZA_LAT}&z=17&l=map&pt=${ROYAL_PLAZA_LON},${ROYAL_PLAZA_LAT},pm2rdm`;
