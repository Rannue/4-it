// components
import PageLayout from '@/components/layout/PageLayout';
import SecondaryHero from '@/components/sections/SecondaryHero';
import ClientsSection from '@/components/grids/ClientsSection';
import InfoGridSection from '@/components/grids/InfoGridSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import StackedFeatureCardsSection from '@/components/sections/StackedFeatureCardsSection';
import CardsGridSectionDark from '@/components/grids/CardsGridSectionDark';

// data
import { ONLINE_STORE_STACKED } from '@/data/stackedFeatureCards';

// assets
import taskDarkIllustration from '@/assets/img/illustrations/task-dark.svg';
import bagDarkIllustration from '@/assets/img/illustrations/bag-dark.svg';
import settingsDarkIllustration from '@/assets/img/illustrations/settings-dark.svg';
import bag2DarkIllustration from '@/assets/img/illustrations/bag2-dark.svg';
import discountDarkIllustration from '@/assets/img/illustrations/discount-dark.svg';
import penDarkIllustration from '@/assets/img/illustrations/pen-dark.svg';

import '../Hero.css';

function OnlineStorePage() {
  return (
    <PageLayout>
      <SecondaryHero
        breadcrumbs={[{ label: '4-it.by', href: '/' }, { label: 'Интернет-магазин' }]}
        title="Интернет-магазин"
        description={
          <>
            Создаём интернет-магазины на платформе 1С-Битрикс, которая является одной из самых
            надёжных и функциональных CMS для электронной коммерции. Платформа обеспечивает
            стабильную работу сайта, высокий уровень безопасности и широкие возможности для
            масштабирования проекта.
            <br />
            <br />
            Интернет-магазин на 1С-Битрикс позволяет автоматизировать ключевые процессы
            онлайн-торговли: управление каталогом товаров, обработку заказов, работу с клиентами и
            интеграцию с внутренними системами компании.
          </>
        }
      />

      <StackedFeatureCardsSection
        id="online-store-capabilities"
        heading={
          <>
            Варианты разработки{' '}
            <span className="stacked-feature-cards__heading-accent">интернет-магазина</span>
          </>
        }
        {...ONLINE_STORE_STACKED}
      />

      <InfoGridSection
        title="Возможности интеграции"
        description="Интернет-магазины на 1С-Битрикс легко интегрируются с корпоративными системами компании, что позволяет автоматизировать ключевые бизнес-процессы и обеспечить актуальность данных на сайте. Мы интегрируем:"
        columnsHtml={[
          `
              <div class="info-grid__group">
                <h4>1С</h4>
                <p>
                  Синхронизация каталога товаров, цен, остатков на складе и заказов
                </p>
              </div>
              <div class="scroll-card__dots">
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot"></span>
                <span class="scroll-card__dot"></span>
                <span class="scroll-card__dot"></span>
                <span class="scroll-card__dot"></span>
                <span class="scroll-card__dot"></span>
              </div>
            `,
          `
              <div class="info-grid__group">
                <h4>CRM-системы</h4>
                <p>
                  передача заявок и заказов, управление клиентской базой
                </p>
              </div>
              <div class="scroll-card__dots">
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                  <span class="scroll-card__dot"></span>
                  <span class="scroll-card__dot"></span>
                  <span class="scroll-card__dot"></span>
                <span class="scroll-card__dot"></span>
              </div>
            `,
          `
              <div class="info-grid__group">
                <h4>Платёжные системы</h4>
                <p>
                  приём онлайн-платежей различными способами
                </p>
              </div>
              <div class="scroll-card__dots">
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot"></span>
                <span class="scroll-card__dot"></span>
                <span class="scroll-card__dot"></span>
              </div>
            `,
          `
              <div class="info-grid__group">
                <h4>Службы доставки</h4>
                <p>
                  автоматический расчёт стоимости и отслеживание отправлений
                </p>
              </div>
              <div class="scroll-card__dots">
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot"></span>
                <span class="scroll-card__dot"></span>
              </div>
            `,
          `
            <div class="info-grid__group">
              <h4>Маркетплейсы</h4>
              <p>
                выгрузка товаров и управление заказами из единого интерфейса
              </p>
            </div>
            <div class="scroll-card__dots">
              <span class="scroll-card__dot scroll-card__dot--active"></span>
              <span class="scroll-card__dot scroll-card__dot--active"></span>
              <span class="scroll-card__dot scroll-card__dot--active"></span>
              <span class="scroll-card__dot scroll-card__dot--active"></span>
              <span class="scroll-card__dot scroll-card__dot--active"></span>
              <span class="scroll-card__dot"></span>
            </div>
          `,
          `
          <div class="info-grid__group">
            <h4>Аналитические сервисы</h4>
            <p>
              автоматический расчёт стоимости и отслеживание отправлений
            </p>
          </div>
          <div class="scroll-card__dots">
            <span class="scroll-card__dot scroll-card__dot--active"></span>
            <span class="scroll-card__dot scroll-card__dot--active"></span>
            <span class="scroll-card__dot scroll-card__dot--active"></span>
            <span class="scroll-card__dot scroll-card__dot--active"></span>
            <span class="scroll-card__dot scroll-card__dot--active"></span>
            <span class="scroll-card__dot scroll-card__dot--active"></span>
          </div>
        `,
        ]}
      />

      <CardsGridSectionDark
        title="Управление интернет-магазином"
        description="Система управления 1С-Битрикс предоставляет удобный интерфейс для администрирования сайта и не требует специальных технических навыков. Администратор может оперативно обновлять информацию на сайте, управлять каталогом и контролировать обработку заказов."
        cardsHtml={[
          `
              <div class="cards-grid__media">
                <img src="${bagDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <p>
                добавление, редактирование и массовая загрузка товаров
              </p>
            `,
          `
              <div class="cards-grid__media">
                <img src="${taskDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <p>
                управление структурой каталога, категориями и характеристиками продукции
              </p>
            `,
          `
            <div class="cards-grid__media cards-grid__media--empty">
            </div>
          `,
          `
          <div class="cards-grid__media cards-grid__media--empty">
          </div>
        `,
          `
              <div class="cards-grid__media">
                <img src="${settingsDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <p>
обработка заказов, изменение статусов и контроль выполнения              
</p>
            `,
          `
            <div class="cards-grid__media">
              <img src="${bag2DarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
            </div>

            <p>
управление клиентской базой и историей заказов</p>
          `,
          `
      <div class="cards-grid__media">
        <img src="${discountDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
      </div>

      <p>настройка скидок, акций, программ лояльности и специальных предложений</p>
    `,
          `
    <div class="cards-grid__media">
      <img src="${penDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
    </div>

    <p>управление контентом сайта: страницы, новости, баннеры и другие материалы</p>
  `,
        ]}
      />

      <CertificatesSection />
      <ClientsSection />
    </PageLayout>
  );
}

export default OnlineStorePage;
