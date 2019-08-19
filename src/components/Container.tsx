/** @jsx jsx */
import { jsx } from "theme-ui";

const Container = ({ children, ...props }: { children: React.ReactNode }) => (
  <div
    {...props}
    sx={{
      display: "flex",
      flex: "1 1 auto",
      px: 2,
      py: 2,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {children}
  </div>
);

export default Container;
