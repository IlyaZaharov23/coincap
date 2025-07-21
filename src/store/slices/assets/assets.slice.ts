import { createSelector } from "@reduxjs/toolkit";

import { createAppSlice } from "lib/createAppSlice";
import type { Asset } from "types/types";

import { createThunkHandlers } from "./assets.thunkHandlers";
import { getAssetDetails, getAssetHistory, getAssets } from "./assets.thunks";
import { AssetsState } from "./assets.types";

const initialState: AssetsState = {
    assets: [],
    assetDetails: null,
    history: [],
    loading: false,
    error: null,
};

export const assetsSlice = createAppSlice({
    name: "assets",
    initialState,
    reducers: (create) => ({
        clearAssetDetails: create.reducer((state) => {
            state.assetDetails = null;
            state.history = [];
        }),
        fetchAssets: create.asyncThunk(getAssets, createThunkHandlers<AssetsState>({ stateField: "assets" })),
        fetchAssetDetails: create.asyncThunk(
            getAssetDetails,
            createThunkHandlers<AssetsState>({ stateField: "assetDetails" }),
        ),
        fetchAssetHistory: create.asyncThunk(
            getAssetHistory,
            createThunkHandlers<AssetsState>({ stateField: "history" }),
        ),
    }),
    selectors: {
        selectAssets: (state) => state.assets,
        selectAssetDetails: (state) => state.assetDetails,
        selectPriceHistory: (state) => state.history,
        selectLoading: (state) => state.loading,
        selectError: (state) => state.error,

        selectAssetBySymbol: createSelector(
            [(state) => state.assets, (state, symbol: string) => symbol],
            (assets, symbol) => assets.find((asset: Asset) => asset.symbol === symbol),
        ),
    },
});

export const { clearAssetDetails, fetchAssets, fetchAssetDetails, fetchAssetHistory } = assetsSlice.actions;

export const { selectAssets, selectAssetDetails, selectPriceHistory, selectLoading, selectError, selectAssetBySymbol } =
    assetsSlice.selectors;

// export default assetsSlice.reducer;
