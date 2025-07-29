import { PRICE_STATUS } from "shared/constants/priceStatus";
import { PricesUtil } from "utils/prices";

export const getPriceStatus = (vwap24Hr: string | undefined, changePercentage24Hr: string | undefined) => {
    return PricesUtil.getPriceStatus(vwap24Hr, changePercentage24Hr);
};

export const shouldShowUpArrow = (vwap24Hr: string | undefined, changePercentage24Hr: string | undefined) => {
    return getPriceStatus(vwap24Hr, changePercentage24Hr) === PRICE_STATUS.INCREASED;
};

export const shouldShowDownArrow = (vwap24Hr: string | undefined, changePercentage24Hr: string | undefined) => {
    return getPriceStatus(vwap24Hr, changePercentage24Hr) === PRICE_STATUS.DECREASED;
};
