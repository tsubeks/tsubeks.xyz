/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import {
  FaGithub as Github,
  FaEnvelope as Mail,
  FaTelegram as Telegram
} from "react-icons/fa";

function Link({
  children,
  href,
  ...props
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      {...props}
      href={href}
      sx={{
        fontSize: 3,
        mx: 3,
        outline: 0,
        color: "text",
        cursor: "pointer",
        ":hover": {
          color: "primary"
        },
        ":focus": {
          color: "primary"
        }
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function Index() {
  return (
    <div sx={{ maxWidth: "container", alignSelf: "flex-start" }}>
      <h1
        sx={{
          fontFamily: "",
          m: 0,
          fontSize: 8,
          color: "text"
        }}
      >
        Bogdan Tsubeks
      </h1>
      <Styled.hr />
      <h2 sx={{ m: 0, fontSize: 3, color: "text" }}>
        Front-end developer.
        <br />
        Focuses on design systems,
        <br /> solving buisness problems, and .
      </h2>
      <br />
      <br />
      <Link sx={{ ml: 0 }} href="https://github.com/tsubeks">
        <Github color="text" />
      </Link>
      <Link href="mailto:bogdan@tsubeks.com">
        <Mail />
      </Link>
      <Link href="https://t.me/tsubeks">
        <Telegram />
      </Link>
    </div>
  );
}

export default Index;
