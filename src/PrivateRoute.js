// PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './features/authentication/AuthContext';

const PrivateRoute = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/features/authentication/signin"/>
  );
};

export default PrivateRoute;
