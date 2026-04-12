// assets
import licenseQr from '@/assets/img/cybersecurity/QR.png';

import './DocumentDetailsSection.css';

/** Должен совпадать с URL, закодированным в QR-изображении. */
const LICENSE_VERIFICATION_URL = 'https://license.gov.by/onelicense/176623' as const;

const EXTERNAL_REL = 'noopener noreferrer' as const;

const SECTION_TITLE = 'Подтверждение предоставления лицензии';

const DESCRIPTION_LEAD =
  'Официальный портал государственных лицензий Республики Беларусь с подтверждением действующей лицензии.';

const LINK_TEXT = 'По ссылке можно ознакомиться с актуальной информацией о лицензии.';

const QR_LINK_LABEL = 'Открыть сведения о лицензии в ГИС ЕРЛ (тот же адрес, что в QR-коде)';

const QR_IMG_ALT = 'QR-код: переход к сведениям о лицензии в государственной системе ЕРЛ';

/** Поля карточки лицензии (порядок = порядок на экране). */
const LICENSE_ENTRIES = [
  {
    label: 'Наименование органа, предоставившего лицензию:',
    value: 'Оперативно-аналитический центр при Президенте Республики Беларусь',
  },
  {
    label: 'Вид деятельности:',
    value: 'деятельность по технической и (или) криптографической защите информации',
  },
  { label: 'Статус лицензии:', value: 'действующая' },
  { label: 'Тип лицензиата:', value: 'юридическое лицо' },
  {
    label: 'Наименование лицензиата:',
    value: 'общество с ограниченной ответственностью "ФорАйТи"',
  },
  { label: 'УНП:', value: '191065975' },
  {
    label: 'Местонахождение лицензиата:',
    value: '220074, г. Минск, ул. Харьковская, д. 75, комн.7',
  },
  { label: 'Номер лицензии в ЕРЛ:', value: '22250000081852' },
  {
    label: 'Номер принятия решения о предоставлении лицензии:',
    value: '4/лиц',
  },
  {
    label: 'Дата принятия решения о предоставлении лицензии:',
    value: '26.02.2025',
  },
  { label: 'Дата добавления в ЕРЛ:', value: '26.02.2025' },
] as const;

const ROOT_CLASS = 'section-wrapper document-details';

export default function DocumentDetailsSection() {
  return (
    <section className={ROOT_CLASS}>
      <div className="section-wrapper__inner">
        <header className="document-details__header">
          <h2 className="document-details__title">{SECTION_TITLE}</h2>
          <p className="document-details__description">
            {DESCRIPTION_LEAD}{' '}
            <a
              href={LICENSE_VERIFICATION_URL}
              target="_blank"
              rel={EXTERNAL_REL}
              className="document-details__link"
            >
              {LINK_TEXT}
            </a>
          </p>
        </header>

        <div className="document-details__card">
          <div className="document-details__card-inner">
            <div className="document-details__table-wrapper">
              <dl className="document-details__table">
                {LICENSE_ENTRIES.map(entry => (
                  <div key={entry.label} className="document-details__row">
                    <dt className="document-details__cell document-details__cell--label">
                      {entry.label}
                    </dt>
                    <dd className="document-details__cell document-details__cell--value">
                      {entry.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside className="document-details__aside" aria-label="QR-код проверки лицензии">
              <div className="document-details__qr-card">
                <a
                  href={LICENSE_VERIFICATION_URL}
                  target="_blank"
                  rel={EXTERNAL_REL}
                  className="document-details__qr-link"
                  aria-label={QR_LINK_LABEL}
                >
                  <img
                    className="document-details__qr-image"
                    src={licenseQr}
                    alt={QR_IMG_ALT}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
