import { ModalWrapper } from "components/ModalWrapper";

import { AddCoinsContent } from "../../content/AddCoinsContent";
import { CoinsModalProps } from "../../types";

export const AddCoinsModal = ({
    assetSymbol,
    assetPrice,
    helper,
    coinsCount,
    handleChangeCoinsCount,
    isOpen,
    onClose,
    onSubmit,
    modalButtonText,
    modalTitle,
    isLoading,
}: CoinsModalProps) => {
    return (
        isOpen && (
            <ModalWrapper
                title={modalTitle}
                submitButtonText={modalButtonText}
                onClose={onClose}
                onSubmit={onSubmit}
                isOpen={isOpen}
                assetSymbol={assetSymbol}
                isLoading={isLoading}
            >
                <AddCoinsContent
                    assetPrice={assetPrice}
                    assetSymbol={assetSymbol}
                    helper={helper}
                    coinsCount={coinsCount}
                    handleChangeCoinsCount={handleChangeCoinsCount}
                />
            </ModalWrapper>
        )
    );
};
