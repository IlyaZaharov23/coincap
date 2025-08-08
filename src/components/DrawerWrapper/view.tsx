import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

import { CryptoIcon } from "components/CryptoIcon";
import { BUTTON_VARIANT } from "shared/constants/buttonVariants";

import { DrawerWrapperProps } from "./types";

export const DrawerWrapper = ({
    isOpen,
    onClose,
    assetSymbol,
    title,
    children,
    submitButtonText,
    onSubmit,
    isLoading,
}: DrawerWrapperProps) => {
    return (
        <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader display="flex" flexDirection="row" alignItems="center" gap="0.5rem">
                    <CryptoIcon size={32} symbol={assetSymbol} />
                    <Text>{title}</Text>
                </DrawerHeader>
                <DrawerCloseButton />
                <DrawerBody width="100%">{children}</DrawerBody>
                <DrawerFooter gap="1rem">
                    <Button variant={BUTTON_VARIANT.TAB} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant={BUTTON_VARIANT.PRIMARY} onClick={onSubmit} isLoading={isLoading}>
                        {submitButtonText}
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
