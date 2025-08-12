import { DrawerWrapper } from "components/DrawerWrapper";

import { AddCoinsContent } from "../../content/AddCoinsContent";
import { CoinsDrawerProps } from "../../types";

export const AddCoinsDrawer = ({
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
}: CoinsDrawerProps) => {
    return (
        isOpen && (
            <DrawerWrapper
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
            </DrawerWrapper>
        )
    );
};
