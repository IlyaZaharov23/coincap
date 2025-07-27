"use client";

import { Select, Stack } from "@chakra-ui/react";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { BUTTON_VARIANT } from "shared/constants/buttonVariants";
import { INPUT_SIZE } from "shared/constants/inputSizes";

import { styles } from "./styles";

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
