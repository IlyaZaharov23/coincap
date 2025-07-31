import { ModalProps } from "@chakra-ui/react";

export interface DeleteCoinsModalProps extends Pick<ModalProps, "isOpen" | "onClose"> {
    assetSymbol: string;
    assetName: string;
    modalTitle: string;
    modalButtonText: string;
    isDelete?: boolean;
    onSubmit: () => void;
}
