import { configureStore } from '@reduxjs/toolkit';
import { noticesReducer } from './notices/noticesSlice';
import { noticesSearckQueryReducer } from './notices/searchQuerySlice';

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

const persistConfig = {
  key: 'noticesQuery',
  storage,
  whitelist: ['query'],
};

const persistedNoticesSearckQueryReducer = persistReducer(
  persistConfig,
  noticesSearckQueryReducer
);

export const store = configureStore({
  reducer: {
    notices: noticesReducer,
    noticesSearchQuery: persistedNoticesSearckQueryReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
