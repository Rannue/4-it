// react
import type {
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  ReactNode,
} from 'react';
import { useEffect, useId, useRef, useState } from 'react';

import './PhoneInput.css';

type PhoneCountryOption = {
  dial: string;
  /** Подпись в списке (страна / зона) */
  hint: string;
  maxDigits: number;
  /** Группы цифр после кода: (первая в скобках) + через пробел */
  groups: readonly number[];
};

const DEFAULT_COUNTRIES: readonly PhoneCountryOption[] = [
  { dial: '+375', hint: 'Беларусь', maxDigits: 9, groups: [2, 3, 2, 2] },
  { dial: '+7', hint: 'Россия / Казахстан', maxDigits: 10, groups: [3, 3, 2, 2] },
] as const;

function defaultDial(countries: readonly PhoneCountryOption[]): string {
  return countries[0]?.dial ?? '+375';
}

function getPreset(dial: string, countries: readonly PhoneCountryOption[]): PhoneCountryOption {
  return countries.find(c => c.dial === dial) ?? countries[0];
}

/** Разбор значения вида +375291234567 в код и национальные цифры */
function parseInternationalPhone(
  value: string,
  countries: readonly PhoneCountryOption[] = DEFAULT_COUNTRIES
): { dial: string; digits: string } {
  if (!value) return { dial: defaultDial(countries), digits: '' };
  const sorted = [...countries].sort((a, b) => b.dial.length - a.dial.length);
  for (const p of sorted) {
    if (value.startsWith(p.dial)) {
      const digits = value.slice(p.dial.length).replace(/\D/g, '').slice(0, p.maxDigits);
      return { dial: p.dial, digits };
    }
  }
  const digitsOnly = value.replace(/\D/g, '');
  const d0 = defaultDial(countries);
  return { dial: d0, digits: digitsOnly.slice(0, getPreset(d0, countries).maxDigits) };
}

function formatNationalDigits(digits: string, groups: readonly number[]): string {
  if (!digits) return '';
  const chunks: string[] = [];
  let pos = 0;
  for (const g of groups) {
    const c = digits.slice(pos, pos + g);
    if (!c) break;
    chunks.push(c);
    pos += c.length;
  }
  if (chunks.length === 0) return '';
  let s = `(${chunks[0]}`;
  if (chunks[0].length < groups[0]) return s;
  s += ')';
  if (chunks.length > 1) {
    s += ' ';
    for (let j = 1; j < chunks.length; j++) {
      if (j > 1) s += ' ';
      s += chunks[j];
    }
  }
  return s;
}

function placeholderMask(groups: readonly number[]): string {
  return groups[0] === 2 ? '(--) --- -- --' : '(---) --- -- --';
}

function buildFullValue(
  dial: string,
  nationalDigits: string,
  countries: readonly PhoneCountryOption[]
): string {
  const max = getPreset(dial, countries).maxDigits;
  const d = nationalDigits.replace(/\D/g, '').slice(0, max);
  if (!d) return dial === defaultDial(countries) ? '' : dial;
  return dial + d;
}

type PhoneInputProps = {
  id: string;
  label: ReactNode;
  name?: string;
  value: string;
  onChange: (fullInternational: string) => void;
  className?: string;
  required?: boolean;
  countries?: readonly PhoneCountryOption[];
  autoComplete?: string;
};

function CaretIcon() {
  return (
    <svg
      className="phone-input__caret"
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 1l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneInput({
  id,
  label,
  name,
  value,
  onChange,
  className,
  required,
  countries = DEFAULT_COUNTRIES,
  autoComplete = 'tel-national',
}: PhoneInputProps) {
  const listId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const { dial, digits } = parseInternationalPhone(value, countries);
  const preset = getPreset(dial, countries);
  const formatted = formatNationalDigits(digits, preset.groups);
  const placeholder = placeholderMask(preset.groups);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: globalThis.MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  const commit = (nextDial: string, nextDigits: string) => {
    const p = getPreset(nextDial, countries);
    const d = nextDigits.replace(/\D/g, '').slice(0, p.maxDigits);
    const full = buildFullValue(nextDial, d, countries);
    onChange(full);
  };

  const selectDial = (nextDial: string) => {
    const p = getPreset(nextDial, countries);
    const d = digits.slice(0, p.maxDigits);
    commit(nextDial, d);
    setOpen(false);
    btnRef.current?.focus();
  };

  const onNationalChange = (raw: string) => {
    const nextDigits = raw.replace(/\D/g, '').slice(0, preset.maxDigits);
    commit(dial, nextDigits);
  };

  const onNationalKeyDown = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const onCodeClick = (e: ReactMouseEvent) => {
    e.preventDefault();
    setOpen(v => !v);
  };

  const fullHidden = (() => {
    const p = getPreset(dial, countries);
    const d = digits.replace(/\D/g, '').slice(0, p.maxDigits);
    return d ? dial + d : '';
  })();

  return (
    <div className={['phone-input', className].filter(Boolean).join(' ')}>
      {name != null && name !== '' && (
        <input type="hidden" name={name} value={fullHidden} readOnly />
      )}
      <label className="phone-input__label" htmlFor={id}>
        {label}
        {required ? (
          <>
            {' '}
            <span className="phone-input__required">*</span>
          </>
        ) : null}
      </label>
      <div
        ref={wrapRef}
        className={['phone-input__code-wrap', open ? 'phone-input__code-wrap--open' : null]
          .filter(Boolean)
          .join(' ')}
      >
        <div className="phone-input__row">
          <button
            ref={btnRef}
            type="button"
            className="phone-input__code-btn"
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-controls={listId}
            id={`${id}-code-trigger`}
            onClick={onCodeClick}
          >
            <span>{dial}</span>
            <CaretIcon />
          </button>
          <input
            id={id}
            type="tel"
            inputMode="numeric"
            autoComplete={autoComplete}
            className="phone-input__national"
            placeholder={placeholder}
            value={formatted}
            onChange={e => onNationalChange(e.target.value)}
            onKeyDown={onNationalKeyDown}
            required={required}
          />
        </div>
        {open && (
          <ul id={listId} className="phone-input__dropdown" role="listbox" aria-label="Код страны">
            {countries.map(c => {
              const active = c.dial === dial;
              return (
                <li key={c.dial} role="none">
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    className={[
                      'phone-input__option',
                      active ? 'phone-input__option--active' : null,
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    onClick={() => selectDial(c.dial)}
                  >
                    <span className="phone-input__option-main">
                      <span className="phone-input__option-code">{c.dial}</span>
                      <span className="phone-input__option-hint">{c.hint}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PhoneInput;
