import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";

import { Button } from "components/Button";
import { BUTTON_VARIANT } from "shared/constants/buttonVariants";

import { ModalWrapperProps } from "./types";

export const ModalWrapper = ({ isOpen, onClose, children, title, submitButtonText, onSubmit }: ModalWrapperProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody width="100%">{children}</ModalBody>
                <ModalFooter gap="1rem">
                    <Button variant={BUTTON_VARIANT.TAB} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant={BUTTON_VARIANT.PRIMARY} onClick={onSubmit}>
                        {submitButtonText}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
