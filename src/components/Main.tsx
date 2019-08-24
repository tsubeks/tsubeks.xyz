/** @jsx jsx */
import { jsx } from "theme-ui";

function Main({ children, ...props }: { children: React.ReactNode }) {
  return (
    <main
      {...props}
      sx={{ display: "flex", bg: "background", flex: "1 1 auto" }}
    >
      {children}
    </main>
  );
}

export default Main;
