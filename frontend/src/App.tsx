import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./components/pages/DashboardPage";
import LoginPage from "./components/pages/LoginPage";
import RegistrationPage from "./components/pages/RegistrationPage";
import MainLayout from "./components/layouts/MainLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import { useTypedDispatch } from './redux/hooks/useTypedDispatch';
import { useTypedSelector } from "./redux/hooks/useTypedSelector";
import { getToken } from "./utils/localStorage";

function App() {
  const { checkToken, readPasswords } = useTypedDispatch();
  const isAuthorized = useTypedSelector((state) => state.isAuthorized);

  useEffect(() => {
    if (getToken()) {
      checkToken();
    }
  }, []);

  useEffect(() => {
    if (isAuthorized) {
      readPasswords();
    }
  }, [isAuthorized]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<MainLayout />} >
          <Route index element={<DashboardPage />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
