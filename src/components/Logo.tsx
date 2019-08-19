/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "react-router-dom";

const Logo = ({
  children,
  to = "/",
  ...props
}: {
  children: React.ReactNode;
  to?: string;
}) => (
  <Link
    {...props}
    to={to}
    sx={{
      textDecoration: "none"
    }}
  >
    <div
      sx={{
        display: "flex",
        minWidth: "64px",
        minHeight: "64px",
        bg: "transparent",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
      }}
    >
      <div
        sx={{
          display: "flex",
          width: "40px",
          height: "40px",
          fontSize: "54px",
          color: "transparent",
          textShadow: `0 0 0 white`,
          bg: "text",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* <span */}
        {/*   sx={{ maxHeight: "64px", color: "text" }} */}
        {/*   role="img" */}
        {/*   aria-label="logo" */}
        {/* > */}
        {/*   {children} */}
        {/* </span> */}
      </div>
    </div>
  </Link>
);

export default Logo;
