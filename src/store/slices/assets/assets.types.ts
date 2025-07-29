import type { Asset, AssetHistory } from "types/types";

export interface AssetsState {
    assets: Asset[];
    assetDetails: Asset | null;
    history: AssetHistory[];
    portfolioPrice: { [coinId: string]: number };
    assetsPaths: string[];
    loading: boolean;
    error: string | null;
}
