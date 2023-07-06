import styles from "./button.module.scss";
import { ButtonProps } from "./button.types";

const Button = ({
  children,
  disabled,
  rounded,
  onClick,
  variant = "primary",
  type = "button",
  size = "regular",
  extraClassName,
  wide,
  role,
}: ButtonProps) => {
  return (
    <button
      role={role}
      disabled={disabled}
      type={type}
      className={[
        styles.btn,
        styles[variant],
        styles[size],
        rounded && styles.rounded,
        rounded && styles[`rounded_${size}`],
        wide && styles.wide,
        extraClassName,
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
