import { useEffect, useMemo } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { Coin } from "components/Coin";
import { TabletCoin } from "components/TabletCoin";
import { TopCurrenciesSkeleton } from "components/TopCurrenciesSkeleton";
import { useIsMobile, useIsTablet } from "hooks/useDevice";
import { useParams } from "next/navigation";
import { ASSETS_LIMIT } from "shared/constants/assetsLimit";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getTopAssets } from "store/slices/assets/actions";
import { topAssetsListGet } from "store/slices/assets/selectors";

import { styles } from "./styles";

export const PopularCoins = () => {
    const topAssets = useAppSelector(topAssetsListGet);
    const dispatch = useAppDispatch();
    const isTablet = useIsTablet();
    const isMobile = useIsMobile();
    const params = useParams();

    useEffect(() => {
        if (topAssets.length === 0) {
            dispatch(getTopAssets(ASSETS_LIMIT.TOP));
        }
    }, [dispatch, topAssets.length]);

    const renderedTopAssets = useMemo(
        () => topAssets.filter((asset) => asset.id !== params.itemName),
        [topAssets, params.itemName],
    );

    return (
        <Stack sx={styles.mainWrapper}>
            <Text sx={styles.mainHeader}>Popular Coins</Text>
            <Stack sx={styles.coinsWrapper}>
                {topAssets.length === 0 ? (
                    <TopCurrenciesSkeleton count={19} />
                ) : (
                    renderedTopAssets.map((asset) =>
                        isMobile || isTablet ? (
                            <TabletCoin key={asset.id} asset={asset} />
                        ) : (
                            <Coin asset={asset} key={asset.id} />
                        ),
                    )
                )}
            </Stack>
        </Stack>
    );
};
