import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getFavoriteCards = (state: RootState) => state.favoriteCards;

export const getIsCardFavorite = (cardId: string) =>
  createSelector(getFavoriteCards, (favoriteCards) =>
    favoriteCards.some((card) => card.id === cardId)
  );
