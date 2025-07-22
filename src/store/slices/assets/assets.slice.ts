import { createAppSlice } from "shared/lib/createAppSlice";

import { assetsSelectors } from "./assets.selectors";
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
    selectors: assetsSelectors,
});

export const { clearAssetDetails, fetchAssets, fetchAssetDetails, fetchAssetHistory } = assetsSlice.actions;

export const { selectAssets, selectAssetDetails, selectPriceHistory, selectLoading, selectError, selectAssetBySymbol } =
    assetsSlice.selectors;
