/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

function CV() {
  return (
    <div sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <div
        sx={{
          maxWidth: "40%",
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column"
        }}
      >
        <Styled.h3>Introduction</Styled.h3>
        <Styled.hr />
        <Styled.h4>
          <span
            sx={{
              color: "transparent",
              textShadow: t => `0 0 0 ${t.colors.text}`,
              bg: "background"
            }}
          >
            🖖
          </span>{" "}
          I'm Bogdan Tsubeks currently live in Russia, Rostov-on-Don
        </Styled.h4>
        <Styled.h3>Contact</Styled.h3>
        <Styled.hr />
        <Styled.h4>
          Email:{" "}
          <Styled.a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:bogdan@tsubeks.xyz"
          >
            bogdan@tsubeks.xyz
          </Styled.a>
          <br />
          Telegram:
          <Styled.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/tsubeks"
          >
            @tsubeks
          </Styled.a>
          <br />
          GitHub:
          <Styled.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tsubeks"
          >
            tsubeks
          </Styled.a>
          <br />
          Web:
          <Styled.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://tsubeks.xyz"
          >
            tsubeks.xyz
          </Styled.a>
        </Styled.h4>
        <Styled.h3>Skills</Styled.h3>
        <Styled.hr />
        <Styled.h4>
          Soft skills, front-end development with a focus on CSS architecture
          and design systems, JavaScript, React, WebRTC, GraphQL and REST
        </Styled.h4>
      </div>
      <div sx={{ m: 4 }} />
      <div
        sx={{
          maxWidth: "40%",
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column"
        }}
      >
        <Styled.h3>Present</Styled.h3>
        <Styled.hr />
        <Styled.h4>Learning...</Styled.h4>
        <Styled.hr />
        <Styled.h3>Shping (2017-2019)</Styled.h3>
        <Styled.hr />
        <Styled.h3>Nedvex (2016-2017)</Styled.h3>
        <Styled.hr />
        <Styled.h3>Intspirit (2015-2016)</Styled.h3>
        <Styled.hr />
        <Styled.h3>YouRockDude (2014-2015)</Styled.h3>
        <Styled.hr />
      </div>
    </div>
  );
}

export default CV;
