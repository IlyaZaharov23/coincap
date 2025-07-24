import { createAsyncThunk } from "@reduxjs/toolkit";

import { USER_AUTH } from "services/api-endpoints";
import { ApiWrapper } from "services/api-wrapper";

import { assetsSlice } from "../assets/assets.slice";

export const userLogin = createAsyncThunk("auth/userLogin", async (data, thunkApi) => {
    try {
        const resp = (await ApiWrapper.post(USER_AUTH.LOGIN, data)) as { data: { token: string } };
        ApiWrapper.setToken(resp.data.token);
    } catch (error) {
        console.log(error);
        thunkApi.rejectWithValue("Failed to fetch user login");
    }
});

export const userLogout = createAsyncThunk("auth/userLogout", (_, thunkApi) => {
    try {
        thunkApi.dispatch(assetsSlice.actions.clearAssetDetails());
        ApiWrapper.deleteToken();
    } catch (error) {
        console.log(error);
        thunkApi.rejectWithValue("Failed to logout");
    }
});

export const userRegistration = createAsyncThunk("auth/userRegistration", async (data, thunkApi) => {
    try {
        const resp = (await ApiWrapper.post(USER_AUTH.REGISTRATION, data)) as {
            data: { id: number; username: string; email: string; gender: string; age: number };
        };
        ApiWrapper.setEmail(resp.data.email);
    } catch (error) {
        console.log(error);
        thunkApi.rejectWithValue("Failed to fetch user registration");
    }
});
