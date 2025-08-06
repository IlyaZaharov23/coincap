"use client";

import { useEffect, useState } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { Coin } from "components/Coin";
import { TopCurrenciesSkeleton } from "components/TopCurrenciesSkeleton";
import { ASSETS_LIMIT } from "shared/constants/assetsLimit";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { topAssetsListGet } from "store/slices/assets/assets.selectors";
import { getTopAssets } from "store/slices/assets/assets.thunks";
import { getTopAssetsByCount } from "utils/helpers/topAssets/getTopAssets";

import { styles } from "./styles";

export const Markets = () => {
    const dispatch = useAppDispatch();
    const topAssets = useAppSelector(topAssetsListGet);
    const [isLoading, setIsLoading] = useState(false);

    const loadTopMarkets = async () => {
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
    };

    useEffect(() => {
        loadTopMarkets();
    }, []);

    return (
        <Stack sx={styles.mainWrapper}>
            <Text sx={styles.wrapperName}>Top markets:</Text>
            <Stack sx={styles.topAssetsWrapper}>
                {isLoading ? (
                    <TopCurrenciesSkeleton count={5} />
                ) : (
                    getTopAssetsByCount(topAssets, 5).map((asset) => <Coin key={asset.id} asset={asset} />)
                )}
            </Stack>
        </Stack>
    );
};
