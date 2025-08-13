import { COINS_PORTFOLIO } from "services/constants";
import { WalletItem } from "store/slices/assets/types";

export class LocalStorageUtil {
    static getUserPortfolio(userId: string) {
        const portfolios = localStorage.getItem(COINS_PORTFOLIO);
        if (!portfolios) return null;
        const parsedPortfolios = JSON.parse(portfolios);
        return parsedPortfolios[userId] || null;
    }

    static updatePortfolioCoin(userId: string, coinId: string, coinInfo: WalletItem) {
        const portfolios = localStorage.getItem(COINS_PORTFOLIO) || "{}";
        const parsedPortfolios = JSON.parse(portfolios);
        const userPortfolio = parsedPortfolios[userId] || {};
        userPortfolio[coinId] = coinInfo;
        parsedPortfolios[userId] = userPortfolio;
        localStorage.setItem(COINS_PORTFOLIO, JSON.stringify(parsedPortfolios));
    }

    static removePortfolioCoin(userId: string, coinId: string) {
        const portfoliosStr = localStorage.getItem(COINS_PORTFOLIO);
        if (!portfoliosStr) return;

        const portfolios = JSON.parse(portfoliosStr);
        if (!portfolios[userId]) return;

        const userPortfolio = portfolios[userId];
        delete userPortfolio[coinId];

        portfolios[userId] = userPortfolio;

        if (Object.keys(userPortfolio).length === 0) {
            delete portfolios[userId];
        }
        localStorage.setItem(COINS_PORTFOLIO, JSON.stringify(portfolios));
    }
}
