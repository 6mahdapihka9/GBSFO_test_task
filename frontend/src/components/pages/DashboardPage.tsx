import React from 'react';
import PasswordList from "../PasswordList/PasswordList";
import {Typography} from "@mui/material";
import PasswordForm from "../PasswordForm/PasswordForm";
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";


const DashboardPage = () => {
  const isAuthorized = useTypedSelector(state => state.isAuthorized)
  if (!isAuthorized)
    return (<Typography variant="h5">You have to be authorized to use this web-site</Typography>);

  return (
    <>
      <Typography variant="h3">Passwords</Typography>
      <PasswordForm />
      <PasswordList />
    </>
  );
};

export default DashboardPage;