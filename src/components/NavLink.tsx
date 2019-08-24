/** @jsx jsx */
import { jsx } from "theme-ui";
import { NavLink } from "react-router-dom";

function Link({
  children,
  exact = true,
  ...props
}: {
  children?: React.ReactNode;
  exact?: boolean;
  to: any;
}) {
  return (
    <NavLink
      {...props}
      exact={true}
      activeClassName="active"
      sx={{
        display: "inline-block",
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
        color: "text",
        bg: "background",
        "&.active": {
          bg: "text",
          color: "background"
        },
        ":hover, :focus": {
          outline: t => `solid 2px ${t.colors.text}`
        }
      }}
    >
      {children}
    </NavLink>
  );
}

export default Link;
