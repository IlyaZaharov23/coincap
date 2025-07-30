import { PRICE_STATUS } from "shared/constants/priceStatus";
import { WalletItem } from "store/slices/assets/assets.types";

export class PricesUtil {
    static formatAsCurrency(price: string | undefined): string {
        const priceNum = Number(price);

        return `${priceNum.toFixed(2).replace(/\.?0+$/, "")}$`;
    }
    static formatLargeCurrency(numberStr: string | undefined) {
        if (!numberStr) return;
        let number: number;
        try {
            number = parseFloat(numberStr);
            if (isNaN(number)) {
                return "Invalid number";
            }
        } catch {
            return "Invalid number";
        }

        const absNumber = Math.abs(number);
        let scaled: number;
        let unit: string;

        if (absNumber >= 1_000_000_000_000_000) {
            scaled = number / 1_000_000_000_000_000;
            unit = "quadrillion";
        } else if (absNumber >= 1_000_000_000_000) {
            scaled = number / 1_000_000_000_000;
            unit = "trillion";
        } else if (absNumber >= 1_000_000_000) {
            scaled = number / 1_000_000_000;
            unit = "billiard";
        } else if (absNumber >= 1_000_000) {
            scaled = number / 1_000_000;
            unit = "million";
        } else if (absNumber >= 1_000) {
            scaled = number / 1_000;
            unit = "thousand";
        } else {
            scaled = number;
            unit = "";
        }

        const formattedNum = scaled.toFixed(2).replace(/\.?0+$/, "");

        return unit ? `${formattedNum} ${unit} $` : `${formattedNum} $`;
    }
    static getVWAPChangeValue(price: string | undefined, percentage: string | undefined) {
        if (!price || !percentage) return;
        const result = ((Number(price) * Math.abs(Number(percentage))) / 100).toFixed(2).replace(/\.?0+$/, "");
        if (Number(result) === 0) return result.replace(/^-/, "");
        return result + `$`;
    }
    static getPriceStatus(price: string | undefined, percentageChange: string | undefined) {
        if (!price || !percentageChange) return;
        let changes;
        const priceToNum = Number(price);
        const percentageToNum = Number(percentageChange) / 100;
        changes = (priceToNum * percentageToNum).toFixed(2);
        if (+changes === 0) {
            changes = changes.replace(/^-/, "");
        }

        return Number(changes) > 0
            ? PRICE_STATUS.INCREASED
            : Number(changes) < 0
              ? PRICE_STATUS.DECREASED
              : PRICE_STATUS.UNCHANGED;
    }
    static solvePrice(inputValue: string, assetPrice: string | undefined): string {
        if (Number(inputValue) == 0) return "0$";
        return this.formatAsCurrency(String(Number(inputValue) * Number(assetPrice)));
    }
    static solvePortfolio(prices: WalletItem[] | []) {
        if (prices.length === 0) return "0$";
        const pricesToNum = prices.map((item) => Number(item.price.split("$")[0]));
        const result = pricesToNum.reduce((sum, price) => sum + price, 0);
        const roundedSum = result.toFixed(2);
        return roundedSum + "$";
    }
    static changeAssetPrice(oldPrice: string, priceOfAdded: string) {
        const old = Number(oldPrice.split("$")[0]);
        const added = Number(priceOfAdded.split("$")[0]);
        return String(old + added) + "$";
    }
}
