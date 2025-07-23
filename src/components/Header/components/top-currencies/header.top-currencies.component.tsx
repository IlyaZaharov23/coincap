import { Stack, Text } from "@chakra-ui/react";

import { topCurrencies } from "./header.top-currencies.config";
import { styles } from "./header.top-currencies.styles";

export const TopCurrencies = () => {
    return (
        <Stack sx={styles.mainWrapper}>
            {topCurrencies.map((currency) => (
                <Stack key={currency.price} sx={styles.currencyWrapper}>
                    <Text sx={styles.currency}>{currency.name}</Text>
                    <Text sx={styles.price}>{currency.price}</Text>
                </Stack>
            ))}
        </Stack>
    );
};
