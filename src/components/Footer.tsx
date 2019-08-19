/** @jsx jsx */
import { jsx } from "theme-ui";

const Footer = ({ children, ...props }: { children: React.ReactNode }) => (
  <footer {...props} sx={{ display: "flex", bg: "background" }}>
    {children}
  </footer>
);

export default Footer;
