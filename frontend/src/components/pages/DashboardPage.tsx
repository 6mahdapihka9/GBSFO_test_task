import React, {useState} from 'react';
import {PasswordType} from "../../types/types";
import PasswordList from "../PasswordList/PasswordList";
import {Typography} from "@mui/material";
import BasicTable from "../BasicTable/BasicTable";
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";


const DashboardPage = () => {
  const passwords = useTypedSelector(state => state.passwords);

  // const addPassword = (newPass: PasswordType) => {
  //   setPasswords(prev => [...prev, newPass]);
  // }
  // const editPassword = (_id: string, newPass: PasswordType) => {
  //   setPasswords(prev => [...prev.filter(pass => pass._id !== _id), newPass]);
  // }
  // const deletePassword = (_id: string) => {
  //   setPasswords(prev => [...prev.filter(pass => pass._id !== _id)]);
  // }

  return (
    <div>
      <Typography variant="h3">Passwords</Typography>
      <PasswordList />
    </div>
  );
};

export default DashboardPage;