import axios from "axios";
import {Asset, AssetHistory, AssetHistoryApi} from 'types/types'

const API_BASE = 'https://api.coincap.io/v2';

export const CoinCapService = {
    getAssets: async (limit: number = 20): Promise<Asset[]> => {
      const response = await axios.get<{data: Asset[]}>(`${API_BASE}/assets?limit=${limit}`);
      return response.data.data;
    },
  
    getAssetById: async (id: string): Promise<Asset> => {
      const response = await axios.get<{data: Asset}>(`${API_BASE}/assets/${id}`);
      return response.data.data;
    },
  
    getAssetHistory: async (
      id: string,
      interval: string = 'd1'
    ): Promise<AssetHistory[]> => {
      const response = await axios.get<{data: AssetHistoryApi[]}>(
        `${API_BASE}/assets/${id}/history?interval=${interval}`
      );
      return response.data.data.map((item: AssetHistoryApi) => ({
        priceUsd: item.priceUsd,
        time: item.time,
        date: new Date(item.time).toLocaleDateString(),
      }));
    },
  };