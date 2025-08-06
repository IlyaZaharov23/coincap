import { Asset } from "types/types";

export interface CurrencyDropdownProps {
    baseCoin: Asset | null;
    quoteCoin: Asset | null;
    handleSelectBaseCoin?: (coin: Asset) => void;
    handleSelectQuoteCoin?: (coin: Asset) => void;
    isBaseCoin?: boolean;
    isQuoteCoin?: boolean;
}
