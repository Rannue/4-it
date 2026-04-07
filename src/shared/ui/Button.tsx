import type { CSSProperties, ReactNode, MouseEvent } from 'react';
import './Button.css';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  /** Быстрый способ задать основной цвет кнопки (фон) */
  color?: string;
  /** Цвет текста/иконки */
  textColor?: string;
  /** Цвет бордера (если нужен) */
  borderColor?: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  /** Если задан — рендерится `<a>` с теми же стилями, что и кнопка */
  href?: string;
  target?: string;
  rel?: string;
};

type ButtonInlineStyle = CSSProperties & {
  '--btn-bg'?: string;
  '--btn-fg'?: string;
  '--btn-border'?: string;
};

function Button({
  children,
  onClick,
  iconLeft,
  iconRight,
  color,
  textColor,
  borderColor,
  className,
  disabled,
  type = 'button',
  href,
  target,
  rel,
}: ButtonProps) {
  const setPointerVars = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--btn-mx', `${x}px`);
    el.style.setProperty('--btn-my', `${y}px`);
  };

  const style: ButtonInlineStyle | undefined =
    color || textColor || borderColor
      ? {
          ...(color ? { '--btn-bg': color } : {}),
          ...(textColor ? { '--btn-fg': textColor } : {}),
          ...(borderColor ? { '--btn-border': borderColor } : {}),
        }
      : undefined;

  const classNames = ['btn', className, disabled ? 'btn--disabled' : null].filter(Boolean).join(' ');

  const inner = (
    <>
      {iconLeft && <span className="btn__icon">{iconLeft}</span>}
      <span className="btn__label">{children}</span>
      {iconRight && <span className="btn__icon">{iconRight}</span>}
    </>
  );

  if (href != null && href !== '') {
    if (disabled) {
      return (
        <span className={classNames} style={style} aria-disabled>
          {inner}
        </span>
      );
    }
    const resolvedRel =
      rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined);
    return (
      <a
        href={href}
        className={classNames}
        onClick={onClick}
        onMouseMove={setPointerVars}
        onMouseEnter={setPointerVars}
        style={style}
        target={target}
        rel={resolvedRel}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      onMouseMove={setPointerVars}
      onMouseEnter={setPointerVars}
      style={style}
      disabled={disabled}
    >
      {inner}
    </button>
  );
}

export default Button;
