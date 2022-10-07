import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { styled } from '@mui/material';

const CenteredDiv = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  min-width: 400px;
  padding: 20px;
  
  margin: 60px auto 0 auto;
  box-shadow: 0 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const AbsoluteLink = styled(Link)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const AuthLayout = () => (
  <CenteredDiv>
    <AbsoluteLink to="/dashboard">Dashboard</AbsoluteLink>
    <Outlet />
  </CenteredDiv>
);

export default AuthLayout;