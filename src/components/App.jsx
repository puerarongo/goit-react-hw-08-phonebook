import React, { useEffect } from 'react';
import AppBar from './appBar/AppBar';

//todo
import Contacts from './contacts/Contacts';
import Register from './register/Register';
import Login from './login/Login';
import NotFound from './notFound/NotFound';

// *
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { profileCurrent } from 'redux/operations/profile-operation';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileCurrent());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Contacts />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
