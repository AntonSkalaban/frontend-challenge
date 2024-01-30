import { configureStore } from "@reduxjs/toolkit";
import { cardAPI } from "shared/api";
import { FavoriteSlice } from "./slice";

export const store = configureStore({
  reducer: {
    favoriteCards: FavoriteSlice,
    [cardAPI.reducerPath]: cardAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(cardAPI.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
