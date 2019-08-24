/** @jsx jsx */
import { jsx } from "theme-ui";

function Header({ children, ...props }: { children: React.ReactNode }) {
  return (
    <header {...props} sx={{ display: "flex", bg: "background" }}>
      {children}
    </header>
  );
}

export default Header;
