import { Stack, Text } from "@chakra-ui/react";

import { Input } from "components/Input";
import { INPUT_SIZE } from "shared/constants/inputSizes";
import { PricesUtil } from "utils/prices";

import { styles } from "../styles";
import { CoinsContentProps } from "../types";

export const AddCoinsContent = ({
    assetSymbol,
    coinsCount,
    handleChangeCoinsCount,
    assetPrice,
    helper,
}: CoinsContentProps) => {
    return (
        <Stack>
            <Input
                label={`${assetSymbol} count`}
                size={INPUT_SIZE.LARGE}
                value={coinsCount}
                onChange={handleChangeCoinsCount}
                width="100%"
            />
            <Stack sx={styles.bottomWrapper}>
                <Text sx={styles.info}>{helper}:</Text>
                <Text sx={styles.price}>{PricesUtil.solvePrice(coinsCount, assetPrice)}</Text>
            </Stack>
        </Stack>
    );
};
