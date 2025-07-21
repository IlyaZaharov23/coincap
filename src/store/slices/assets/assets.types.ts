import type { Asset, AssetHistory } from "types/types";

export interface AssetsState {
    assets: Asset[];
    assetDetails: Asset | null;
    history: AssetHistory[];
    loading: boolean;
    error: string | null;
}
