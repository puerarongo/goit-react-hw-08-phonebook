import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(state => state.profile.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="login" replace />;
  }
  return children;
};

export default PrivateRoute;

// ? Prevat&Public: https://www.robinwieruch.de/react-router-private-routes/
