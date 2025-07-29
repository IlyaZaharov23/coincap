export interface CoinBuyContentProps {
    coinName: string | undefined;
    coinSymbol: string | undefined;
    coinsAmount: string;
    changeCoinsAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
