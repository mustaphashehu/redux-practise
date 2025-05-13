import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "../app/features/counter/counterSlice"
import { productsApi } from "./service/dummyData";


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch);
// setupListeners(store.dispatch) is used to enable the automatic refetching of data when the component mounts or when the store changes.   