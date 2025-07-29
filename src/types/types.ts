export interface Asset {
    changePercent24Hr: string;
    explorer: string;
    id: string;
    marketCapUsd: string;
    maxSupply: string;
    name: string;
    priceUsd: string;
    rank: string;
    supply: string;
    symbol: string;
    volumeUsd24Hr: string;
    vwap24Hr: string;
}

export interface AssetHistory {
    priceUsd: string;
    time: number;
    date: string;
}

export type AssetHistoryApi = {
    priceUsd: string;
    time: number;
};

export interface FormErrors {
    username?: string;
    email?: string;
    password?: Array<string>;
    confirmPassword?: string;
    age?: string;
}

export interface FormState {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    age: string;
}
