import React from "react";
import { Link } from "react-router-dom";

import logo from "./assets/logo.svg";

const Header = () => (
  <header>
    <Link to="/">
      <img width="24" alt="logo" src={logo} />
    </Link>
    <Link to="/about">About</Link>
    <Link to="/book">Book</Link>
  </header>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main style={{ background: "blue" }}>{children}</main>
      <footer style={{ background: "yellow" }}>
        $ created by&nbsp;
        <a href="https://tsubeks.xyz" target="_blank" rel="noopener noreferrer">
          me
        </a>
        &nbsp;$
      </footer>
    </>
  );
};

export default Layout;
