import { DrawerProps, ModalProps } from "@chakra-ui/react";

interface BaseDialogProps {
    isOpen: boolean;
    onClose: () => void;
    modalTitle: string;
    modalButtonText: string;
    onSubmit: () => void;
    isLoading: boolean;
}

interface CoinsOperationProps {
    assetSymbol: string;
    helper: string;
    assetPrice: string;
    coinsCount: string;
    handleChangeCoinsCount: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface DeleteOperationProps {
    assetSymbol: string;
    assetName: string;
    isDelete?: boolean;
}

export interface CoinsModalProps extends Pick<ModalProps, "isOpen" | "onClose">, BaseDialogProps, CoinsOperationProps {}

export interface DeleteCoinsModalProps
    extends Pick<ModalProps, "isOpen" | "onClose">,
        BaseDialogProps,
        DeleteOperationProps {}

export interface CoinsDrawerProps
    extends Pick<DrawerProps, "isOpen" | "onClose">,
        BaseDialogProps,
        CoinsOperationProps {}

export interface DeleteCoinsDrawerProps
    extends Pick<DrawerProps, "isOpen" | "onClose">,
        BaseDialogProps,
        DeleteOperationProps {}
