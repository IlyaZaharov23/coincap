import { createSlice } from "@reduxjs/toolkit";

import { AssetsState } from "./assets.types";

const initialState: AssetsState = {
    assets: [],
    assetDetails: null,
    history: [],
    loading: false,
    error: null,
};

export const assetsSlice = createSlice({
    name: "assets",
    initialState,
    reducers: {
        setAssetsList: (state, action) => {
            state.assets = action.payload;
        },
        setAssetDetails: (state, action) => {
            state.assetDetails = action.payload;
        },
        setAssetHistory: (state, action) => {
            state.history = action.payload;
        },
        clearAssetDetails: (state) => {
            state.assetDetails = null;
            state.history = [];
        },
    },
});
