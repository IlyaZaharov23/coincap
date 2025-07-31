import { createAsyncThunk } from "@reduxjs/toolkit";

import { ApiWrapper } from "services/ApiWrapper";
import { USER_AUTH } from "services/apiEndpoints";
import { USER_ID } from "services/constants";
import { TextUtil } from "utils/text";

import { assetsSlice } from "../assets/assets.slice";
import { AuthRequestData, AuthRespData, RegRequestData, RegistrationRespData } from "./auth.types";

export const userLogin = createAsyncThunk("auth/userLogin", async (data: AuthRequestData, thunkApi) => {
    try {
        const resp = (await ApiWrapper.post(USER_AUTH.LOGIN, data)) as { data: AuthRespData };
        ApiWrapper.setToken(resp.data.token);
        localStorage.setItem(USER_ID, JSON.stringify(TextUtil.getUserId(data.email)));
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue("Failed to fetch user login");
    }
});

export const userLogout = createAsyncThunk("auth/userLogout", (_, thunkApi) => {
    try {
        thunkApi.dispatch(assetsSlice.actions.clearAssetDetails());
        ApiWrapper.deleteToken();
        localStorage.removeItem(USER_ID);
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
