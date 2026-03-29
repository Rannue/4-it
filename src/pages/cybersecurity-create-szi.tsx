import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SecondaryHero from '@/components/sections/SecondaryHero';

function CybersecurityCreateSziPage() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <SecondaryHero
          breadcrumbs={[
            { label: 'Главная', href: '/' },
            { label: 'Кибербезопасность', href: '/cybersecurity' },
            { label: 'Создание СЗИ' },
          ]}
          title="Создание СЗИ"
        />
      </main>
      <Footer />
    </div>
  );
}

export default CybersecurityCreateSziPage;
