import type { ChangeEvent, FormEvent } from 'react';
import { useId, useRef, useState } from 'react';
import Button from '@/components/ui/Button';
import Input, { Select, Textarea } from '@/components/ui/Input';
import PhoneInput from '@/components/ui/PhoneInput';
import './ContactRequestForm.css';

const DEFAULT_SERVICE_OPTIONS = [
  { value: '', label: 'Выберите услуги' },
  { value: 'bitrix24', label: 'Битрикс24' },
  { value: 'support', label: 'Техническая поддержка' },
  { value: 'cybersecurity', label: 'Кибербезопасность' },
  { value: 'sites', label: 'Разработка сайтов' },
  { value: 'edo', label: 'Электронный документооборот с ЭЦП' },
  { value: 'other', label: 'Другое' },
] as const;

const DEFAULT_BUDGET_OPTIONS = [
  { value: '', label: 'Выберите бюджет' },
  { value: 'to-2k', label: 'До 2 000 BYN' },
  { value: '2k-5k', label: '2 000 — 5 000 BYN' },
  { value: '5k-15k', label: '5 000 — 15 000 BYN' },
  { value: '15k-plus', label: 'Свыше 15 000 BYN' },
  { value: 'discuss', label: 'Обсудим отдельно' },
] as const;

type ContactRequestFormProps = {
  className?: string;
  id?: string;
  serviceOptions?: ReadonlyArray<{ value: string; label: string }>;
  budgetOptions?: ReadonlyArray<{ value: string; label: string }>;
};

function PaperclipIcon() {
  return (
    <svg
      className="contact-request-form__clip-icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactRequestForm({
  className,
  id = 'contact-request',
  serviceOptions = DEFAULT_SERVICE_OPTIONS,
  budgetOptions = DEFAULT_BUDGET_OPTIONS,
}: ContactRequestFormProps) {
  const baseId = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('');
  const [comment, setComment] = useState('');
  const [consent, setConsent] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const fieldId = (key: string) => `${baseId}-${key}`;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  return (
    <section
      id={id}
      className={['contact-request-form', className].filter(Boolean).join(' ')}
      aria-labelledby={`${id}-heading`}
    >
      <div className="section-wrapper">
        <div className="section-wrapper__inner">
          <div className="contact-request-form__panel">
            <div className="contact-request-form__intro">
              <h2 id={`${id}-heading`} className="contact-request-form__title">
                Начнем работать?
              </h2>
              <p className="contact-request-form__lead">
                У вас есть вопрос, идея или проект, с которым нужна помощь? Свяжитесь с нами!{' '}
                <strong>
                  Для обратной связи укажите номер телефона или адрес электронной почты
                </strong>
              </p>
            </div>

            <form className="contact-request-form__form" onSubmit={handleSubmit}>
              <div className="contact-request-form__row contact-request-form__row--2">
                <Input
                  id={fieldId('name')}
                  label="Ваше имя"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
                <PhoneInput
                  id={fieldId('phone')}
                  label="Телефон"
                  name="phone"
                  value={phone}
                  onChange={setPhone}
                />
              </div>

              <div className="contact-request-form__row contact-request-form__row--2">
                <Input
                  id={fieldId('email')}
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <Input
                  id={fieldId('company')}
                  label="Компания"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                />
              </div>

              <Select
                id={fieldId('service')}
                label="Услуги, которые вас интересуют"
                name="service"
                value={service}
                onChange={e => setService(e.target.value)}
                options={serviceOptions}
              />

              <Select
                id={fieldId('budget')}
                label="Планируемый бюджет"
                name="budget"
                value={budget}
                onChange={e => setBudget(e.target.value)}
                options={budgetOptions}
              />

              <Textarea
                id={fieldId('comment')}
                label="Комментарий"
                name="comment"
                rows={5}
                value={comment}
                onChange={e => setComment(e.target.value)}
              />

              <div className="contact-request-form__consent">
                <input
                  id={fieldId('consent')}
                  className="contact-request-form__checkbox"
                  name="consent"
                  type="checkbox"
                  checked={consent}
                  onChange={e => setConsent(e.target.checked)}
                  required
                />
                <label className="contact-request-form__consent-label" htmlFor={fieldId('consent')}>
                  Принимаю условия{' '}
                  <a href="#" className="contact-request-form__link">
                    пользовательского соглашения
                  </a>{' '}
                  и даю согласие на обработку персональных данных.
                </label>
              </div>

              <div className="contact-request-form__actions">
                <input
                  ref={fileInputRef}
                  className="contact-request-form__file-input"
                  type="file"
                  name="attachment"
                  tabIndex={-1}
                  onChange={handleFileChange}
                />
                <Button
                  type="button"
                  className="contact-request-form__attach"
                  color="#ffffff"
                  textColor="var(--color-text-main)"
                  borderColor="var(--gray-300)"
                  iconLeft={<PaperclipIcon />}
                  onClick={handleAttachClick}
                >
                  Прикрепить файл
                </Button>
                {fileName && (
                  <span className="contact-request-form__file-name" aria-live="polite">
                    {fileName}
                  </span>
                )}
                <Button
                  type="submit"
                  className="contact-request-form__submit"
                  color="#000000"
                  textColor="#ffffff"
                >
                  Отправить заявку
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactRequestForm;
export { DEFAULT_BUDGET_OPTIONS, DEFAULT_SERVICE_OPTIONS };
