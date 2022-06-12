import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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

const profilePersistConfig = {
  key: 'profileKey',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    filter: filter,
    profile: persistReducer(profilePersistConfig, profile),
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
