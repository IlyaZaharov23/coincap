import { COINS_PORTFOLIO } from "services/constants";
import { WalletItem } from "store/slices/assets/assets.types";

export const addCoinsToLocalStorage = (coinInfo: WalletItem, coinId: string) => {
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

export const removeCoinsFromLocalStorage = (coinId: string) => {
    const localWallet = localStorage.getItem(COINS_PORTFOLIO);
    if (localWallet) {
        const parsedWallet = JSON.parse(localWallet);
        const toLocalStorage: { [coinId: string]: WalletItem } = parsedWallet;
        delete toLocalStorage[coinId];
        localStorage.setItem(COINS_PORTFOLIO, JSON.stringify(toLocalStorage));
    }
};
