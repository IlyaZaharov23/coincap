"use client";

import { Stack, Text } from "@chakra-ui/react";

import { Coin } from "components/Coin";
import { useAppSelector } from "store/hooks";
import { getTopThreeAssets } from "store/slices/assets/assets.selectors";

import { styles } from "./styles";

export const TopCurrencies = () => {
    const topAssets = useAppSelector(getTopThreeAssets);

    return (
        <Stack sx={styles.mainWrapper}>
            <Text sx={styles.wrapperName}>Top markets:</Text>
            <Stack sx={styles.topAssetsWrapper}>
                {topAssets.map((asset) => (
                    <Coin key={asset.id} asset={asset} />
                ))}
            </Stack>
        </Stack>
    );
};
