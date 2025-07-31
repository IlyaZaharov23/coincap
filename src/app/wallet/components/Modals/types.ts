import { ModalProps } from "@chakra-ui/react";

export interface CoinsModalProps extends Pick<ModalProps, "isOpen" | "onClose"> {
    assetSymbol: string;
    helper: string;
    assetPrice: string;
    coinsCount: string;
    handleChangeCoinsCount: (e: React.ChangeEvent<HTMLInputElement>) => void;
    modalTitle: string;
    modalButtonText: string;
    onSubmit: () => void;
}
