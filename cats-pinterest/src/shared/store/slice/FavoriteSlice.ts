import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CatCard } from "shared/types/type";

export const FavoriteSlice = createSlice({
  name: "favorite",
  initialState: [] as CatCard[],
  reducers: {
    addCard: (state, { payload }: PayloadAction<CatCard>) => {
      return state.concat(payload);
    },

    deleteCard: (state, { payload }: PayloadAction<string>) => {
      return state.filter((item) => item.id !== payload);
    },
  },
});

export const { addCard, deleteCard } = FavoriteSlice.actions;

export default FavoriteSlice.reducer;
