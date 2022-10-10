import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material';
import Footer from '../../components/structural/Footer';
import Header from '../../components/structural/Header';

const Main = styled('main')`
  min-width: 400px;
  
  & > * {
    margin-bottom: 20px;
  }
  
  @media (min-width: 720px){
    padding: 30px 100px;
  }
  @media (max-width: 720px){
    padding: 30px 20px;
  }
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
