import { createAsyncThunk } from "@reduxjs/toolkit";

import { COIN_CAP_API } from "services/api-endpoints";
import { ApiWrapper } from "services/api-wrapper";

import { assetsSlice } from "./assets.slice";

export const { setAssetsList, clearAssetDetails, setAssetDetails, setAssetHistory } = assetsSlice.actions;

export const getAssets = createAsyncThunk("assets/getAssets", async (limit: number = 100, thunkApi) => {
    try {
        const resp = await ApiWrapper.get(COIN_CAP_API.ASSETS.GET_ALL(limit));
        thunkApi.dispatch(setAssetsList(resp.data));
        console.log(resp.data);
    } catch (error) {
        console.log(error);
        thunkApi.rejectWithValue("Failed to fetch assets");
    }
});

export const getAssetById = createAsyncThunk("assets/getAssetById", async (id: string, thunkApi) => {
    try {
        const resp = await ApiWrapper.get(COIN_CAP_API.ASSETS.GET_BY_ID(id));
        thunkApi.dispatch(setAssetDetails(resp.data));
        console.log(resp.data);
    } catch (error) {
        console.log(error);
        thunkApi.rejectWithValue("Failed to fetch asset details");
    }
});

export const getAssetHistory = createAsyncThunk(
    "assets/getAssetHistory",
    async ({ id, interval }: { id: string; interval: string }, thunkApi) => {
        try {
            const resp = await ApiWrapper.get(COIN_CAP_API.ASSETS.GET_HISTORY(id, interval));
            thunkApi.dispatch(setAssetHistory(resp.data));
            console.log(resp.data);
        } catch (error) {
            console.log(error);
            thunkApi.rejectWithValue("Failed to fetch price history");
        }
    },
);
