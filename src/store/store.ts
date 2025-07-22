import { configureStore } from "@reduxjs/toolkit";

import { assetsSlice } from "./slices/assets/assets.slice";

// const makeStore = () => {
//     return configureStore({
//         reducer: {
//             coincap: assetsSlice.reducer,
//         },
//         devTools: process.env.NODE_ENV !== "production",
//     });
// };

export const store = configureStore({
    reducer: {
        coincap: assetsSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
