import { Text } from "@chakra-ui/react";

import { ModalWrapper } from "components/ModalWrapper";

import { styles } from "../styles";
import { DeleteCoinsModalProps } from "./types";

export const DeleteCoinsModal = ({
    assetSymbol,
    assetName,
    isOpen,
    onClose,
    onSubmit,
    modalButtonText,
    modalTitle,
    isDelete,
    isLoading,
}: DeleteCoinsModalProps) => {
    return (
        <ModalWrapper
            title={modalTitle}
            submitButtonText={modalButtonText}
            onClose={onClose}
            onSubmit={onSubmit}
            isOpen={isOpen}
            isDelete={isDelete}
            assetSymbol={assetSymbol}
            isLoading={isLoading}
        >
            <Text
                sx={styles.text}
            >{`Are you sure you want to delete ${assetName}? You can't undo this action afterwards.`}</Text>
        </ModalWrapper>
    );
};
