import { createSelector } from "@reduxjs/toolkit";

import { AssetsState } from "./assets.types";

export const assetsSelectors = {
    selectAssets: (state: AssetsState) => state.assets,
    selectAssetDetails: (state: AssetsState) => state.assetDetails,
    selectPriceHistory: (state: AssetsState) => state.history,
    selectLoading: (state: AssetsState) => state.loading,
    selectError: (state: AssetsState) => state.error,

    selectAssetBySymbol: createSelector(
        [(state: AssetsState) => state.assets, (state: AssetsState, symbol: string) => symbol],
        (assets, symbol) => assets.find((asset) => asset.symbol === symbol),
    ),
};
