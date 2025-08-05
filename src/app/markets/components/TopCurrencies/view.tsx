"use client";

import { useEffect } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { Coin } from "components/Coin";
import { ASSETS_LIMIT } from "shared/constants/assetsLimit";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { topAssetsListGet } from "store/slices/assets/assets.selectors";
import { getTopAssets } from "store/slices/assets/assets.thunks";

import { styles } from "./styles";

export const TopCurrencies = () => {
    const topAssets = useAppSelector(topAssetsListGet);
    const dispatch = useAppDispatch();

    const getTopThreeAssets = () => {
        return topAssets.slice(0, 3);
    };

    useEffect(() => {
        if (topAssets.length === 0) {
            dispatch(getTopAssets(ASSETS_LIMIT.TOP));
        }
    }, []);

    return (
        <Stack sx={styles.mainWrapper}>
            <Text sx={styles.wrapperName}>Top markets:</Text>
            <Stack sx={styles.topAssetsWrapper}>
                {getTopThreeAssets().map((asset) => (
                    <Coin key={asset.id} asset={asset} />
                ))}
            </Stack>
        </Stack>
    );
};
