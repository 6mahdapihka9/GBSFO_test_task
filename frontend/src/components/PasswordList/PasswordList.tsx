import React  from 'react';
import { Typography } from "@mui/material";
import Password from "./Password";
import { v4} from "uuid";
import { useTypedSelector } from "../../redux/hooks/useTypedSelector";
import PasswordHead from "./PasswordHead";
import MinimizedList from "../design/MinimizedList";

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