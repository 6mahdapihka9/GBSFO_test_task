import React from 'react';
import { styled } from '@mui/material';
import NavBar from './NavBar';

const StyledHeader = styled('header')`
  min-width: 440px;
  padding: 20px 0;
  background-color: cornflowerblue;
`;

const Header = () => (
  <StyledHeader>
    <NavBar />
  </StyledHeader>
);

export default Header;
