import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { CatCard } from "shared/types/type";

export const cardAPI = createApi({
  reducerPath: "cardAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  tagTypes: ["Card"],
  endpoints: (build) => ({
    getCards: build.query<CatCard[], void>({
      query: () => {
        return {
          url: `/`,
          params: {
            limit: 15,
            api_key: import.meta.env.VITE_API_KEY,
          },
        };
      },

      providesTags: () => [{ type: "Card", id: "ALL" }],

      forceRefetch() {
        return true;
      },
    }),
  }),
});
