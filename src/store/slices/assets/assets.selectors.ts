import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/store";

export const getAssetsList = (state: RootState) => state.coincap.assets;
export const getAssetDetails = (state: RootState) => state.coincap.assetDetails;
export const getPriceHistory = (state: RootState) => state.coincap.history;
export const getLoadingState = (state: RootState) => state.coincap.loading;
export const getErrorState = (state: RootState) => state.coincap.error;
