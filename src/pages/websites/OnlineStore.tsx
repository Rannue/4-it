import Header from '@/widgets/header/Header';
import Footer from '@/widgets/footer/Footer';
import '../Hero.css';
import SecondaryHero from '@/components/sections/SecondaryHero';
import ClientsSection from '@/components/grids/ClientsSection';
import InfoGridSection from '@/components/grids/InfoGridSection';
import usersGroupIcon from '@/assets/icons/users-group.svg';
import laptopIcon from '@/assets/icons/laptop.svg';
import lawIllustrationImg from '@/assets/img/law.svg';
import SplitHighlightPanel from '@/components/sections/SplitHighlightPanel';
import CardsGridSection from '@/components/grids/CardsGridSection';
import flashIllustration from '@/assets/img/illustrations/flash.svg';
import moneyIllustration from '@/assets/img/illustrations/money.svg';
import lawIllustration from '@/assets/img/illustrations/law.svg';
import flexIllustration from '@/assets/img/illustrations/flex.svg';
import StickyHeadingListSection from '@/components/sections/StickyHeadingListSection';
import CertificatesSection from '@/components/sections/CertificatesSection';

const EDMS_CARDS_HTML = [
  `
                <div class="cards-grid__media">
                  <img src="${flashIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
                </div>
                <div class="cards-grid__group">
                <h4>Скорость и эффективность</h4>
                <p>
                   Документы подписываются и передаются онлайн. Нет задержек из-за пересылок.
                  </p>
                </div>
              `,
  `
                <div class="cards-grid__media">
                    <img src="${moneyIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
                </div>
                <div class="cards-grid__group">
                <h4>Снижение затрат</h4>
                <p>
                   Меньше бумаги, печати, курьеров и хранения бумажных архивов.
                  </p>
                </div>
              `,
  '<div class="cards-grid__media cards-grid__media-empty"></div>',
  '<div class="cards-grid__media cards-grid__media-empty"></div>',
  `
                <div class="cards-grid__media">
                  <img src="${lawIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
                </div>
                <div class="cards-grid__group">
                <h4>Юридическая защита</h4>
                <p>
                  Документы, подписанные ЭЦП, признаются законными в режиме электронного оборота.
                  </p>
                </div>
              `,
  `
                <div class="cards-grid__media">
                  <img src="${flexIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
                </div>
                <div class="cards-grid__group">
                <h4>Гибкость</h4>
                <p>
Возможность подписывать с разных устройств, используя разные носители ЭЦП (USB-токен, SIM-ключ).                  </p>
                </div>
              `,
];

function OnlineStorePage() {
  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <SecondaryHero
          breadcrumbs={[
            { label: '4-it.by', href: '/' },
            { label: 'Электронный документооборот с ЭЦП' },
          ]}
          title="Электронный документооборот с ЭЦП"
          description="Мы предоставляем услугу внедрения электронного документооборота с использованием ЭЦП. Помогаем IT-компаниям перейти на юридически значимые цифровые документы, наладить безопасный обмен и подписание, а также обеспечить поддержку для стабильной работы."
        />
        <InfoGridSection
          title={
            <>
              Что такое электронный документооборот и{' '}
              <span className="info-grid__title-accent">ЭЦП?</span>
            </>
          }
          columnsHtml={[
            `
              <div class="info-grid__group">
                <h4>Электронный документооборот</h4>
                <p>
Это обмен документами в цифровом формате по интернету, без печати и курьеров, но с соблюдением юридических требований.                </p>
              </div>
              <img
                src="${laptopIcon}"
                alt=""
                class="info-grid__icon"
                aria-hidden="true"
              />
            `,
            `
              <div class="info-grid__group">
                <h4>ЭЦП (электронно-цифровая подпись)</h4>
                <p>
Аналог собственноручной подписи в цифровом виде. Для каждой подписи требуется уникальный ключ от удостоверяющего центра.                </p>
              </div>
              <img
                src="${usersGroupIcon}"
                alt=""
                class="info-grid__icon"
                aria-hidden="true"
              />
            `,
            `
              <div class="info-grid__group-type2">
                <p>
Беларуси ЭЦП существует в двух основных формах:
<span style="color: var(--color-primary);">
<br /><br />• USB-токен
<br />• SIM-карта с записанным на ней ключом </span>              </p>
              </div>
            `,
          ]}
        />
        <SplitHighlightPanel
          asideTitle="Внедрение в соответствии с требованиями и стандартами"
          illustration={{ src: lawIllustrationImg, alt: '' }}
        >
          <p>
            Мы предлагаем внедрение современных SIEM-решений, которые соответствуют требованиям
            стандартов, указанных в Перечне государственных стандартов, взаимосвязанных с
            техническим регламентом Республики Беларусь «Информационные технологии. Средства защиты
            информации. Информационная безопасность» (ТР 2013/027/BY), утверждённых Приказом
            Оперативно-аналитического центра при Президенте Республики Беларусь от 12 марта 2020 г.
            № 77 (в редакции от 28.12.2022 № 207).
          </p>
          <p>
            Чтобы ЭЦП была корректной, она должна быть выдана аккредитованным удостоверяющим
            центром.
          </p>
        </SplitHighlightPanel>

        <CardsGridSection title={<>Преимущества внедрения</>} cardsHtml={EDMS_CARDS_HTML} />

        <StickyHeadingListSection
          id="virtualization-benefits"
          title={
            <>
              Этапы
              <span className="sticky-heading-list__title-accent"> внедрения</span>
            </>
          }
          items={[
            { text: 'Получение сертификата ЭЦПиз аккредитованного удостоверяющего центра' },
            {
              text: 'Выбор носителя (USB-токен, SIM-ключ) и установка необходимых программных средств',
            },
            {
              text: 'Настройка системы ЭДО: загрузка шаблонов, определение типов документов, маршрутов подписания',
            },
            {
              text: 'Инструктаж сотрудников по работе с ЭДО и ЭЦП: как подписывать документы, как проверять подписи',
            },
            {
              text: 'Тестовый обмен документами с контрагентами, проверка юридической силы, исправление возможных ошибок',
            },
          ]}
        />
        <CertificatesSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}

export default OnlineStorePage;
