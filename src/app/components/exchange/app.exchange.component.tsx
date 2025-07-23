import { Select, Stack, Text } from "@chakra-ui/react";

import { Button } from "components/button/button.component";
import { Input } from "components/input/input.compoent";
import { BUTTON_VARIANT } from "shared/constants/button-variants";
import { INPUT_SIZE } from "shared/constants/input-sizes";

import { styles } from "./app.exchange.styles";

const selectedCurrencyName = "Bitcoin";

export const Exchange = () => {
    return (
        <Stack sx={styles.mainWrapper}>
            <Stack sx={styles.topWrapper}>
                <Input sx={styles.input} label="Spend" size={INPUT_SIZE.LARGE} />
                <Select sx={styles.select} />
            </Stack>
            <Stack sx={styles.bottomWrapper}>
                <Text sx={styles.helperText}>Receive</Text>
                <Select sx={styles.fullWidthSelect} />
            </Stack>
            <Button sx={styles.button} variant={BUTTON_VARIANT.PRIMARY}>
                Sell {selectedCurrencyName}
            </Button>
        </Stack>
    );
};
