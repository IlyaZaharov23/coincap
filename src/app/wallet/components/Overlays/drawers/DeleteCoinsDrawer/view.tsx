import { DrawerWrapper } from "components/DrawerWrapper";

import { DeleteCoinsContent } from "../../content/DeleteCoinsContent";
import { DeleteCoinsDrawerProps } from "../../types";

export const DeleteCoinsDrawer = ({
    assetSymbol,
    assetName,
    isOpen,
    onClose,
    onSubmit,
    modalButtonText,
    modalTitle,
    isDelete,
    isLoading,
}: DeleteCoinsDrawerProps) => {
    return (
        <DrawerWrapper
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
        </DrawerWrapper>
    );
};
