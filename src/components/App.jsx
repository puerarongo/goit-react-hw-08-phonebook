import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { profileCurrent } from 'redux/operations/profile-operation';
import AppBar from './appBar/AppBar';
import Loader from './loader/Loader';
import PrivateRoute from './private&public/PrivateRoute';
import PublicRoute from './private&public/PublicRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

//todo
const Contacts = lazy(() => import('./contacts/Contacts'));
const Register = lazy(() => import('./register/Register'));
const Login = lazy(() => import('./login/Login'));
const NotFound = lazy(() => import('./notFound/NotFound'));

// *
const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.profile.isRefreshing);

  useEffect(() => {
    dispatch(profileCurrent());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            {!isRefreshing && (
              <>
                <Route
                  index
                  element={
                    <PrivateRoute>
                      <Contacts />
                    </PrivateRoute>
                  }
                />
                <Route element={<PublicRoute />}>
                  <Route path="register" element={<Register />} />
                  <Route path="login" element={<Login />} />
                </Route>

                <Route path="*" element={<NotFound />} />
              </>
            )}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
