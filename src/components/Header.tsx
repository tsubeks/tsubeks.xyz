/** @jsx jsx */
import { jsx } from "theme-ui";

const Header = ({ children, ...props }: { children: React.ReactNode }) => (
  <header {...props} sx={{ display: "flex", bg: "background" }}>
    {children}
  </header>
);

export default Header;
