import { createReducer } from '@reduxjs/toolkit';
import {
  profileRegistration,
  profileLogin,
  profileLogout,
  profileCurrent,
} from 'redux/operations/profile-operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const profile = createReducer(initialState, {
  [profileRegistration.fulfilled]: (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
  },
  [profileLogin.fulfilled]: (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
  },
  [profileLogout.fulfilled]: (state, { payload }) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
  },
  [profileCurrent.pending]: state => {
    state.isRefreshing = true;
  },
  [profileCurrent.fulfilled]: (state, { payload }) => {
    state.user = payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
  },
  [profileCurrent.rejected]: state => {
    state.isRefreshing = false;
  },
});

export default profile;
