// react
import type { ChangeEvent, FormEvent } from 'react';
import { useId, useRef, useState } from 'react';

// components
import Button from '@/shared/ui/Button';
import Input, { MultiSelect, Select, Textarea } from '@/shared/ui/Input';
import PhoneInput from '@/shared/ui/PhoneInput';

import './ContactRequestForm.css';

/**
 * Отправка через FormSubmit (работает и в dev, и после build — разницы нет).
 * Обязательно: подтвердить форму по ссылке из письма FormSubmit на bogachenko.av@4-it.by.
 */
const CONTACT_FORM_RECIPIENT = 'bogachenko.av@4-it.by';
const CONTACT_FORM_SUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_FORM_RECIPIENT}`;

const DEFAULT_SERVICE_OPTIONS = [
  { value: '', label: 'Выберите одну или несколько услуг' },
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

function ReplaceFileIcon() {
  return (
    <svg
      className="contact-request-form__file-action-icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M21 12a9 9 0 00-9-9 9.75 9.75 0 00-6.74 2.74L3 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 3v5h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12a9 9 0 009 9 9.75 9.75 0 006.74-2.74L21 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 21v-5h-5"
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
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState('');
  const [comment, setComment] = useState('');
  const [consent, setConsent] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const fieldId = (key: string) => `${baseId}-${key}`;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);

    const phoneTrimmed = phone.trim();
    const emailTrimmed = email.trim();
    if (!phoneTrimmed && !emailTrimmed) {
      setSubmitError('Укажите номер телефона или email — так мы сможем с вами связаться.');
      return;
    }

    const budgetLabel =
      (budgetOptions.find(o => o.value === budget)?.label ?? budget) || '—';
    const serviceLabels =
      services.length > 0
        ? services
            .filter(Boolean)
            .map(v => serviceOptions.find(o => o.value === v)?.label ?? v)
            .join(', ')
        : '—';

    const bodyLines = [
      `Имя: ${name}`,
      `Телефон: ${phoneTrimmed || '—'}`,
      `Email: ${emailTrimmed || '—'}`,
      `Компания: ${company.trim() || '—'}`,
      `Услуги: ${serviceLabels}`,
      `Бюджет: ${budgetLabel}`,
      '',
      'Комментарий:',
      comment.trim() || '—',
    ];
    const messageText = bodyLines.join('\n');

    const formData = new FormData();
    /* AJAX без виджета reCAPTCHA — иначе FormSubmit часто отклоняет заявку «тихо» */
    formData.append('_captcha', 'false');
    formData.append('_subject', 'Новая заявка с сайта 4-it');
    formData.append('name', name);
    formData.append('phone', phoneTrimmed || '—');
    formData.append('email', emailTrimmed || '—');
    formData.append('company', company.trim() || '—');
    formData.append('services', serviceLabels);
    formData.append('budget', budgetLabel);
    formData.append('message', messageText);
    if (emailTrimmed) {
      formData.append('_replyto', emailTrimmed);
    }
    formData.append('_template', 'table');

    const file = fileInputRef.current?.files?.[0];
    if (file) {
      formData.append('attachment', file, file.name);
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(CONTACT_FORM_SUBMIT_URL, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      const raw = await res.text();
      type SubmitJson = { success?: boolean; ok?: boolean; message?: string };
      let data: SubmitJson | null = null;
      try {
        data = raw ? (JSON.parse(raw) as SubmitJson) : null;
      } catch {
        /* не JSON — не считаем успехом при сомнительном ответе */
      }
      const looksLikeJson = /^\s*(?:\[|\{)/.test(raw);
      const failed =
        !res.ok ||
        data?.success === false ||
        data?.ok === false ||
        (data == null && raw.length > 0 && !looksLikeJson);
      if (failed) {
        throw new Error(
          data?.message ??
            (raw && raw.length < 400 ? raw : null) ??
            'Не удалось отправить форму. Попробуйте позже.',
        );
      }
      setSubmitSuccess(true);
      setName('');
      setPhone('');
      setEmail('');
      setCompany('');
      setServices([]);
      setBudget('');
      setComment('');
      setConsent(false);
      setFileName(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Ошибка отправки. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleReplaceFile = () => {
    const input = fileInputRef.current;
    if (input) input.value = '';
    input?.click();
  };

  const clearFile = () => {
    setFileName(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
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

            <form className="contact-request-form__form" onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="contact-request-form__honeypot"
              />
              {(submitError || submitSuccess) && (
                <div
                  className={
                    submitSuccess
                      ? 'contact-request-form__feedback contact-request-form__feedback--success'
                      : 'contact-request-form__feedback contact-request-form__feedback--error'
                  }
                  role="status"
                  aria-live="polite"
                >
                  {submitSuccess
                    ? 'Спасибо! Заявка отправлена — мы свяжемся с вами.'
                    : submitError}
                </div>
              )}
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

              <MultiSelect
                id={fieldId('service')}
                label="Услуги, которые вас интересуют"
                name="service"
                value={services}
                onChange={setServices}
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
                <div className="contact-request-form__actions-main">
                  {fileName ? (
                    <div
                      className="contact-request-form__file-chip"
                      aria-live="polite"
                    >
                      <span
                        className="contact-request-form__file-chip-name"
                        title={fileName}
                      >
                        {fileName}
                      </span>
                      <div className="contact-request-form__file-chip-actions">
                        <button
                          type="button"
                          className="contact-request-form__file-icon-btn"
                          aria-label="Заменить файл"
                          onClick={handleReplaceFile}
                        >
                          <ReplaceFileIcon />
                        </button>
                        <button
                          type="button"
                          className="contact-request-form__file-icon-btn contact-request-form__file-icon-btn--remove"
                          aria-label="Удалить файл"
                          onClick={clearFile}
                        >
                          <span aria-hidden>×</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <Button
                      type="button"
                      className="contact-request-form__attach contact-request-form__attach--block"
                      color="#ffffff"
                      textColor="var(--color-text-main)"
                      borderColor="var(--gray-300)"
                      iconLeft={<PaperclipIcon />}
                      onClick={handleAttachClick}
                    >
                      Прикрепить файл
                    </Button>
                  )}
                </div>
                <Button
                  type="submit"
                  className="contact-request-form__submit"
                  color="#01111E"
                  textColor="#ffffff"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Отправка…' : 'Отправить'}
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
