import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

import logo from '../assets/logo.svg';

const GlobalStyle = createGlobalStyle`
	${normalize}
	body {
		background: black;
	}

	p {
		margin: 0;
	}
`;

const Root = (
  <>
    <GlobalStyle />
    <header style={{background: 'red'}}>Header</header>
    <main style={{background: 'blue'}}>
      Content
      <img src={logo} alt="logo" width="256" />
      <p>
        Edit <code>src/Root.js</code> and save to reload.
      </p>
    </main>
    <footer style={{background: 'yellow'}}>
      $ created by&nbsp;
      <a href="https://tsubeks.xyz" target="_blank" rel="noopener noreferrer">
        me
      </a>
      &nbsp;$
    </footer>
  </>
);

export default Root;
