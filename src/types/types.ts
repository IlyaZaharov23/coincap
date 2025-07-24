export interface Asset {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    priceUsd: string;
    changePercent24Hr: string;
    volumeUsd24Hr: string;
    marketCapUsd: string;
}

export interface AssetHistory {
    priceUsd: string;
    time: number;
    date: string;
}

// export type AssetHistoryApi = {
//     priceUsd: string;
//     time: number;
// };
