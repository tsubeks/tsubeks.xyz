/** @jsx jsx */
import { jsx } from "theme-ui";

const Button = ({
  children,
  variant = "primary",
  ...props
}: {
  children?: React.ReactNode;
  variant?: string;
  onClick: VoidFunction;
}) => (
  <button
    {...props}
    sx={{
      display: "inline-block",
      appearance: "none",
      cursor: "pointer",
      textAlign: "center",
      lineHeight: "inherit",
      textDecoration: "none",
      fontSize: "inherit",
      fontWeight: "bold",
      outline: 0,
      m: 0,
      px: 3,
      py: 2,
      border: 0,
      borderRadius: 0,
      variant: `buttons.${variant}`,
      ":focus": {
        outline: t => `2px solid ${t.colors.secondary}`
      }
    }}
  >
    {children}
  </button>
);

export default Button;
