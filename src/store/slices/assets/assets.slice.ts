import { createSlice } from "@reduxjs/toolkit";

import { AssetsState } from "./assets.types";

const initialState: AssetsState = {
    assets: [],
    assetDetails: null,
    history: [],
    portfolioPrice: 0,
    loading: false,
    error: null,
};

export const assetsSlice = createSlice({
    name: "assets",
    initialState,
    reducers: {
        setAssetsList: (state, action) => {
            const { data } = action.payload;
            state.assets = data;
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
        setPortfolioPrice: (state, action) => {
            state.portfolioPrice = action.payload;
        },
    },
});
