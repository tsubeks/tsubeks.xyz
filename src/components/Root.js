import React from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';
import {Link, Flex, Box, Heading, Button, Image} from 'rebass';

import themes from '../themes';
import logo from '../assets/logo.svg';

const GlobalStyle = createGlobalStyle`
	${normalize}

	html, body {
		font-size: 10px;
		background: black;
	}
`;

const Header = () => (
  <Flex px={2} as="header" bg="tomato">
    <Link p={2} href="https://tsubeks.xyz">
      <Image src={logo} alt="logo" width="64" bg="red" borderRadius={8} />
    </Link>
    <Box mx="auto" />
    <Link p={2} href="https://tsubeks.xyz">
      <Image src={logo} alt="logo" width="64" bg="red" borderRadius={8} />
    </Link>
  </Flex>
);

const Root = (
  <ThemeProvider theme={themes['light']}>
    <>
      <GlobalStyle />
      <Header />
      <main style={{background: 'blue'}}>
        <Heading color="magenta">Content</Heading>
        <Button>change theme</Button>
      </main>
      <footer style={{background: 'yellow'}}>
        $ created by&nbsp;
        <a href="https://tsubeks.xyz" target="_blank" rel="noopener noreferrer">
          me
        </a>
        &nbsp;$
      </footer>
    </>
  </ThemeProvider>
);

export default Root;
