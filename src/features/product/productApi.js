import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder)=> ({
   getProducts: builder.query({
    query: ()=> '/products'
   })
  })
});

export const {useGetProductsQuery} = productApi;
