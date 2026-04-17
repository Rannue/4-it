import crmImg from '@/assets/certificates/1fr-sertifikat_crm_001_1x 2.png';
import goldenPartnerImg from '@/assets/certificates/2fr-sertifikat_zolotoy_partner_001_1x 1.png';
import integration1cImg from '@/assets/certificates/1fr-kompetentsiya_integratsiya_s_1s_001_1x 3.png';
import largeCorporateImg from '@/assets/certificates/2fr-large-corporate-implementations.png';
import erlImg from '@/assets/certificates/z.png';

/** Бренд в левой колонке карточки. */
export type CertificateBrandId = 'bitrix24' | '1c-bitrix' | 'erl';

/**
 * Для «Битрикс24»: значок + подпись; `text-only` — крупнее/primary, `with-logo` — мельче рядом с лого.
 */
export type BitrixBrandMode = 'text-only' | 'with-logo';

/** Доля ширины в галерее `/certificates` — совпадает с префиксом `2fr-` / `1fr-` в имени файла в `src/assets/certificates/`. */
export type CertificateLayoutFr = 1 | 2;

export type CertificateCardEntry = {
  id: string;
  brand: CertificateBrandId;
  /** Только для brand === 'bitrix24' */
  bitrixBrandMode?: BitrixBrandMode;
  /** Тип документа: «Сертификат», «Сертификат соответствия» */
  title: string;
  /** Компетенция; пусто — колонка не заполняется (например, ЕРЛ) */
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  layoutFr: CertificateLayoutFr;
};

/**
 * Все файлы из `src/assets/certificates/` — префикс `2fr-` или `1fr-` в имени задаёт ширину на странице сертификатов.
 */
export const CERTIFICATE_CARDS: readonly CertificateCardEntry[] = [
  {
    id: 'bitrix24-crm-text',
    brand: 'bitrix24',
    bitrixBrandMode: 'text-only',
    title: 'Сертификат',
    subtitle: 'Присвоена компетенция: «CRM»',
    imageSrc: crmImg,
    imageAlt: 'Сертификат Битрикс24, компетенция CRM',
    layoutFr: 1,
  },
  {
    id: 'bitrix24-golden-partner',
    brand: 'bitrix24',
    bitrixBrandMode: 'with-logo',
    title: 'Сертификат',
    subtitle: 'Золотой партнёр Битрикс24',
    imageSrc: goldenPartnerImg,
    imageAlt: 'Сертификат Битрикс24, золотой партнёр',
    layoutFr: 2,
  },
  {
    id: '1c-large-corp',
    brand: '1c-bitrix',
    title: 'Сертификат',
    subtitle: 'Присвоена компетенция: «Крупные корпоративные внедрения»',
    imageSrc: largeCorporateImg,
    imageAlt: 'Сертификат 1С-Битрикс, крупные корпоративные внедрения',
    layoutFr: 2,
  },
  {
    id: '1c-integration-1s',
    brand: '1c-bitrix',
    title: 'Сертификат',
    subtitle: 'Присвоена компетенция: «Интеграция с 1С»',
    imageSrc: integration1cImg,
    imageAlt: 'Сертификат 1С-Битрикс, интеграция с 1С',
    layoutFr: 1,
  },
  {
    id: 'erl-conformity',
    brand: 'erl',
    title: 'Сертификат соответствия',
    imageSrc: erlImg,
    imageAlt: 'Сертификат соответствия ЕРЛ',
    layoutFr: 1,
  },
] as const;

/** В строке до 3 условных единиц: «2fr» = 2, «1fr» = 1 (2+1 = полная строка). */
function orderRowForGallery(row: CertificateCardEntry[]): CertificateCardEntry[] {
  return [...row].sort((a, b) => b.layoutFr - a.layoutFr);
}

/** Строки для страницы `/certificates`: пары 2fr+1fr и т.д. по порядку в `CERTIFICATE_CARDS`. */
export function packCertificateDocumentRows(
  cards: readonly CertificateCardEntry[]
): CertificateCardEntry[][] {
  const rows: CertificateCardEntry[][] = [];
  let current: CertificateCardEntry[] = [];
  let used = 0;

  const flush = () => {
    if (current.length > 0) {
      rows.push(orderRowForGallery(current));
      current = [];
      used = 0;
    }
  };

  for (const card of cards) {
    const u = card.layoutFr;
    if (used + u > 3) {
      flush();
    }
    current.push(card);
    used += u;
    if (used === 3) {
      flush();
    }
  }
  flush();
  return rows;
}

export const CERTIFICATE_DOCUMENT_PAGE_ROWS = packCertificateDocumentRows(CERTIFICATE_CARDS);
