import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/store";

export const getAssetsList = (state: RootState) => state.coincap.assets;
export const getTopThreeAssets = createSelector([getAssetsList], (assets) => assets.slice(0, 3));
export const getAssetDetails = (state: RootState) => state.coincap.assetDetails;
export const getPriceHistory = (state: RootState) => state.coincap.history;
export const getPortfolioPrice = (state: RootState) => state.coincap.portfolioPrice;
export const getLoadingState = (state: RootState) => state.coincap.loading;
export const getErrorState = (state: RootState) => state.coincap.error;
