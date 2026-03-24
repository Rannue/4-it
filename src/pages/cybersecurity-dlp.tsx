import Header from '../components/Header';
import Footer from '../components/Footer';

function CybersecurityDlpPage() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <section className="section">
          <h1>DLP (Data Loss Prevention)</h1>
          <p>
            Страница услуги по внедрению и настройке DLP-систем для предотвращения утечек
            конфиденциальной информации.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CybersecurityDlpPage;
