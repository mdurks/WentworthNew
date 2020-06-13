import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid black;
  }
`;

const Header = () => (
  <header
    css={css`
      background: #eee;
    `}
  >
    <NavLink to="/" fontWeight="bold">
      Logo
    </NavLink>
    <nav css={css``}>
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/about/" activeClassName="current-page">
        About
      </NavLink>
    </nav>
  </header>
);

export default Header;
