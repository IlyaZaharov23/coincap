import { useEffect } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { Coin } from "components/Coin";
import { ASSETS_LIMIT } from "shared/constants/assetsLimit";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { topAssetsListGet } from "store/slices/assets/assets.selectors";
import { getTopAssets } from "store/slices/assets/assets.thunks";

import { styles } from "./styles";

export const PopularCoins = () => {
    const topAssets = useAppSelector(topAssetsListGet);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (topAssets.length === 0) {
            dispatch(getTopAssets(ASSETS_LIMIT.TOP));
        }
    }, []);

    return (
        <Stack sx={styles.mainWrapper}>
            <Text sx={styles.mainHeader}>Popular Coins</Text>
            <Stack sx={styles.coinsWrapper}>
                {topAssets.map((asset) => (
                    <Coin asset={asset} key={asset.id} />
                ))}
            </Stack>
        </Stack>
    );
};
