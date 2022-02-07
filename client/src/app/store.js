import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { quoteApi } from "../services/quoteAPI";

export default configureStore({
    reducer:{
        [quoteApi.reducerPath]: quoteApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(quoteApi.middleware),
=======
import { quotesApi } from "../services/quotesApi";

export default configureStore({
    reducer: {
        [quotesApi.reducerPath]: quotesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(quotesApi.middleware)
>>>>>>> home_branch
});