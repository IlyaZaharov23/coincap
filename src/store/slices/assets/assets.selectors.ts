import { RootState } from "store/store";

export const assetsListGet = (state: RootState) => state.coincap.assets;
export const assetsListGetByPage = (state: RootState, currentPage: number) => state.coincap.assets[currentPage];
export const topAssetsListGet = (state: RootState) => state.coincap.topAssets;
export const getAssetDetails = (state: RootState) => state.coincap.assetDetails;
export const getPriceHistory = (state: RootState) => state.coincap.history;
export const getWallet = (state: RootState) => state.coincap.wallet;
export const getAssetsPaths = (state: RootState) => state.coincap.assetsPaths;
