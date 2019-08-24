import React from "react";
import { Helmet } from "react-helmet";
import { HashRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import { Global } from "@emotion/core";

import theme from "../theme.js";
import Layout from "./Layout";
import Index from "../pages/Index";
import Book from "../pages/Book";
import CV from "../pages/CV";

const meta = {
  title: "Bogdan Tsubeks",
  description: "Ma site",
  creator: "Bogdan Tsubeks"
};

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Global
          styles={theme => ({
            "*": {
              boxSizing: "border-box"
            },
            html: {
              background: theme.colors.background
            },
            body: {
              margin: 0,
              fontSize: "10px",
              fontFamily: "monospace"
            }
          })}
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
          <Route path="/book/" component={Book} />
          <Route path="/cv/" component={CV} />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default Root;
