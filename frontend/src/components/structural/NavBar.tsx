import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled, Button } from '@mui/material';
import { useTypedDispatch } from '../../redux/hooks/useTypedDispatch';
import { useTypedSelector } from "../../redux/hooks/useTypedSelector";

const FancyNav = styled('nav')`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const WhiteLink = styled(Link)`
  color: white;
  padding: 5px 15px;
  text-decoration: none;
  border-bottom: 1px solid white;
  transition: border-color 300ms;
  &:hover {
    border-color: transparent;
  }
`;

const LinkGroup = styled('div')`
  color: white;
`;

const LinkButton = styled(Button)`
  color: white;
  border-color: white;
  &:hover {
    border-color: transparent;
  }
`;

const NavBar = () => {
  const navigate = useNavigate();

  const { signOut } = useTypedDispatch();
  const isAuthorized = useTypedSelector(state => state.isAuthorized);

  const handleLogout = (e: any) => {
    e.preventDefault();
    signOut();
    navigate('/');
  };

  const handleAuth = (str: string, e: any) => {
    e.preventDefault();
    navigate(str);
  };

  return (
    <FancyNav>
      <WhiteLink to="/dashboard">Dashboard</WhiteLink>
      <LinkGroup>
        {
          isAuthorized
            ? (<LinkButton variant="outlined" onClick={handleLogout}>Log out</LinkButton>)
            : (
              <>
                <LinkButton variant="outlined" onClick={(e) => handleAuth('/auth/login', e)}>Sign in</LinkButton>
                {' | '}
                <LinkButton variant="outlined" onClick={(e) => handleAuth('/auth/registration', e)}>Sign up</LinkButton>
              </>
            )
        }
      </LinkGroup>
    </FancyNav>
  );
};

export default NavBar;
