import {
  COOKIES_POLICY_DOC_HREF,
  INFO_SECURITY_POLICY_DOC_HREF,
  PERSONAL_DATA_POLICY_DOC_HREF,
} from '@/constants/legalDocs';

export type PublicDownloadDoc = {
  id: string;
  title: string;
  href: string;
  /** Подпись размера для UI; у внешних PDF точный размер не подставляется. */
  sizeLabel: string;
};

/** Документы для скачивания / открытия (как в футере — те же URL). */
export const PUBLIC_DOWNLOAD_DOCS: readonly PublicDownloadDoc[] = [
  {
    id: 'info-security',
    title: 'Политика в области информационной безопасности',
    href: INFO_SECURITY_POLICY_DOC_HREF,
    sizeLabel: 'PDF',
  },
  {
    id: 'cookies',
    title: 'Политика по обработке cookies-файлов',
    href: COOKIES_POLICY_DOC_HREF,
    sizeLabel: 'PDF',
  },
  {
    id: 'personal-data',
    title: 'Политика по обработке персональных данных',
    href: PERSONAL_DATA_POLICY_DOC_HREF,
    sizeLabel: 'PDF',
  },
] as const;
