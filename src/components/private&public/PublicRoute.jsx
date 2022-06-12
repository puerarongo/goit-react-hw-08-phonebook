import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const isLoggedIn = useSelector(state => state.profile.isLoggedIn);
  if (!isLoggedIn) {
    return <Outlet />;
  }
  return <Navigate to="/" replace />;
};

export default PublicRoute;

// ? Prevat&Public: https://www.robinwieruch.de/react-router-private-routes/
