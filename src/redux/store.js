import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsApi } from './operations/contacts-operation';
import filter from './reducers/contacts-reducer';
import profile from './reducers/profile-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactsApi.middleware,
];

export const store = configureStore({
  reducer: {
    filter: filter,
    profile: profile,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
});
