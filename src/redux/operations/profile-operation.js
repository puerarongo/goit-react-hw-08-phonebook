import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import BASE_URL from 'services/baseURL';

axios.defaults.baseURL = BASE_URL;

const axiosToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// ! OPERATIONS

export const profileRegistration = createAsyncThunk(
  'profile/profileRegistration',
  async ({ name, email, password }) => {
    try {
      const request = await axios.post('/users/signup', {
        name,
        email,
        password,
      });
      axiosToken.set(request.data.token);
      return request.data;
    } catch (error) {
      console.log('ERROR: ', error.message);
    }
  }
);

export const profileLogin = createAsyncThunk(
  'profile/profileLogin',
  async ({ email, password }) => {
    try {
      const request = await axios.post('/users/login', { email, password });
      axiosToken.set(request.data.token);
      return request.data;
    } catch (error) {
      console.log('ERROR: ', error.message);
    }
  }
);

export const profileLogout = createAsyncThunk(
  'profile/profileLogout',
  async () => {
    try {
      await axios.post('/users/logout');
      axiosToken.unset();
    } catch (error) {
      console.log('ERROR: ', error.message);
    }
  }
);
