import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from "@chakra-ui/react";

import { Button } from "components/Button";
import { CryptoIcon } from "components/CryptoIcon";
import { BUTTON_VARIANT } from "shared/constants/buttonVariants";

import { ModalWrapperProps } from "./types";

export const ModalWrapper = ({
    isOpen,
    onClose,
    children,
    title,
    submitButtonText,
    onSubmit,
    assetSymbol,
    isLoading,
}: ModalWrapperProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader display="flex" flexDirection="row" alignItems="center">
                    <CryptoIcon size={40} symbol={assetSymbol} />
                    <Text marginLeft="0.5rem">{title}</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody width="100%">{children}</ModalBody>
                <ModalFooter gap="1rem">
                    <Button variant={BUTTON_VARIANT.TAB} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant={BUTTON_VARIANT.PRIMARY} onClick={onSubmit} isLoading={isLoading}>
                        {submitButtonText}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
