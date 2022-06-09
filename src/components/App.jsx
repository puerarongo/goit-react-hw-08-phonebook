import React from 'react';
import AppBar from './appBar/AppBar';

//todo
import Contacts from './contacts/Contacts';
import Register from './register/Register';
import Login from './login/Login';
import NotFound from './notFound/NotFound';

// *
import { Routes, Route } from 'react-router-dom';

const App = () => {
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
