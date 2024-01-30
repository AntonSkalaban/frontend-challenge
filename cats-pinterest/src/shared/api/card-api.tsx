import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { CatCard } from "shared/types/type";

export const cardAPI = createApi({
  reducerPath: "cardAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  tagTypes: ["Card"],
  endpoints: (build) => ({
    getCards: build.query<{ cards: CatCard[]; page: number }, number>({
      query: (page) => {
        return {
          url: `/`,
          params: {
            limit: 15,
            page,
            api_key: import.meta.env.VITE_API_KEY,
          },
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      transformResponse: (response: CatCard[], _meta, arg) => {
        return {
          cards: response,
          page: arg,
        };
      },
      merge: (currentCache, newItems) => {
        if (currentCache.page < newItems.page) {
          currentCache.cards.push(...newItems.cards);
          return currentCache;
        }
        return newItems;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});
