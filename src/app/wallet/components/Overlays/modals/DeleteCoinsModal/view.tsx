import { ModalWrapper } from "components/ModalWrapper";

import { DeleteCoinsContent } from "../../content/DeleteCoinsContent";
import { DeleteCoinsModalProps } from "../../types";

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
        isOpen && (
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
                <DeleteCoinsContent assetName={assetName} />
            </ModalWrapper>
        )
    );
};
