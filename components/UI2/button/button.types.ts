export interface ButtonProps {
  children?: React.ReactNode;
  variant?:
    | "primary"
    | "primary_green"
    | "secondary"
    | "danger"
    | "tertiary"
    | "alternate"
    | "anchor";
  size?: "midlong" | "regular" | "medium" | "small" | "tiny";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  rounded?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  extraClassName?: string;
  role?: string;
  wide?: boolean;
}
