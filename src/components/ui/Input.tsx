import type { ComponentPropsWithoutRef, ReactNode } from 'react';
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

function Select({ label, id, className, controlClassName, required, options, ...rest }: SelectProps) {
  return (
    <div className={['ui-input', className].filter(Boolean).join(' ')}>
      <label className="ui-input__label" htmlFor={id}>
        {label}
        {required ? <span className="ui-input__required">*</span> : null}
      </label>
      <select
        id={id}
        className={['ui-input__control', controlClassName].filter(Boolean).join(' ')}
        required={required}
        {...rest}
      >
        {options.map((opt) => (
          <option key={opt.value || `empty-${opt.label}`} value={opt.value} disabled={opt.value === ''}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Input;
export { Select, Textarea };
