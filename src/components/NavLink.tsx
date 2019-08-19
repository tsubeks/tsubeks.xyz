/** @jsx jsx */
import { jsx } from "theme-ui";
import { NavLink } from "react-router-dom";

const Link = ({
  children,
  exact = true,
  ...props
}: {
  children?: React.ReactNode;
  exact?: boolean;
  to: any;
}) => (
  <NavLink
    {...props}
    exact={true}
    activeClassName="active"
    sx={{
      display: "inline-block",
      font: "400 11px system-ui",
      appearance: "none",
      textAlign: "center",
      lineHeight: "inherit",
      textDecoration: "none",
      fontSize: "inherit",
      fontWeight: "bold",
      mx: 2,
      px: 3,
      py: 2,
      border: 0,
      borderRadius: 0,
      color: "primary",
      bg: "background",
      "&.active": {
        bg: "primary",
        color: "background"
      },
      ":focus": {
        outline: "solid 2px"
      }
    }}
  >
    {children}
  </NavLink>
);

export default Link;
