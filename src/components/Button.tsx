import type { CSSProperties, ReactNode } from 'react';
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
}: ButtonProps) {
  const style: CSSProperties | undefined =
    color || textColor || borderColor
      ? {
          ...(color ? { ['--btn-bg' as any]: color } : null),
          ...(textColor ? { ['--btn-fg' as any]: textColor } : null),
          ...(borderColor ? { ['--btn-border' as any]: borderColor } : null),
        }
      : undefined;

  return (
    <button
      type={type}
      className={['btn', className, disabled ? 'btn--disabled' : null].filter(Boolean).join(' ')}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {iconLeft && <span className="btn__icon">{iconLeft}</span>}
      <span className="btn__label">{children}</span>
      {iconRight && <span className="btn__icon">{iconRight}</span>}
    </button>
  );
}

export default Button;
