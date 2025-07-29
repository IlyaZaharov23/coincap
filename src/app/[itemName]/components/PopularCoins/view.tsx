import { useEffect } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { Coin } from "components/Coin";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getTopTwentyAssets } from "store/slices/assets/assets.selectors";
import { getAssets } from "store/slices/assets/assets.thunks";

import { styles } from "./styles";

export const PopularCoins = () => {
    const assets = useAppSelector(getTopTwentyAssets);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (assets.length === 0) {
            dispatch(getAssets(20));
        }
    }, []);

    return (
        <Stack sx={styles.mainWrapper}>
            <Text sx={styles.mainHeader}>Popular Coins</Text>
            <Stack sx={styles.coinsWrapper}>
                {assets.map((asset) => (
                    <Coin asset={asset} key={asset.id} />
                ))}
            </Stack>
        </Stack>
    );
};
