import { Stack, Text } from "@chakra-ui/react";

import { CryptoIcon } from "components/CryptoIcon";

import { styles } from "./styles";
import { CurrencyDropdownItemProps } from "./types";

export const CurrencyDropdownItem = ({
    asset,
    baseCoin,
    quoteCoin,
    isBaseCoin,
    isQuoteCoin,
    handleItemClick,
}: CurrencyDropdownItemProps) => {
    const isItemSelected = (id: string) => {
        if (isBaseCoin) {
            return id === baseCoin?.id;
        }
        if (isQuoteCoin) {
            return id === quoteCoin?.id;
        }
    };

    return (
        <Stack sx={styles.mainWrapper(isItemSelected(asset.id))} onClick={() => handleItemClick(asset)}>
            <CryptoIcon size={32} symbol={asset.symbol} />
            <Stack sx={styles.namesWrapper}>
                <Text sx={styles.coinName}>{asset.name}</Text>
                <Text sx={styles.coinSymbol}>{asset.symbol}</Text>
            </Stack>
        </Stack>
    );
};
