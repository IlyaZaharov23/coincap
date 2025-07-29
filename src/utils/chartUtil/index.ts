import { black, errorRed, green } from "shared/constants/colors";
import { AssetHistory } from "types/types";
import { PricesUtil } from "utils/prices";

export class ChartUtil {
    static getHistoryDay(dateSrt: string) {
        const date = new Date(dateSrt);
        const formattedDate = date.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
        });
        return formattedDate;
    }
    static getChartFields(history: AssetHistory[]) {
        return history.map((date) => {
            return {
                name: this.getHistoryDay(date.date),
                price: date.priceUsd,
            };
        });
    }
    static getChartIntervalY(history: AssetHistory[]) {
        if (!history || history.length === 0) return;
        const sortedArray = [...history].sort((a, b) => Number(a.priceUsd) - Number(b.priceUsd));
        return [`${sortedArray[0].priceUsd}`, `${sortedArray[sortedArray.length - 1].priceUsd}`];
    }
    static getTooltipDate(date: string) {
        if (date === "") return;
        const newDate = new Date(date);
        return newDate.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    }
    static solvePricesDifference(startPrice: string, currentPrice: string) {
        const startNum = Number(startPrice);
        const currentNum = Number(currentPrice);
        const result = currentNum - startNum;
        if (result < 0) {
            return { color: errorRed, price: PricesUtil.formatAsCurrency(String(result)) };
        } else if (result > 0) {
            return { color: green, price: PricesUtil.formatAsCurrency(String(result)) };
        } else {
            return { color: black, price: PricesUtil.formatAsCurrency(String(result)) };
        }
    }
}
