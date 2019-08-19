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
      m: 0,
      px: 3,
      py: 2,
      border: 0,
      borderRadius: 0,
      variant: `buttons.${variant}`,
      ":focus": {
        outline: "solid 2px"
      }
    }}
  >
    {children}
  </button>
);

export default Button;
