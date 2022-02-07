import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const quoteApiHeaders = {
    'x-rapidapi-host': 'bodybuilding-quotes1.p.rapidapi.com',
    'x-rapidapi-key': '587c40bc62msh8757ff889c7e2c4p1f1b56jsn03b95e39e804'
}

const createRequest = (url) => ({ url, headers: quoteApiHeaders})

export const quotesApi = createApi({
    reducerPath: 'quotesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://bodybuilding-quotes1.p.rapidapi.com' }),
    endpoints: (builder) => ({
        getQuotes: builder.query({
            query: () => createRequest('/random-quote')
        })
    })
})

export const {
    useGetQuotesQuery 
} = quotesApi;