import { Asset } from "types/types";

export interface CurrencyDropdownProps {
    handleAddQuoteAsset: (value: Asset) => void;
    quoteInputValues: Asset[];
}
