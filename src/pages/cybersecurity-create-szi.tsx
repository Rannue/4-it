import Header from '../components/Header';
import Footer from '../components/Footer';
import SecondaryHero from '../components/SecondaryHero';

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
