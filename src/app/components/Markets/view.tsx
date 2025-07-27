"use client";

import { useEffect } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { Coin } from "components/Coin";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getAssetsList } from "store/slices/assets/assets.selectors";
import { getAssets } from "store/slices/assets/assets.thunks";

import { styles } from "./styles";

export const Markets = () => {
    const dispatch = useAppDispatch();
    const assets = useAppSelector(getAssetsList);
    useEffect(() => {
        dispatch(getAssets(5));
    }, []);
    return (
        <Stack sx={styles.mainWrapper}>
            <Text sx={styles.wrapperName}>Top markets:</Text>
            <Stack sx={styles.topAssetsWrapper}>
                {assets.map((asset) => (
                    <Coin key={asset.id} asset={asset} />
                ))}
            </Stack>
        </Stack>
    );
};
