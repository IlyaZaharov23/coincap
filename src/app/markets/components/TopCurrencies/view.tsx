"use client";

import { useCallback, useEffect, useState } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { Coin } from "components/Coin";
import { TabletCoin } from "components/TabletCoin";
import { TopCurrenciesSkeleton } from "components/TopCurrenciesSkeleton";
import { useIsMobile, useIsTablet } from "hooks/useDevice";
import { ASSETS_LIMIT } from "shared/constants/assetsLimit";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { topAssetsListGet } from "store/slices/assets/assets.selectors";
import { getTopAssets } from "store/slices/assets/assets.thunks";
import { getTopAssetsByCount } from "utils/helpers/topAssets/getTopAssets";
import { Toast } from "utils/toast";

import { styles } from "./styles";

export const TopCurrencies = () => {
    const topAssets = useAppSelector(topAssetsListGet);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    const loadData = useCallback(async () => {
        try {
            if (hasLoaded) return;
            setIsLoading(true);
            await dispatch(getTopAssets(ASSETS_LIMIT.TOP));
            setHasLoaded(true);
        } catch (error) {
            console.log(error);
            Toast.error("Failed to load top currencies. Please reload page or try again later.");
        } finally {
            setIsLoading(false);
        }
    }, [dispatch, hasLoaded]);

    useEffect(() => {
        if (topAssets.length === 0) {
            loadData();
        }
    }, [loadData, topAssets.length]);

    if (isMobile) return null;

    return (
        <Stack sx={styles.mainWrapper}>
            <Text sx={styles.wrapperName}>Top markets:</Text>
            <Stack sx={styles.topAssetsWrapper}>
                {isLoading ? (
                    <TopCurrenciesSkeleton count={3} />
                ) : (
                    getTopAssetsByCount(topAssets, 3).map((asset) => (
                        <>
                            {isTablet ? (
                                <TabletCoin key={asset.id} asset={asset} />
                            ) : (
                                <Coin key={asset.id} asset={asset} />
                            )}
                        </>
                    ))
                )}
            </Stack>
        </Stack>
    );
};
