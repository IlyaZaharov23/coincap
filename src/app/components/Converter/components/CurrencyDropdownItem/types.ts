import { Asset } from "types/types";

export interface CurrencyDropdownItemProps {
    asset: Asset;
    baseCoin: Asset | null;
    quoteCoin: Asset | null;
    isBaseCoin?: boolean;
    isQuoteCoin?: boolean;
    handleSelectBaseCoin?: (coin: Asset) => void;
    handleSelectQuoteCoin?: (coin: Asset) => void;
}
