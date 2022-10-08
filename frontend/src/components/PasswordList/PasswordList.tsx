import React from 'react';
import {styled, Typography} from "@mui/material";
import Password from "./Password";
import {v4} from "uuid";
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";
import PasswordHead from "./PasswordHead";

const MinimizedList = styled("ul")`
  list-style: none;
  border: 1px solid lightgray;
  border-radius: 4px;
  & > *:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
`;

const PasswordList = () => {
  const passwords = useTypedSelector(state => state.passwords);
  if (!passwords.length)
    return <Typography>There is no password</Typography>
  return (
    <MinimizedList>
      <PasswordHead />
      {
        passwords.map(password => <Password key={v4()} password={password} />)
      }
    </MinimizedList>
  );
};

export default PasswordList;