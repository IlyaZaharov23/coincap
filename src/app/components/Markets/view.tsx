"use client";

import { useEffect } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { Coin } from "components/Coin";
import { ASSETS_LIMIT } from "shared/constants/assetsLimit";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { topAssetsListGet } from "store/slices/assets/assets.selectors";
import { getTopAssets } from "store/slices/assets/assets.thunks";

import { styles } from "./styles";

export const Markets = () => {
    const dispatch = useAppDispatch();
    const topAssets = useAppSelector(topAssetsListGet);
    useEffect(() => {
        dispatch(getTopAssets(ASSETS_LIMIT.TOP));
    }, []);

    const getTopFiveAssets = () => {
        return topAssets.slice(0, 5);
    };
    return (
        <Stack sx={styles.mainWrapper}>
            <Text sx={styles.wrapperName}>Top markets:</Text>
            <Stack sx={styles.topAssetsWrapper}>
                {getTopFiveAssets().map((asset) => (
                    <Coin key={asset.id} asset={asset} />
                ))}
            </Stack>
        </Stack>
    );
};
