import { Asset } from "types/types";

export const getTopAssetsByCount = (topAssets: Asset[], count: number) => {
    return topAssets.slice(0, count);
};
