import { Stack, Text } from "@chakra-ui/react";

import { Input } from "components/Input";
import { INPUT_SIZE } from "shared/constants/inputSizes";
import { PricesUtil } from "utils/prices";

import { styles } from "./styles";
import { CoinBuyContentProps } from "./types";

export const CoinsAddModal = ({
    coinsAmount,
    changeCoinsAmount,
    assetSymbol,
    assetPrice,
    helper,
}: CoinBuyContentProps) => {
    return (
        <Stack>
            <Input
                label={`${assetSymbol} count`}
                size={INPUT_SIZE.LARGE}
                value={coinsAmount}
                onChange={changeCoinsAmount}
                width="100%"
            />
            <Stack sx={styles.bottomWrapper}>
                <Text sx={styles.info}>{helper}:</Text>
                <Text sx={styles.price}>{PricesUtil.solvePrice(coinsAmount, assetPrice)}</Text>
            </Stack>
        </Stack>
    );
};
