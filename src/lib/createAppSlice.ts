import { type PayloadAction, asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

export const createAppSlice = buildCreateSlice({
    creators: {
        asyncThunk: asyncThunkCreator,
    },
});

export type { PayloadAction };
