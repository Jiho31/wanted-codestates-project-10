import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { recommendationsAPI } from './services/recommendations';
import search from './modules/search';

export const store = configureStore({
  reducer: {
    [recommendationsAPI.reducerPath]: recommendationsAPI.reducer,
    search,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recommendationsAPI.middleware),
});

setupListeners(store.dispatch);
