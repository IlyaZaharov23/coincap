import type { Asset, AssetHistory } from "types/types";

export type WalletItem = {
    symbol: string;
    id: string;
    amount: number;
    name: string;
    price: string;
    cost: string;
};

export interface AssetsState {
    assets: Asset[];
    assetDetails: Asset | null;
    history: AssetHistory[];
    wallet: { [coinId: string]: WalletItem };
    assetsPaths: string[];
    loading: boolean;
    error: string | null;
}
