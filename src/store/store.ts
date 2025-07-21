import { configureStore } from "@reduxjs/toolkit";

import { assetsSlice } from "./slices/assets/assets.slice";

const makeStore = () => {
    if (typeof window === "undefined") {
        return configureStore({
            reducer: {
                coincap: assetsSlice.reducer,
            },
        });
    }

    return configureStore({
        reducer: {
            coincap: assetsSlice.reducer,
        },
        devTools: process.env.NODE_ENV !== "production",
    });
};

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
