"use client";

import { useEffect, useState } from "react";

import { Stack } from "@chakra-ui/react";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { BUTTON_VARIANT } from "shared/constants/buttonVariants";
import { INPUT_SIZE } from "shared/constants/inputSizes";
import { useAppSelector } from "store/hooks";
import { topAssetsListGet } from "store/slices/assets/assets.selectors";
import { Asset } from "types/types";

import { CurrencyDropdown } from "./components/CurrencyDropdown";
import { styles } from "./styles";

export const Converter = () => {
    const topAssets = useAppSelector(topAssetsListGet);
    const [baseCoin, setBaseCoin] = useState<Asset | null>(null);
    const [quoteCoin, setQuoteCoin] = useState<Asset | null>(null);

    const handleSelectBaseCoin = (coin: Asset) => {
        setBaseCoin(coin);
    };

    const handleSelectQuoteCoin = (coin: Asset) => {
        setQuoteCoin(coin);
    };

    useEffect(() => {
        if (topAssets.length > 0) {
            setBaseCoin(topAssets[0]);
            setQuoteCoin(topAssets[1]);
        }
    }, [topAssets]);

    return (
        <Stack sx={styles.mainWrapper}>
            <Stack sx={styles.topWrapper}>
                <Input sx={styles.input} label="Spend" size={INPUT_SIZE.LARGE} />
                <CurrencyDropdown
                    baseCoin={baseCoin}
                    quoteCoin={quoteCoin}
                    handleSelectBaseCoin={handleSelectBaseCoin}
                    isBaseCoin
                />
            </Stack>
            <Stack sx={styles.topWrapper}>
                <Input sx={styles.input} label="Receive" size={INPUT_SIZE.LARGE} />
                <CurrencyDropdown
                    baseCoin={baseCoin}
                    quoteCoin={quoteCoin}
                    handleSelectQuoteCoin={handleSelectQuoteCoin}
                    isQuoteCoin
                />
            </Stack>
            <Button sx={styles.button} variant={BUTTON_VARIANT.PRIMARY}>
                Convert {baseCoin?.name} to {quoteCoin?.name}
            </Button>
        </Stack>
    );
};
