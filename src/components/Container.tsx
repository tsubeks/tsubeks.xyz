/** @jsx jsx */
import { jsx } from "theme-ui";

const Container = ({ children, ...props }: { children: React.ReactNode }) => (
  <div
    {...props}
    sx={{
      display: "flex",
      flex: "1 1 auto",
      p: 4,
      mx: "auto",
      flexDirection: "column",
      maxWidth: "wide",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {children}
  </div>
);

export default Container;
