import type { ChangeEvent, ComponentPropsWithoutRef, ReactNode } from 'react';
import { useEffect, useId, useRef, useState } from 'react';
import './Input.css';

type InputProps = {
  label: ReactNode;
  id: string;
  /** Класс на корневом блоке `.ui-input` */
  className?: string;
  /** Доп. класс на `<input>` */
  controlClassName?: string;
} & Omit<ComponentPropsWithoutRef<'input'>, 'id'>;

function Input({ label, id, className, controlClassName, required, ...rest }: InputProps) {
  return (
    <div className={['ui-input', className].filter(Boolean).join(' ')}>
      <label className="ui-input__label" htmlFor={id}>
        {label}
        {required ? <span className="ui-input__required">*</span> : null}
      </label>
      <input
        id={id}
        className={['ui-input__control', controlClassName].filter(Boolean).join(' ')}
        required={required}
        {...rest}
      />
    </div>
  );
}

type TextareaProps = {
  label: ReactNode;
  id: string;
  className?: string;
  controlClassName?: string;
} & Omit<ComponentPropsWithoutRef<'textarea'>, 'id'>;

function Textarea({ label, id, className, controlClassName, required, ...rest }: TextareaProps) {
  return (
    <div className={['ui-input', className].filter(Boolean).join(' ')}>
      <label className="ui-input__label" htmlFor={id}>
        {label}
        {required ? <span className="ui-input__required">*</span> : null}
      </label>
      <textarea
        id={id}
        className={['ui-input__control', controlClassName].filter(Boolean).join(' ')}
        required={required}
        {...rest}
      />
    </div>
  );
}

type SelectOption = { value: string; label: string };

type SelectProps = {
  label: ReactNode;
  id: string;
  className?: string;
  controlClassName?: string;
  options: ReadonlyArray<SelectOption>;
} & Omit<ComponentPropsWithoutRef<'select'>, 'id' | 'children'>;

function SelectCaret() {
  return (
    <svg
      className="ui-select__caret"
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SelectCheck() {
  return (
    <svg
      className="ui-select__check"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Select({
  label,
  id,
  className,
  controlClassName,
  required,
  options,
  name,
  value,
  defaultValue,
  onChange,
  disabled,
}: SelectProps) {
  const listId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(() =>
    defaultValue !== undefined ? String(defaultValue) : ''
  );
  const currentValue = isControlled ? String(value ?? '') : internal;

  const emitChange = (v: string) => {
    if (!isControlled) setInternal(v);
    onChange?.({ target: { value: v } } as ChangeEvent<HTMLSelectElement>);
  };

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  const placeholderOpt = options.find(o => o.value === '');
  const selectableOptions = options.filter(o => o.value !== '');
  const selectedOpt = options.find(o => o.value === currentValue);
  const displayLabel =
    currentValue === '' || !selectedOpt
      ? (placeholderOpt?.label ?? selectableOptions[0]?.label ?? '')
      : selectedOpt.label;

  const listboxLabel = typeof label === 'string' ? label : 'Список';

  return (
    <div className={['ui-input', className].filter(Boolean).join(' ')}>
      {name != null && name !== '' && (
        <input type="hidden" name={name} value={currentValue} required={required} disabled={disabled} />
      )}
      <label className="ui-input__label" htmlFor={id}>
        {label}
        {required ? <span className="ui-input__required">*</span> : null}
      </label>
      <div
        ref={wrapRef}
        className={[
          'ui-select',
          open ? 'ui-select--open' : null,
          disabled ? 'ui-select--disabled' : null,
          controlClassName,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <button
          ref={btnRef}
          type="button"
          id={id}
          disabled={disabled}
          className="ui-select__trigger"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-required={required || undefined}
          onClick={() => !disabled && setOpen(v => !v)}
          onKeyDown={e => {
            if (e.key === 'Escape') setOpen(false);
          }}
        >
          <span
            className={[
              'ui-select__trigger-text',
              currentValue === '' ? 'ui-select__trigger-text--placeholder' : null,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {displayLabel}
          </span>
          <SelectCaret />
        </button>
        {open && !disabled && (
          <ul id={listId} className="ui-select__list" role="listbox" aria-label={listboxLabel}>
            {selectableOptions.map(opt => {
              const active = opt.value === currentValue;
              return (
                <li key={opt.value} role="none">
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    className={['ui-select__option', active ? 'ui-select__option--active' : null]
                      .filter(Boolean)
                      .join(' ')}
                    onClick={() => {
                      emitChange(opt.value);
                      setOpen(false);
                      btnRef.current?.focus();
                    }}
                  >
                    <span className="ui-select__option-label">{opt.label}</span>
                    <span className="ui-select__option-indicator" aria-hidden>
                      {active ? <SelectCheck /> : null}
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

type MultiSelectProps = {
  label: ReactNode;
  id: string;
  className?: string;
  controlClassName?: string;
  options: ReadonlyArray<SelectOption>;
  name?: string;
  value: string[];
  onChange: (values: string[]) => void;
  required?: boolean;
  disabled?: boolean;
};

function MultiSelect({
  label,
  id,
  className,
  controlClassName,
  options,
  name,
  value,
  onChange,
  required,
  disabled,
}: MultiSelectProps) {
  const listId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  const placeholderOpt = options.find(o => o.value === '');
  const selectableOptions = options.filter(o => o.value !== '');
  const labelByValue = Object.fromEntries(selectableOptions.map(o => [o.value, o.label]));

  const toggle = (v: string) => {
    if (value.includes(v)) {
      onChange(value.filter(x => x !== v));
    } else {
      onChange([...value, v]);
    }
  };

  const remove = (v: string) => {
    onChange(value.filter(x => x !== v));
  };

  const hiddenValue = value.join(',');
  const listboxLabel = typeof label === 'string' ? label : 'Список';

  return (
    <div className={['ui-input', className].filter(Boolean).join(' ')}>
      {name != null && name !== '' && (
        <input
          type="hidden"
          name={name}
          value={hiddenValue}
          required={required}
          disabled={disabled}
        />
      )}
      <label className="ui-input__label" htmlFor={id}>
        {label}
        {required ? <span className="ui-input__required">*</span> : null}
      </label>
      <div
        ref={wrapRef}
        className={[
          'ui-multi-select',
          open ? 'ui-multi-select--open' : null,
          disabled ? 'ui-multi-select--disabled' : null,
          controlClassName,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <button
          ref={btnRef}
          type="button"
          id={id}
          disabled={disabled}
          className="ui-multi-select__trigger"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-required={required || undefined}
          onClick={() => !disabled && setOpen(v => !v)}
          onKeyDown={e => {
            if (e.key === 'Escape') setOpen(false);
          }}
        >
          <div className="ui-multi-select__values">
            {value.length === 0 ? (
              <span className="ui-multi-select__placeholder">
                {placeholderOpt?.label ?? 'Выберите из списка'}
              </span>
            ) : (
              value.map(v => (
                <span key={v} className="ui-multi-select__chip">
                  <span className="ui-multi-select__chip-text">{labelByValue[v] ?? v}</span>
                  <button
                    type="button"
                    className="ui-multi-select__chip-remove"
                    aria-label={`Убрать: ${labelByValue[v] ?? v}`}
                    tabIndex={0}
                    onMouseDown={e => e.preventDefault()}
                    onClick={e => {
                      e.stopPropagation();
                      remove(v);
                    }}
                  >
                    ×
                  </button>
                </span>
              ))
            )}
          </div>
          <SelectCaret />
        </button>
        {open && !disabled && (
          <ul
            id={listId}
            className="ui-multi-select__list"
            role="listbox"
            aria-label={listboxLabel}
            aria-multiselectable="true"
          >
            {selectableOptions.map(opt => {
              const selected = value.includes(opt.value);
              return (
                <li key={opt.value} role="none">
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    className={[
                      'ui-multi-select__option',
                      selected ? 'ui-multi-select__option--selected' : null,
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    onClick={e => {
                      e.stopPropagation();
                      toggle(opt.value);
                    }}
                  >
                    <span className="ui-multi-select__option-label">{opt.label}</span>
                    <span className="ui-multi-select__option-indicator" aria-hidden>
                      {selected ? <SelectCheck /> : null}
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

export default Input;
export { MultiSelect, Select, Textarea };
