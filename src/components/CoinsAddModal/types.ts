export interface CoinBuyContentProps {
    coinsAmount: string;
    assetSymbol: string;
    assetPrice: string;
    helper: string;
    changeCoinsAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
