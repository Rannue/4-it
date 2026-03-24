import Header from '../components/Header';
import Footer from '../components/Footer';

function CybersecuritySiemPage() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <section className="section">
          <h1>SIEM (Security Information and Event Management)</h1>
          <p>
            Страница услуги по внедрению и сопровождению SIEM-решений для централизованного
            мониторинга и корреляции событий информационной безопасности.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CybersecuritySiemPage;
