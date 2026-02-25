import type { ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  iconRight?: ReactNode;
};

function Button({ children, onClick, iconRight }: ButtonProps) {
  return (
    <button className="btn" onClick={onClick}>
      <span className="btn__label">{children}</span>
      {iconRight && <span className="btn__icon">{iconRight}</span>}
    </button>
  );
}

export default Button;
