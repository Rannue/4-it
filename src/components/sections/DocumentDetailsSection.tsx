import '@/App.css';
import './DocumentDetailsSection.css';
import licenseQr from '@/assets/img/QR.png';
import Button from '@/components/ui/Button';
import DownloadIcon from '@/assets/icons/download.svg';

function DocumentDetailsSection() {
  return (
    <section className="document-details">
      <div className="section-wrapper">
        <div className="section-wrapper__inner">
          <header className="document-details__header">
            <h2 className="document-details__title">Подтверждение предоставления лицензии</h2>
            <p className="document-details__description">
              Официальный портал государственных лицензий Республики Беларусь с подтверждением
              действующей лицензии.{' '}
              <a
                href="https://info.licensing.gov.by/"
                target="_blank"
                rel="noreferrer"
                className="document-details__link"
              >
                По ссылке можно ознакомиться с актуальной информацией о лицензии.
              </a>
            </p>
          </header>
        </div>
      </div>

      <div className="document-details__content-wrapper">
        <div className="document-details__content-inner">
          <div className="document-details__card">
            <div className="document-details__card-inner">
              <div className="document-details__table-wrapper">
                <dl className="document-details__table">
                  <div className="document-details__row">
                    <dt className="document-details__cell document-details__cell--label">
                      Наименование органа, предоставившего лицензию:
                    </dt>
                    <dd className="document-details__cell document-details__cell--value">
                      Оперативно-аналитический центр при Президенте Республики Беларусь
                    </dd>
                  </div>
                  <div className="document-details__row">
                    <dt className="document-details__cell document-details__cell--label">
                      Вид деятельности:
                    </dt>
                    <dd className="document-details__cell document-details__cell--value">
                      деятельность по технической и (или) криптографической защите информации
                    </dd>
                  </div>
                  <div className="document-details__row">
                    <dt className="document-details__cell document-details__cell--label">
                      Статус лицензии:
                    </dt>
                    <dd className="document-details__cell document-details__cell--value">
                      действующая
                    </dd>
                  </div>
                  <div className="document-details__row">
                    <dt className="document-details__cell document-details__cell--label">
                      Тип лицензиата:
                    </dt>
                    <dd className="document-details__cell document-details__cell--value">
                      юридическое лицо
                    </dd>
                  </div>
                  <div className="document-details__row">
                    <dt className="document-details__cell document-details__cell--label">
                      Наименование лицензиата:
                    </dt>
                    <dd className="document-details__cell document-details__cell--value">
                      общество с ограниченной ответственностью &quot;ФорАйТи&quot;
                    </dd>
                  </div>
                  <div className="document-details__row">
                    <dt className="document-details__cell document-details__cell--label">УНП:</dt>
                    <dd className="document-details__cell document-details__cell--value">
                      191065975
                    </dd>
                  </div>
                  <div className="document-details__row">
                    <dt className="document-details__cell document-details__cell--label">
                      Местонахождение лицензиата:
                    </dt>
                    <dd className="document-details__cell document-details__cell--value">
                      220074, г. Минск, ул. Харьковская, д. 75, комн.7
                    </dd>
                  </div>
                  <div className="document-details__row">
                    <dt className="document-details__cell document-details__cell--label">
                      Номер лицензии в ЕРЛ:
                    </dt>
                    <dd className="document-details__cell document-details__cell--value">
                      22250000081852
                    </dd>
                  </div>
                  <div className="document-details__row">
                    <dt className="document-details__cell document-details__cell--label">
                      Номер принятия решения о предоставлении лицензии:
                    </dt>
                    <dd className="document-details__cell document-details__cell--value">4/лиц</dd>
                  </div>
                  <div className="document-details__row">
                    <dt className="document-details__cell document-details__cell--label">
                      Дата принятия решения о предоставлении лицензии:
                    </dt>
                    <dd className="document-details__cell document-details__cell--value">
                      26.02.2025
                    </dd>
                  </div>
                  <div className="document-details__row">
                    <dt className="document-details__cell document-details__cell--label">
                      Дата добавления в ЕРЛ:
                    </dt>
                    <dd className="document-details__cell document-details__cell--value">
                      26.02.2025
                    </dd>
                  </div>
                </dl>

                <Button
                  className="btn"
                  color="var(--color-primary)"
                  textColor="var(--color-white)"
                  iconRight={<img src={DownloadIcon} alt="" />}
                >
                  Скачать лицензию
                </Button>
              </div>

              <aside className="document-details__aside">
                <div className="document-details__qr-card">
                  <img className="document-details__qr-image" src={licenseQr} alt={licenseQr} />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DocumentDetailsSection;
