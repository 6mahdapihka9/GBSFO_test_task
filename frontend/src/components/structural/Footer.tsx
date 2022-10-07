import React from 'react';
import { Box, styled } from '@mui/material';

const AbsoluteFooter = styled('footer')`
  margin-top: auto;
  background-color: lightgray;
  width: 100%;
`;

const MarginedTypography = styled(Box)`
  width: fit-content;
  margin: 5px;
`;

const Footer = () => (
  <AbsoluteFooter>
    <Box sx={{ m: '20px 50px' }}>
      <MarginedTypography>Author: Kulesh Oleksandr</MarginedTypography>
      <MarginedTypography>Github: 6mahdapihka9</MarginedTypography>
      <MarginedTypography>E-mail: kulesh.oleksandr@gmail.com</MarginedTypography>
      <MarginedTypography>2022</MarginedTypography>
    </Box>
  </AbsoluteFooter>
);

export default Footer;
