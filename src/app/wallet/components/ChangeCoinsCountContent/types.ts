export interface AddCoinsModalProps {
    symbol: string;
    name: string;
    finalCount: string;
    price: string;
    title: string;
    handleChangeCoinsCount: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
