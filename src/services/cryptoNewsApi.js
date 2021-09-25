import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CRYPTO_NEWS_HOST, CRYPTO_NEWS_KEY, BASE_URL } from "../api";


const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": CRYPTO_NEWS_HOST,
  "x-rapidapi-key": CRYPTO_NEWS_KEY,
};

const baseUrl = BASE_URL;

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(`/news/search?q=${newsCategory}&safesearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
