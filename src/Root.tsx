import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import { Global } from "@emotion/core";

import Layout from "./Layout";
import theme from "./theme";

const meta = {
  title: "Bogdan Tsubeks",
  description: "Ma site",
  creator: "Bogdan Tsubeks"
};

const Index = () => {
  return <h2>Home</h2>;
};

const About = () => {
  return <h2>About</h2>;
};

const Book = () => {
  return <h2>Book</h2>;
};

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Global
          styles={{
            "*": {
              boxSizing: "border-box"
            },
            body: {
              margin: 0
            }
          }}
        />
        <Helmet>
          <meta name="twitter:site" content="@purenoxyz" />
          <meta name="og:image" content="" />
          <title>{meta.title}</title>
          <meta name="og:title" content={meta.title} />
          <meta name="og:description" content={meta.description} />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:creator" content={meta.creator} />
          <meta name="twitter:card" content="summary" />
        </Helmet>
        <Layout>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/book/" component={Book} />
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
