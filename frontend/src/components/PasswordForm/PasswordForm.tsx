import React, { useState, FormEvent, ChangeEvent } from 'react';
import { TextField, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useTypedDispatch } from "../../redux/hooks/useTypedDispatch";
import StyledForm from "../design/StyledForm";

const PasswordForm = () => {
  const [name, setName] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const { createPassword } = useTypedDispatch();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  }
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && value) {
      createPassword(name , value);
      setName('');
      setValue('');
    }
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField variant="outlined" value={name} label="Name" onChange={handleNameChange} required></TextField>
      <TextField variant="outlined" value={value} label="Value" onChange={handleValueChange} required></TextField>
      <Button type="submit" variant="contained">
        <AddIcon/>
      </Button>
    </StyledForm>
  );
};

export default PasswordForm;