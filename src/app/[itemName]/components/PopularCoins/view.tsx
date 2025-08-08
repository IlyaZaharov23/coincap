import { useEffect } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { Coin } from "components/Coin";
import { TabletCoin } from "components/TabletCoin";
import { useIsMobile, useIsTablet } from "hooks/useDevice";
import { ASSETS_LIMIT } from "shared/constants/assetsLimit";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { topAssetsListGet } from "store/slices/assets/assets.selectors";
import { getTopAssets } from "store/slices/assets/assets.thunks";

import { styles } from "./styles";

export const PopularCoins = () => {
    const topAssets = useAppSelector(topAssetsListGet);
    const dispatch = useAppDispatch();
    const isTablet = useIsTablet();
    const isMobile = useIsMobile();

    useEffect(() => {
        if (topAssets.length === 0) {
            dispatch(getTopAssets(ASSETS_LIMIT.TOP));
        }
    }, [dispatch, topAssets.length]);

    return (
        <Stack sx={styles.mainWrapper}>
            <Text sx={styles.mainHeader}>Popular Coins</Text>
            <Stack sx={styles.coinsWrapper}>
                {topAssets.map((asset) => (
                    <>
                        {isMobile || isTablet ? (
                            <TabletCoin key={asset.id} asset={asset} />
                        ) : (
                            <Coin asset={asset} key={asset.id} />
                        )}
                    </>
                ))}
            </Stack>
        </Stack>
    );
};
