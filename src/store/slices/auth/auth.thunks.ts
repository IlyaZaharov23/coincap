import { createAsyncThunk } from "@reduxjs/toolkit";

import { USER_AUTH } from "services/api-endpoints";
import { ApiWrapper } from "services/api-wrapper";

import { assetsSlice } from "../assets/assets.slice";
import { AuthRequestData, AuthRespData, RegRequestData, RegistrationRespData } from "./auth.types";

export const userLogin = createAsyncThunk("auth/userLogin", async (data: AuthRequestData, thunkApi) => {
    try {
        const resp = (await ApiWrapper.post(USER_AUTH.LOGIN, data)) as { data: AuthRespData };
        ApiWrapper.setToken(resp.data.token);
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue("Failed to fetch user login");
    }
});

export const userLogout = createAsyncThunk("auth/userLogout", (_, thunkApi) => {
    try {
        thunkApi.dispatch(assetsSlice.actions.clearAssetDetails());
        ApiWrapper.deleteToken();
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue("Failed to logout");
    }
});

export const userRegistration = createAsyncThunk("auth/userRegistration", async (data: RegRequestData, thunkApi) => {
    try {
        const resp = (await ApiWrapper.post(USER_AUTH.REGISTRATION, data)) as {
            data: RegistrationRespData;
        };
        ApiWrapper.setEmail(resp.data.email);
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue("Failed to fetch user registration");
    }
});
