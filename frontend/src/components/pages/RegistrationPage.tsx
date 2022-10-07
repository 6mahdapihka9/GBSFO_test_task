import React, {
  useEffect, useState, ChangeEvent, FormEvent,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  TextField, Typography, Snackbar, Alert,
} from '@mui/material';
import BoxForm from '../design/BoxForm';
import FitButtonWithMargin from "../design/FitButtonWithMargin";
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { useTypedDispatch } from '../../redux/hooks/useTypedDispatch';

type registrationFormType = {
  name: string,
  email: string,
  password: string
}

const RegistrationPage = () => {
  const navigate = useNavigate();
  const isAuthorized = useTypedSelector((state) => state.isAuthorized);
  const { signUp } = useTypedDispatch();

  const [isSnackBarOpened, setIsSnackBarOpened] = useState<boolean>(false);
  const [form, setForm] = useState<registrationFormType>({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isAuthorized) {
      navigate('/');
    }
  }, [isAuthorized]);

  useEffect(() => {
    if (isSnackBarOpened) {
      setTimeout(() => {
        setIsSnackBarOpened(false);
      }, 3000);
    }
  }, [isSnackBarOpened]);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsSnackBarOpened(false);
  };

  const handleChangeField = (fieldName: string, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setForm((prevState) => ({ ...prevState, [fieldName]: e.target.value }));
  };

  const handleResult = (success: boolean) => {
    if (!success) {
      setIsSnackBarOpened(!success);
    } else {
      navigate('/auth/login');
    }
  };

  const handleRegistration = (e: FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.password) {
      // todo validate credentials
      signUp(form.name, form.email, form.password, handleResult);
    }
  };

  return (
    <>
      <Snackbar open={isSnackBarOpened} autoHideDuration={3000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          This email is already in use.
        </Alert>
      </Snackbar>
      <Typography variant="h4">Registration</Typography>
      <BoxForm component="form" onSubmit={handleRegistration}>
        <TextField
          value={form.name}
          onChange={(event) => handleChangeField('name', event)}
          label="name"
          variant="outlined"
          type="text"
          required
          fullWidth
        />
        <TextField
          value={form.email}
          onChange={(event) => handleChangeField('email', event)}
          label="email"
          variant="outlined"
          type="email"
          required
          fullWidth
        />
        <TextField
          value={form.password}
          onChange={(event) => handleChangeField('password', event)}
          label="password"
          variant="outlined"
          type="password"
          required
          fullWidth
        />
        <Link to="/auth/login">I have an account</Link>
        <FitButtonWithMargin variant="contained" type="submit">Sign up</FitButtonWithMargin>
      </BoxForm>
    </>
  );
};

export default RegistrationPage;
