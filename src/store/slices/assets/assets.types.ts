import type { Asset, AssetHistory } from "types/types";

export type WalletItem = {
    symbol: string;
    id: string;
    amount: number;
    name: string;
    price: string;
    cost: string;
};

type ExchangeItem = {
    exchangeId: string;
    name: string;
    rank: string;
    percentTotalVolume: string;
    volumeUsd: string;
    tradingPairs: string;
    socket: boolean;
    exchangeUrl: string;
    updated: number;
};

export interface AssetsState {
    assets: { [id: number]: Asset[] };
    topAssets: Asset[];
    assetDetails: Asset | null;
    history: AssetHistory[];
    wallet: { [coinId: string]: WalletItem };
    assetsPaths: string[];
    exchanges: ExchangeItem[];
}
