import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material';
import Footer from '../../components/structural/Footer';
import Header from '../../components/structural/Header';

const Main = styled('main')`
  padding: 30px 100px;
`;

const MainLayout = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
);

export default MainLayout;
