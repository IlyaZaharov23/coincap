import { createSlice } from "@reduxjs/toolkit";

import { AssetsState } from "./assets.types";

export const ITEMS_PER_PAGE = 10;

const initialState: AssetsState = {
    assets: {},
    topAssets: [],
    assetDetails: null,
    history: [],
    wallet: {},
    assetsPaths: [],
    exchanges: [],
};

export const assetsSlice = createSlice({
    name: "assets",
    initialState,
    reducers: {
        setAssetsList: (state, action) => {
            const { data } = action.payload;

            if (
                Object.keys(state.assets).length > 0 &&
                JSON.stringify(data) === JSON.stringify(Object.values(state.assets).flat())
            ) {
                return;
            }

            const startPage =
                Object.keys(state.assets).length === 0 ? 1 : Math.max(...Object.keys(state.assets).map(Number)) + 1;

            for (let i = 0; i < data.length; i += ITEMS_PER_PAGE) {
                const pageNumber = startPage + Math.floor(i / ITEMS_PER_PAGE);
                const pageItems = data.slice(i, i + ITEMS_PER_PAGE);

                state.assets[pageNumber] = pageItems;
            }
        },
        setTopAssets: (state, action) => {
            const { data } = action.payload;
            state.topAssets = data;
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
        clearWallet: (state) => {
            state.wallet = {};
        },
        setExchanges: (state, action) => {
            const { data } = action.payload;
            state.exchanges = data;
        },
    },
});
