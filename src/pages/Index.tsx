/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  FaGithub as Github,
  FaEnvelope as Mail,
  FaTelegram as Telegram
} from "react-icons/fa";

function Link(props: any) {
  return (
    <a
      {...props}
      sx={{
        fontSize: 3,
        mx: 3,
        outline: "none",
        color: "text",
        ":hover": {
          color: "primary"
        },
        ":focus": {
          color: "primary"
        }
      }}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
}

const Index = () => {
  return (
    <div sx={{ maxWidth: "container", alignSelf: "flex-start" }}>
      <h1 sx={{ fontFamily: "", m: 0, fontSize: 8, color: "text" }}>
        Bogdan Tsubeks
      </h1>
      <hr
        sx={{
          border: 0,
          height: 4,
          my: 2,
          bg: "text"
        }}
      />
      <h2 sx={{ m: 0, fontSize: 3, color: "text" }}>
        Front-end developer.
        <br />
        Focus on design systems,
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
      <Link href="http://t.me/tsubeks">
        <Telegram />
      </Link>
    </div>
  );
};

export default Index;
