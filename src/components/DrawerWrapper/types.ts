import { DrawerProps } from "@chakra-ui/react";

export interface DrawerWrapperProps extends Pick<DrawerProps, "isOpen" | "onClose"> {
    title: string;
    submitButtonText: string;
    children: React.ReactNode;
    onSubmit: () => void;
    isDelete?: boolean;
    assetSymbol: string;
    isLoading: boolean;
}
