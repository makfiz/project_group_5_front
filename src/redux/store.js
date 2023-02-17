import { configureStore } from '@reduxjs/toolkit';
import { ourFriendsReducer } from './OurFriends/slice';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// // const persistConfig = {
// //   key: 'auth',
// //   storage,
// //   whitelist: ['token'],
// // };

// // const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    friends: ourFriendsReducer,
  },
  //   middleware(getDefaultMiddleware) {
  //     return getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     });
  //   },
});

// export const persistor = persistStore(store);
