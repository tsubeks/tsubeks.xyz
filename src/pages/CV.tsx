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
      id="capture"
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
          creating products that look perfect and have great performance.
          Generally I like scratching my own itch and create software that
          solves peoples problems. <br />
          <br />
          I've started programming when I was 13 my first language was Pascal,
          also I learned C, C++, C#, PHP, HTML/CSS, my first big project I've
          created when I was 14 in 2011. It was{" "}
          <Styled.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://web.archive.org/web/20111113223701/http://prigorod-taganroga.ru/"
          >
            site
          </Styled.a>{" "}
          for real estate company in Taganrog. In 2014 finished 2 years program
          of Bachelor of Computer Science and since then worked a lot with
          React.js stack.
          <br />
          <br />
          Love beautiful{" "}
          <Styled.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.reddit.com/r/unixporn/"
          >
            design
          </Styled.a>
          , math and philosophy.
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
          looking for new opportunities. Live in Russia, Taganrog.
        </Styled.h4>
        <Styled.h3>Shping (2017-2019)</Styled.h3>
        <Styled.hr />
        <Styled.h4>
          Was working at{" "}
          <Styled.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.shping.com"
          >
            Shping
          </Styled.a>{" "}
          on front-end lead position with a team of 3 people. Shping is a
          shopping app. Stack on this project is React + Redux + Sagas.
        </Styled.h4>
        <Styled.h3>Nedvex (2016-2017)</Styled.h3>
        <Styled.hr />
        <Styled.h4>
          Worked as a front-end lead at{" "}
          <Styled.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nedvex.ru"
          >
            Nedvex
          </Styled.a>
          . This is closed platform for realtors from Sochi. I used React +
          Redux + Canvas to create this site.
        </Styled.h4>
        <Styled.h3>Intspirit (2015-2016)</Styled.h3>
        <Styled.hr />
        <Styled.h4>
          Main project that I worked in Intspirit (outsoursing) was rewriting{" "}
          <Styled.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://lawcus.com"
          >
            Lawcus
          </Styled.a>{" "}
          from Angular 1.x to React.js
        </Styled.h4>
        <Styled.h3>YouRockDude (2014-2015)</Styled.h3>
        <Styled.hr />
        <Styled.h4>
          Here in{" "}
          <Styled.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://yourockdude.com"
          >
            YouRockDude
          </Styled.a>{" "}
          I've created lot's of app based on WordPress.
        </Styled.h4>
      </div>
    </div>
  );
}

export default CV;
