import { DrawerWrapper } from "components/DrawerWrapper";

import { SellCoinsContent } from "../../content/SellCoinsContent/view";
import { CoinsDrawerProps } from "../../types";

export const SellCoinsDrawer = ({
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
                <SellCoinsContent
                    assetPrice={assetPrice}
                    assetSymbol={assetSymbol}
                    handleChangeCoinsCount={handleChangeCoinsCount}
                    helper={helper}
                    coinsCount={coinsCount}
                />
            </DrawerWrapper>
        )
    );
};
