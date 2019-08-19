/** @jsx jsx */
import { useEffect, useState, useRef } from "react";
import { jsx, useColorMode } from "theme-ui";
// import {
//   FaGithub as Github,
//   FaBookDead as Book,
//   FaBullseye as Bull
// } from "react-icons/fa";

import Logo from "./Logo";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Container from "./Container";
import Button from "./Button";
import NavLink from "./NavLink";

const modes = ["light", "deep", "hack", "pink"];

function useInterval(callback: Function, delay: number) {
  const savedCallback = useRef(callback);

  // remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // set up the interval
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Layout({ children, ...props }: { children: React.ReactNode }) {
  const [mode, setMode] = useColorMode();
  const [delay, setDelay] = useState(1);
  const [time, setTime] = useState(0);

  useInterval(() => setTime(new Date().getTime()), delay);

  return (
    <div
      {...props}
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bg: "primary"
      }}
    >
      <Header>
        <Container sx={{ flexDirection: "row" }}>
          <Logo>X</Logo>
          <div
            sx={{
              display: "flex",
              width: "100%"
            }}
          >
            {/* <NavLink to="/now">now</NavLink> */}
            {/* <NavLink to="/feed">feed</NavLink> */}
            {/* <NavLink to="/now">NOW</NavLink> */}
            {/* <NavLink to="/book">BOOK</NavLink> */}
            {/* <NavLink to="/resume">CV</NavLink> */}
          </div>
          <Button
            onClick={() => {
              const index = modes.indexOf(mode);
              const next = modes[(index + 1) % modes.length];
              setMode(next);
            }}
            sx={{
              minWidth: 40,
              height: 40,
              border: "null",
              borderRadius: 99999
            }}
          />
        </Container>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer>
        <Container sx={{ flexDirection: "row", flexWrap: "wrap" }}>
          <h2 sx={{ color: "text" }}>{time} Bogdan Tsubeks</h2>
        </Container>
      </Footer>
    </div>
  );
}

export default Layout;
