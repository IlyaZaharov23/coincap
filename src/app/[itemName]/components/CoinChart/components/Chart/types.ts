import { AssetHistory } from "types/types";

import { PriceDifference } from "../../types";

export type ChartProps = {
    currentItem: AssetHistory;
    setCurrentItem: (item: AssetHistory) => void;
    setPriceDifference: (item: PriceDifference) => void;
};
