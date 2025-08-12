import { ModalWrapper } from "components/ModalWrapper";

import { SellCoinsContent } from "../../content/SellCoinsContent";
import { CoinsModalProps } from "../../types";

export const SellCoinsModal = ({
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
                <SellCoinsContent
                    assetPrice={assetPrice}
                    assetSymbol={assetSymbol}
                    handleChangeCoinsCount={handleChangeCoinsCount}
                    helper={helper}
                    coinsCount={coinsCount}
                />
            </ModalWrapper>
        )
    );
};
