import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const quoteApiHeaders = {
    'x-rapidapi-host': 'bodybuilding-quotes1.p.rapidapi.com',
    'x-rapidapi-key': '42c83ae20cmsh8e2f27e606f88d4p1c0f45jsn42b7f9da62a7'
}

const createRequest = (url) => ({url, headers: quoteApiHeaders});

export const quoteApi = createApi({
    reducerPath: 'quoteApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://bodybuilding-quotes1.p.rapidapi.com'}),
    endpoints: (builder) => ({
        getRandomQuote: builder.query({
            query: () => createRequest('/random-quote')
        })
    })
})

export const {useGetQuoteQuery} = quoteApi;     //contains all the queries which can contain more than one