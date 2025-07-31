import { ModalProps } from "@chakra-ui/react";

export interface ModalWrapperProps extends Pick<ModalProps, "isOpen" | "onClose"> {
    title: string;
    submitButtonText: string;
    children: React.ReactNode;
    onSubmit: () => void;
    isDelete?: boolean;
    assetSymbol: string;
}
