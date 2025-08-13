import { darkGray, errorRed, green } from "shared/constants/colors";
import { PRICE_STATUS } from "shared/constants/priceStatus";

import { IStyle } from "./types";

export class StyleUtil {
    static getRequirementStyle(key: string, passwordErrors: string[] | undefined, styles: IStyle) {
        const hasError = passwordErrors?.includes(key);
        return hasError ? { ...styles.requirement, ...styles.requirementError } : styles.requirement;
    }
    static getCurrencyPriceChangeColor(priceStatus: string | undefined): string {
        return priceStatus === PRICE_STATUS.INCREASED
            ? green
            : priceStatus === PRICE_STATUS.DECREASED
              ? errorRed
              : darkGray;
    }
}
