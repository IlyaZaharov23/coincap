import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Asset, AssetHistory } from "types/types";

import { AssetsState, WalletItem } from "./types";

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
        setAssetsList: (state, action: PayloadAction<Asset[]>) => {
            const data = action.payload;

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
        setTopAssets: (state, action: PayloadAction<Asset[]>) => {
            const data = action.payload;
            state.topAssets = data;
        },
        setAssetDetails: (state, action: PayloadAction<Asset>) => {
            const data = action.payload;
            state.assetDetails = data;
        },
        setAssetHistory: (state, action: PayloadAction<AssetHistory[]>) => {
            const data = action.payload;
            state.history = data;
        },
        clearAssetDetails: (state) => {
            state.assetDetails = null;
            state.history = [];
        },
        addCoinToWallet: (state, action: PayloadAction<{ coinInfo: WalletItem; coinId: string }>) => {
            const { coinId, coinInfo } = action.payload;
            state.wallet[coinId] = coinInfo;
        },
        removeCoinFromWallet: (state, action: PayloadAction<string>) => {
            delete state.wallet[action.payload];
        },
        updateCoinsWallet: (state, action: PayloadAction<{ [coinId: string]: WalletItem }>) => {
            state.wallet = action.payload;
        },
        clearWallet: (state) => {
            state.wallet = {};
        },
    },
});
