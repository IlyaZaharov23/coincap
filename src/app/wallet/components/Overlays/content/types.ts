export interface CoinsContentProps {
    assetSymbol: string;
    coinsCount: string;
    handleChangeCoinsCount: (e: React.ChangeEvent<HTMLInputElement>) => void;
    assetPrice: string;
    helper: string;
}
