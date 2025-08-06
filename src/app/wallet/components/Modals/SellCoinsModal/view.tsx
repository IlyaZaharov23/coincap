import { Stack, Text } from "@chakra-ui/react";

import { Input } from "components/Input";
import { ModalWrapper } from "components/ModalWrapper";
import { INPUT_SIZE } from "shared/constants/inputSizes";
import { PricesUtil } from "utils/prices";

import { styles } from "../styles";
import { CoinsModalProps } from "../types";

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
        <ModalWrapper
            title={modalTitle}
            submitButtonText={modalButtonText}
            onClose={onClose}
            onSubmit={onSubmit}
            isOpen={isOpen}
            assetSymbol={assetSymbol}
            isLoading={isLoading}
        >
            <Stack>
                <Input
                    label={`${assetSymbol} count`}
                    size={INPUT_SIZE.LARGE}
                    value={coinsCount}
                    onChange={handleChangeCoinsCount}
                />
                <Stack sx={styles.bottomWrapper}>
                    <Text sx={styles.info}>{helper}:</Text>
                    <Text sx={styles.price}>{PricesUtil.solvePrice(coinsCount, assetPrice)}</Text>
                </Stack>
            </Stack>
        </ModalWrapper>
    );
};
