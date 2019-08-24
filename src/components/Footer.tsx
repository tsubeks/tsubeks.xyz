/** @jsx jsx */
import { jsx } from "theme-ui";

function Footer({ children, ...props }: { children: React.ReactNode }) {
  return (
    <footer {...props} sx={{ display: "flex", bg: "background" }}>
      {children}
    </footer>
  );
}

export default Footer;
