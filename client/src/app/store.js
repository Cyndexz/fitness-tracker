import { configureStore } from "@reduxjs/toolkit";
import { quoteApi } from "../services/quoteAPI";

export default configureStore({
    reducer:{
        [quoteApi.reducerPath]: quoteApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(quoteApi.middleware),
});