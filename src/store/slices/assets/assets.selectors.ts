import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/store";

export const assetsListGet = (state: RootState) => state.coincap.assets;
export const getTopThreeAssets = createSelector([assetsListGet], (assets) => assets.slice(0, 3));
export const getTopTwentyAssets = createSelector([assetsListGet], (assets) => assets.slice(0, 20));
export const getAssetDetails = (state: RootState) => state.coincap.assetDetails;
export const getPriceHistory = (state: RootState) => state.coincap.history;
export const getWallet = (state: RootState) => state.coincap.wallet;
export const getAssetsPaths = (state: RootState) => state.coincap.assetsPaths;
export const getLoadingState = (state: RootState) => state.coincap.loading;
export const getErrorState = (state: RootState) => state.coincap.error;
