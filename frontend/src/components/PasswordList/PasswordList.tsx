import React from 'react';
import {passwordType} from "../../types/types";
import {styled, Typography} from "@mui/material";
import Password from "./Password";
import {v4} from "uuid";

const MinimizedList = styled("ul")`
  list-style: none;
  border: 1px solid lightgray;
  border-radius: 4px;
  & > *:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
`;

type PasswordListProps = {
  list: passwordType[]
}
const PasswordList = ({ list }: PasswordListProps) => {
  if (!list.length)
    return <Typography>There is no password</Typography>
  return (
    <MinimizedList>
      {
        list.map(password => <Password key={v4()} password={password} />)
      }
    </MinimizedList>
  );
};

export default PasswordList;