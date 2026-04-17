import crmImg from '@/assets/certificates/sertifikat_crm_001_1x 2.png';
import goldenPartnerImg from '@/assets/certificates/sertifikat_zolotoy_partner_001_1x 1.png';
import integration1cImg from '@/assets/certificates/kompetentsiya_integratsiya_s_1s_001_1x 3.png';
import largeCorporateImg from '@/assets/certificates/large-corporate-implementations.png';
import erlImg from '@/assets/certificates/z.png';

/** Бренд в левой колонке карточки. */
export type CertificateBrandId = 'bitrix24' | '1c-bitrix' | 'erl';

/**
 * Для «Битрикс24»: только подпись цветом primary или значок + подпись (как в макете).
 * Для остальных брендов не используется.
 */
export type BitrixBrandMode = 'text-only' | 'with-logo';

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
};

/**
 * Все файлы из `src/assets/certificates/` — по одной карточке на превью;
 * порядок: Битрикс24 (CRM текстом → со значком), 1С-Битрикс, ЕРЛ.
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
  },
  {
    id: 'bitrix24-golden-partner',
    brand: 'bitrix24',
    bitrixBrandMode: 'with-logo',
    title: 'Сертификат',
    subtitle: 'Золотой партнёр Битрикс24',
    imageSrc: goldenPartnerImg,
    imageAlt: 'Сертификат Битрикс24, золотой партнёр',
  },
  {
    id: '1c-large-corp',
    brand: '1c-bitrix',
    title: 'Сертификат',
    subtitle: 'Присвоена компетенция: «Крупные корпоративные внедрения»',
    imageSrc: largeCorporateImg,
    imageAlt: 'Сертификат 1С-Битрикс, крупные корпоративные внедрения',
  },
  {
    id: '1c-integration-1s',
    brand: '1c-bitrix',
    title: 'Сертификат',
    subtitle: 'Присвоена компетенция: «Интеграция с 1С»',
    imageSrc: integration1cImg,
    imageAlt: 'Сертификат 1С-Битрикс, интеграция с 1С',
  },
  {
    id: 'erl-conformity',
    brand: 'erl',
    title: 'Сертификат соответствия',
    imageSrc: erlImg,
    imageAlt: 'Сертификат соответствия ЕРЛ',
  },
] as const;
