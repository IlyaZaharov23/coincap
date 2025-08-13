"use client";

import { useCallback, useEffect, useState } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { Button } from "components/Button";
import { Coin } from "components/Coin";
import { TabletCoin } from "components/TabletCoin";
import { useIsMobile, useIsTablet } from "hooks/useDevice";
import { useRouter } from "next/navigation";
import { ASSETS_LIMIT } from "shared/constants/assetsLimit";
import { BUTTON_VARIANT } from "shared/constants/buttonVariants";
import { darkGray } from "shared/constants/colors";
import { ROUTES } from "shared/constants/routes";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getTopAssets } from "store/slices/assets/actions";
import { topAssetsListGet } from "store/slices/assets/selectors";
import { getTopAssetsByCount } from "utils/helpers/topAssets";

import { MarketsSkeleton } from "../Fallbacks/MarketsSkeleton";
import { styles } from "./styles";

export const Markets = () => {
    const dispatch = useAppDispatch();
    const topAssets = useAppSelector(topAssetsListGet);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    const loadTopMarkets = useCallback(async () => {
        try {
            if (topAssets.length > 0) {
                return;
            }
            setIsLoading(true);
            await dispatch(getTopAssets(ASSETS_LIMIT.TOP));
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [dispatch, topAssets.length]);

    const navigateToMarkets = () => {
        router.push(ROUTES.MARKETS);
    };

    useEffect(() => {
        loadTopMarkets();
    }, [loadTopMarkets]);

    return (
        <Stack sx={styles.mainWrapper}>
            <Stack sx={styles.topWrapper}>
                <Text sx={styles.wrapperName}>Top markets:</Text>
                <Button
                    variant={BUTTON_VARIANT.TAB}
                    onClick={navigateToMarkets}
                    fontSize="1rem"
                    fontWeight="400"
                    padding="0.25rem"
                    color={darkGray}
                >
                    Explore all coins
                </Button>
            </Stack>
            <Stack sx={styles.topAssetsWrapper}>
                {isLoading || topAssets.length === 0 ? (
                    <MarketsSkeleton />
                ) : (
                    getTopAssetsByCount(topAssets, isMobile ? 6 : isTablet ? 8 : 5).map((asset) =>
                        isMobile || isTablet ? (
                            <TabletCoin key={asset.id} asset={asset} />
                        ) : (
                            <Coin key={asset.id} asset={asset} />
                        ),
                    )
                )}
            </Stack>
        </Stack>
    );
};
