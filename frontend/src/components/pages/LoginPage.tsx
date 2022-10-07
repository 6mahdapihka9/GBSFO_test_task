import React, {
  FormEvent, ChangeEvent, useEffect, useState,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  TextField, Typography,
} from '@mui/material';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import BoxForm from '../design/BoxForm';
import FitButtonWithMargin from '../design/FitButtonWithMargin';
import { useTypedDispatch } from '../../redux/hooks/useTypedDispatch';

type loginFormType = {
  email: string,
  password: string
}

const LoginPage = () => {
  const navigate = useNavigate();
  const isAuthorized = useTypedSelector((state) => state.isAuthorized);
  const { signIn } = useTypedDispatch();

  const [form, setForm] = useState<loginFormType>({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isAuthorized) {
      navigate('/');
    }
  }, [isAuthorized]);

  const handleChangeField = (fieldName: string, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setForm((prevState) => ({ ...prevState, [fieldName]: e.target.value }));
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (form.email && form.password) {
      signIn(form.email, form.password);
    }
  };

  return (
    <>
      <Typography variant="h4">Login</Typography>
      <BoxForm component="form" onSubmit={handleLogin}>
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
        <Link to="/auth/registration">{'Don\'t have an account'}</Link>
        <FitButtonWithMargin variant="contained" type="submit">Sign in</FitButtonWithMargin>
      </BoxForm>
    </>
  );
};

export default LoginPage;
