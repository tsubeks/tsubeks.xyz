/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

function CV() {
  return (
    <div
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        flexWrap: "wrap"
      }}
    >
      <div
        sx={{
          display: "flex",
          flex: "1",
          mr: [null, 4, 4],
          flexDirection: "column"
        }}
      >
        <Styled.h3>Introduction</Styled.h3>
        <Styled.hr />
        <Styled.h4>
          <span
            role="img"
            aria-label="Hi"
            sx={{
              color: "transparent",
              "&": {
                textShadow: t => `0 0 0 ${t.colors.text}`
              },
              bg: "background"
            }}
          >
            🖖
          </span>{" "}
          Hi, my name is Bogdan Tsubeks, and I'm front-end developer who loves
          creating products that are beautiful and have great performance.
          Genrally I like scratching my own itch and create software that solves
          peoples problems. <br />
          <br />
          I've started programming when I was 13. In 2014 finished 2 years
          program of Bachelor of Computer Science and since then worked a lot
          with React.js stack.
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
          and design systems, JavaScript, React, Canvas, WebRTC, GraphQL and
          REST.
        </Styled.h4>
      </div>
      <div
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column"
        }}
      >
        <Styled.h3>Present</Styled.h3>
        <Styled.hr />
        <Styled.h4>
          Currently I actively learning English, C, network programming and also
          looking for new opportunities. Live in Russia, Rostov-on-Don.
        </Styled.h4>
        <Styled.hr />
        <Styled.h3>Shping (2017-2019)</Styled.h3>
        Was working at
        <Styled.a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.shping.com"
        >
          Shping
        </Styled.a>
        on front-end lead position with a team of 3 people. Shping is a shopping
        app. React + Redux + Redux Saga
        <Styled.hr />
        <Styled.h3>Nedvex (2016-2017)</Styled.h3>
        Worked as a front-end lead at
        <Styled.a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nedvex.ru"
        >
          Nedvex
        </Styled.a>
        . Nedvex is close platform for realtors from Sochi.
        <Styled.hr />
        <Styled.h3>Intspirit (2015-2016)</Styled.h3>
        Main project was I was rewriting
        <Styled.a
          target="_blank"
          rel="noopener noreferrer"
          href="https://lawcus.com"
        >
          Lawcus
        </Styled.a>
        from Angular 1.x to React.js
        <Styled.hr />
        <Styled.h3>YouRockDude (2014-2015)</Styled.h3>
        <Styled.a
          target="_blank"
          rel="noopener noreferrer"
          href="https://yourockdude.com"
        >
          YouRockDude
        </Styled.a>
        <Styled.hr />
      </div>
    </div>
  );
}

export default CV;
