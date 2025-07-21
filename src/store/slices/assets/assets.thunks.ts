import { CoinCapService } from "api/services/coincap.service";

export const getAssets = async (limit: number, thunkApi: { rejectWithValue: (value: string) => unknown }) => {
    try {
        return await CoinCapService.getAssets(limit);
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue("Failed to fetch assets");
    }
};

export const getAssetDetails = async (id: string, thunkApi: { rejectWithValue: (value: string) => unknown }) => {
    try {
        return await CoinCapService.getAssetById(id);
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue("Failed to fetch asset details");
    }
};

export const getAssetHistory = async (
    { id, interval }: { id: string; interval: string },
    thunkApi: { rejectWithValue: (value: string) => unknown },
) => {
    try {
        return await CoinCapService.getAssetHistory(id, interval);
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue("Failed to fetch price history");
    }
};
