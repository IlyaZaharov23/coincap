import { createAsyncThunk } from "@reduxjs/toolkit";

import { ApiWrapper } from "services/ApiWrapper";
import { COIN_CAP_API } from "services/apiEndpoints";

import { assetsSlice } from "./assets.slice";

export const {
    setAssetsList,
    setTopAssets,
    clearAssetDetails,
    setAssetDetails,
    setAssetHistory,
    addCoinToWallet,
    updateCoinsWallet,
    removeCoinFromWallet,
    clearWallet,
    setExchanges,
} = assetsSlice.actions;

export const getAssets = createAsyncThunk(
    "assets/getAssets",
    async ({ limit, offset }: { limit: number; offset: number }, thunkApi) => {
        try {
            const resp = await ApiWrapper.get(COIN_CAP_API.ASSETS.GET_ALL(limit, offset));
            thunkApi.dispatch(setAssetsList(resp.data));
            return resp.data;
        } catch (error) {
            console.log(error);
            return thunkApi.rejectWithValue("Failed to fetch assets");
        }
    },
);

export const getTopAssets = createAsyncThunk("assets/getTopAssets", async (limit: number, thunkApi) => {
    try {
        const resp = await ApiWrapper.get(COIN_CAP_API.ASSETS.GET_ALL(limit));
        thunkApi.dispatch(setTopAssets(resp.data));
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue("Failed to fetch top assets");
    }
});

export const getAssetById = createAsyncThunk("assets/getAssetById", async (id: string, thunkApi) => {
    try {
        const resp = await ApiWrapper.get(COIN_CAP_API.ASSETS.GET_BY_ID(id));
        thunkApi.dispatch(setAssetDetails(resp.data));
        return resp.data;
    } catch (error) {
        console.log(error);
        thunkApi.rejectWithValue("Failed to fetch asset details");
    }
});

export const getAssetHistory = createAsyncThunk(
    "assets/getAssetHistory",
    async ({ id, interval, start, end }: { id: string; interval: string; start: number; end: number }, thunkApi) => {
        try {
            const resp = await ApiWrapper.get(COIN_CAP_API.ASSETS.GET_HISTORY(id, interval, start, end));
            thunkApi.dispatch(setAssetHistory(resp.data));
        } catch (error) {
            console.log(error);
            thunkApi.rejectWithValue("Failed to fetch price history");
        }
    },
);

export const getExchangeMarkets = createAsyncThunk("assets/getExchangeMarkets", async (_, thunkApi) => {
    try {
        const resp = await ApiWrapper.get(COIN_CAP_API.MARKETS.GET_ALL);
        thunkApi.dispatch(setExchanges(resp.data));
    } catch (error) {
        console.log(error);
        thunkApi.rejectWithValue("Failed to fetch exchange markets");
    }
});
