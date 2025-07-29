import { Stack, Text } from "@chakra-ui/react";

import { CryptoIcon } from "components/CryptoIcon";
import { Input } from "components/Input";
import { INPUT_SIZE } from "shared/constants/inputSizes";

import { styles } from "./styles";
import { CoinBuyContentProps } from "./types";

export const CoinBuyContent = ({ coinName, coinsAmount, coinSymbol, changeCoinsAmount }: CoinBuyContentProps) => {
    return (
        <Stack sx={styles.mainWrapper}>
            <Stack sx={styles.titleWrapper}>
                <CryptoIcon symbol={coinSymbol} size={48} />
                <Text sx={styles.title}>{coinName}</Text>
            </Stack>
            <Input
                label="Coins amout"
                size={INPUT_SIZE.LARGE}
                value={coinsAmount}
                onChange={changeCoinsAmount}
                width="100%"
            />
        </Stack>
    );
};
