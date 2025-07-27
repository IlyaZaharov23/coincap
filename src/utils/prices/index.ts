import { PRICE_STATUS } from "shared/constants/priceStatus";

export class PricesUtil {
    static formatAsCurrency(price: string | undefined): string {
        const priceNum = Number(price);

        return `${priceNum.toFixed(2).replace(/\.?0+$/, "")}$`;
    }
    static formatLargeCurrency(numberStr: string): string {
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

        return unit ? `$${formattedNum} ${unit} $` : `$${formattedNum} $`;
    }
    static getVWAPChangeValue(price: string, percentage: string): string {
        const result = ((Number(price) * Number(percentage)) / 100).toFixed(2).replace(/\.?0+$/, "");
        if (Number(result) === 0) return result.replace(/^-/, "");
        return result + `$`;
    }
    static getPriceStatus(price: string, percentageChange: string): string {
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
}
