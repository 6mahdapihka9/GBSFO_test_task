import React from 'react';
import { Outlet } from 'react-router-dom';
import CenteredDiv from "../design/CenteredDiv";
import AbsoluteLink from "../design/AbsoluteLink";

const AuthLayout = () => (
  <CenteredDiv>
    <AbsoluteLink to="/dashboard">Dashboard</AbsoluteLink>
    <Outlet />
  </CenteredDiv>
);

export default AuthLayout;