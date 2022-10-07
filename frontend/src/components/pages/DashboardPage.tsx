import React, {useState} from 'react';
import {passwordType} from "../../types/types";
import PasswordList from "../PasswordList/PasswordList";
import {Typography} from "@mui/material";
import BasicTable from "../BasicTable/BasicTable";

const initial: passwordType[] = [
  {
    name: 'default',
    value: '1234'
  },
  {
    name: 'discord',
    value: '1234'
  },
  {
    name: 'facebookfacebookfacebookfacebookfacebook',
    value: '1234'
  },
  {
    name: 'youtube',
    value: '12341234123412341234123412341234'
  },
  {
    name: 'twitter',
    value: '1234'
  },
  {
    name: 'email',
    value: '1234'
  },
  {
    name: 'youtube',
    value: '12341234123412341234123412341234'
  },
  {
    name: 'twitter',
    value: '1234'
  },
  {
    name: 'email',
    value: '1234'
  },
  {
    name: 'youtube',
    value: '12341234123412341234123412341234'
  },
  {
    name: 'twitter',
    value: '1234'
  },
  {
    name: 'email',
    value: '1234'
  },
]

const DashboardPage = () => {
  const [passwords, setPasswords] = useState<passwordType[]>(initial);

  const addPassword = (newPass: passwordType) => {
    setPasswords(prev => [...prev, newPass]);
  }
  const editPassword = (_id: string, newPass: passwordType) => {
    setPasswords(prev => [...prev.filter(pass => pass._id !== _id), newPass]);
  }
  const deletePassword = (_id: string) => {
    setPasswords(prev => [...prev.filter(pass => pass._id !== _id)]);
  }

  return (
    <div>
      <Typography variant="h3">Passwords</Typography>
      <PasswordList list={passwords} />
    </div>
  );
};

export default DashboardPage;