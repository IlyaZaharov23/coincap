import { COINS_PORTFOLIO } from "services/constants";
import { WalletItem } from "store/slices/assets/assets.types";

export class LocalStorageUtil {
    static addCoinsToLocalStorage = (coinInfo: WalletItem, coinId: string) => {
        const localWallet = localStorage.getItem(COINS_PORTFOLIO);
        if (localWallet) {
            const parsedWallet = JSON.parse(localWallet);
            const toLocalStorage: { [coinId: string]: WalletItem } = parsedWallet;
            toLocalStorage[coinId] = coinInfo;
            localStorage.setItem(COINS_PORTFOLIO, JSON.stringify(toLocalStorage));
        } else {
            const toLocalStorage: { [coinId: string]: WalletItem } = {};
            toLocalStorage[coinId] = coinInfo;
            localStorage.setItem(COINS_PORTFOLIO, JSON.stringify(toLocalStorage));
        }
    };

    static removeCoinsFromLocalStorage = (coinId: string) => {
        const localWallet = localStorage.getItem(COINS_PORTFOLIO);
        if (localWallet) {
            const parsedWallet = JSON.parse(localWallet);
            const toLocalStorage: { [coinId: string]: WalletItem } = parsedWallet;
            delete toLocalStorage[coinId];
            localStorage.setItem(COINS_PORTFOLIO, JSON.stringify(toLocalStorage));
        }
    };

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
        const portfolios = localStorage.getItem(COINS_PORTFOLIO);
        if (!portfolios) return;

        const parsedPortfolios = JSON.parse(portfolios);
        if (!parsedPortfolios[userId]) return;

        delete parsedPortfolios[userId][coinId];

        if (Object.keys(parsedPortfolios[userId].length === 0)) {
            delete parsedPortfolios[userId];
        }
        localStorage.setItem(COINS_PORTFOLIO, JSON.stringify(parsedPortfolios));
    }

    static clearUserPortfolio(userId: string) {
        const portfolios = localStorage.getItem(COINS_PORTFOLIO);
        if (!portfolios) return;
        const parsedPortfolios = JSON.parse(portfolios);
        delete parsedPortfolios[userId];
        localStorage.setItem(COINS_PORTFOLIO, JSON.stringify(parsedPortfolios));
    }
}
