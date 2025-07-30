import { Stack, Text } from "@chakra-ui/react";

import { CryptoIcon } from "components/CryptoIcon";
import { Input } from "components/Input";
import { INPUT_SIZE } from "shared/constants/inputSizes";
import { PricesUtil } from "utils/prices";

import { styles } from "./styles";
import { AddCoinsModalProps } from "./types";

export const ChangeCoinsCountContent = ({
    symbol,
    name,
    finalCount,
    price,
    title,
    handleChangeCoinsCount,
}: AddCoinsModalProps) => {
    return (
        <Stack>
            <Stack sx={styles.infoWrapper}>
                <CryptoIcon symbol={symbol} size={40} />
                <Text sx={styles.title}>{name}</Text>
            </Stack>
            <Input
                label={`${symbol} count`}
                size={INPUT_SIZE.LARGE}
                value={finalCount}
                onChange={handleChangeCoinsCount}
            />
            <Stack sx={styles.bottomWrapper}>
                <Text sx={styles.info}>{title}:</Text>
                <Text sx={styles.price}>{PricesUtil.solvePrice(finalCount, price)}</Text>
            </Stack>
        </Stack>
    );
};
