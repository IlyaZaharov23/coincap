import { Select, Stack } from "@chakra-ui/react";

import { Button } from "components/button/button.component";
import { Input } from "components/input/input.compoent";
import { BUTTON_VARIANT } from "shared/constants/button-variants";
import { INPUT_SIZE } from "shared/constants/input-sizes";

import { styles } from "./app.converter.styles";

const selectedConvertingCurrency = "Bitcoin";
const selectedConvertedCurrency = "Dollar";

export const Converter = () => {
    return (
        <Stack sx={styles.mainWrapper}>
            <Stack sx={styles.topWrapper}>
                <Input sx={styles.input} label="Spend" size={INPUT_SIZE.LARGE} />
                <Select sx={styles.select} />
            </Stack>
            <Stack sx={styles.topWrapper}>
                <Input sx={styles.input} label="Receive" size={INPUT_SIZE.LARGE} />
                <Select sx={styles.select} />
            </Stack>
            <Button sx={styles.button} variant={BUTTON_VARIANT.PRIMARY}>
                Convert {selectedConvertingCurrency} to {selectedConvertedCurrency}
            </Button>
        </Stack>
    );
};
