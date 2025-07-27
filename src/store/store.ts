import { configureStore } from "@reduxjs/toolkit";

import { assetsSlice } from "./slices/assets/assets.slice";

export const makeStore = (preloadedState?: RootState) => {
    return configureStore({
        reducer: {
            coincap: assetsSlice.reducer,
        },
        devTools: process.env.NODE_ENV !== "production",
        preloadedState,
    });
};

export const store = configureStore({
    reducer: {
        coincap: assetsSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
