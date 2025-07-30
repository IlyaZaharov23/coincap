import { createSlice } from "@reduxjs/toolkit";

import { Asset } from "types/types";

import { AssetsState } from "./assets.types";

const initialState: AssetsState = {
    assets: [],
    assetDetails: null,
    history: [],
    wallet: {},
    assetsPaths: [],
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
            state.assetsPaths = data.map((item: Asset) => item.id);
        },
        setAssetDetails: (state, action) => {
            const { data } = action.payload;
            state.assetDetails = data;
        },
        setAssetHistory: (state, action) => {
            const { data } = action.payload;
            state.history = data;
        },
        clearAssetDetails: (state) => {
            state.assetDetails = null;
            state.history = [];
        },
        addCoinToWallet: (state, action) => {
            const { coinId, coinInfo } = action.payload;
            state.wallet[coinId] = coinInfo;
        },
        removeCoinFromWallet: (state, action) => {
            delete state.wallet[action.payload];
        },
        updateCoinsWallet: (state, action) => {
            state.wallet = action.payload;
        },
    },
});
