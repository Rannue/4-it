import '@/app/App.css';
import './ClientsSection.css';
import proleasingLogo from '@/assets/img/partners/Пролизинг.svg';
import asbLogo from '@/assets/img/partners/asb-new 1.svg';
import belgospishepromLogo from '@/assets/img/partners/Белгоспищепром.svg';
import bnLogo from '@/assets/img/partners/bn.svg';
import santalogo from '@/assets/img/partners/Santa.svg';
import sberLogo from '@/assets/img/partners/Sber-Lizing-logotip 1.png';
import vitebskiekovryLogo from '@/assets/img/partners/Витебские ковры.svg';

const clients = [
  { name: 'Proleasing', logo: proleasingLogo },
  { name: 'Белгоспищепром', logo: belgospishepromLogo },
  { name: 'АСБ Лизинг', logo: asbLogo },
  { name: 'Санта', logo: santalogo },
  { name: 'Белоруснефть', logo: bnLogo },
  { name: 'Сбер Лизинг', logo: sberLogo },
  { name: 'Витебские ковры', logo: vitebskiekovryLogo },
  { name: 'АСБ Лизинг', logo: asbLogo },
  { name: 'АСБ Лизинг', logo: asbLogo },
  { name: 'АСБ Лизинг', logo: asbLogo },
  { name: 'АСБ Лизинг', logo: asbLogo },
  { name: 'АСБ Лизинг', logo: asbLogo },
];

function ClientsSection() {
  return (
    <section className="clients">
      <div className="section-wrapper__inner">
        <header className="clients__header">
          <h2 className="clients__title">Наши клиенты</h2>
          <p className="clients__subtitle">
            Представители международного бизнеса, государственного сектора и белорусских компаний,
            лидеры своих отраслей.
          </p>
        </header>
      </div>

      <div className="clients__grid-wrapper">
        <div className="clients__grid">
          {clients.map((client, index) => (
            <div key={index} className="clients__cell">
              <img src={client.logo} alt={client.name} className="clients__logo-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
