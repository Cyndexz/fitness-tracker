import { configureStore } from "@reduxjs/toolkit";
import { quotesApi } from "../services/quotesApi";

export default configureStore({
    reducer: {
        [quotesApi.reducerPath]: quotesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(quotesApi.middleware)
});