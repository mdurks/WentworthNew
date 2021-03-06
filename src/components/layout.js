import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from '../components/header.js';

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          // outline: 1px dotted rgba(255, 0, 0, 0.3);
        }

        html,
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          line-height: normal;
        }
      `}
    />
    <Helmet>
      <html lang="en" />
    </Helmet>
    <Header />
    <main
      css={css`
        display: block;
        margin: 2rem auto 3rem;
        max-width: 90%;
        width: 1400px;
      `}
    >
      {children}
    </main>
  </>
);

export default Layout;
