/** @jsx jsx */
import React from "react";
import { jsx, Styled, useColorMode } from "theme-ui";
import { Link } from "react-router-dom";
import {
  FaGithub as Github,
  FaBookDead as Book,
  FaBullseye as Bull
} from "react-icons/fa";

import logo from "./assets/logo.svg";

const modes = ["light", "black", "dark", "deep", "hack", "pink"];

const ThemeButton = (props: any) => {
  const colorMode = useColorMode();

  const cycleMode = (e: any, [mode, setMode]: any) => {
    const i = modes.indexOf(mode);
    const n = (i + 1) % modes.length;
    setMode(modes[n]);
  };

  return (
    <button
      {...props}
      title="ThemeButton"
      onClick={e => cycleMode(e, colorMode)}
      sx={{
        border: "none",
        bg: "primary",
        color: "text"
      }}
    >
      <Bull size={48} />
    </button>
  );
};

const Logo = () => <div sx={{ width: 48, height: 48, bg: "red" }}></div>;

const Header = ({ children }: { children?: React.ReactNode }) => (
  <header sx={{ display: "flex", px: 2, width: "100%" }}>
    <Link to="/">
      <Logo />
    </Link>
    <div sx={{ width: "100%" }} />
    <nav>
      {children}
      <Link to="/about">About</Link>
      <Link to="/book">Book</Link>
    </nav>
    <ThemeButton />
  </header>
);

const Main = ({ children }: { children?: React.ReactNode }) => {
  return <main sx={{ bg: "secondary" }}>{children}</main>;
};

const Footer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <footer sx={{ bg: "primary" }}>
      $ created by&nbsp;
      <a href="https://tsubeks.xyz" target="_blank" rel="noopener noreferrer">
        me
      </a>
      &nbsp;$
      {children}
    </footer>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bg: "primary"
      }}
    >
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
