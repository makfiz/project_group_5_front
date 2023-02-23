import { configureStore } from '@reduxjs/toolkit';
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
import { ourFriendsReducer } from './OurFriends/slice';
import { authReducer } from './auth/authSlice';
import { noticesReducer } from './notices/noticesSlice';
import { noticesSearckQueryReducer } from './notices/searchQuerySlice';
import { formReducer } from './form/formSlice';

// import  {petsApi}  from './Pet/PetsApi';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const noticesPersistConfig = {
  key: 'noticesQuery',
  storage,
  whitelist: ['query'],
};

const persistedNoticesSearckQueryReducer = persistReducer(
  noticesPersistConfig,
  noticesSearckQueryReducer
);

export const store = configureStore({
  reducer: {
    friends: ourFriendsReducer,
    notices: noticesReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    noticesSearchQuery: persistedNoticesSearckQueryReducer,
    form: formReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
