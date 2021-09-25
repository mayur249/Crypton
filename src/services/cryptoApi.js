import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CRYPTO_HOST, CRYPTO_KEY, BASE_URL } from "../api";

const cryptoApiHeaders = {
  "x-rapidapi-host": CRYPTO_HOST,
  "x-rapidapi-key": CRYPTO_KEY,
};

const baseUrl = BASE_URL;

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history/${timePeriod}`),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;

// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': 'bb598bab56msh51ca62eb2dd2c0fp125c36jsn967970df3a19'
//     }
//   };
