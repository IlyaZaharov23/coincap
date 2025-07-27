import { Stack, Text } from "@chakra-ui/react";

import { topCurrencies } from "./constants/topCurrenciesConfig";
import { styles } from "./styles";

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
