"use client";

import { useCallback, useEffect, useState } from "react";

import { Stack } from "@chakra-ui/react";

import { FullscreenLoader } from "components/FullscreenLoader";
import { useParams } from "next/navigation";
import { ApiWrapper } from "services/ApiWrapper";
import { ASSET_HISTORY_INTERVALS } from "shared/constants/apiParams";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getAssetDetails } from "store/slices/assets/assets.selectors";
import { getAssetById, getAssetHistory } from "store/slices/assets/assets.thunks";
import { Toast } from "utils/toast";

import { BuyForm } from "../BuyForm";
import { CoinChart } from "../CoinChart";
import { MainInfo } from "../MainInfo";
import { Market } from "../Market/view";
import { PopularCoins } from "../PopularCoins";
import { styles } from "./styles";

export const CoinContent = () => {
    const assetDetails = useAppSelector(getAssetDetails);
    const dispatch = useAppDispatch();
    const params = useParams();
    const [isLoading, setIsLoading] = useState(false);

    const getCoinData = useCallback(async () => {
        try {
            setIsLoading(true);
            if (!assetDetails) {
                await dispatch(getAssetById(params.itemName as string));
            }
            await dispatch(
                getAssetHistory({
                    id: params.itemName as string,
                    interval: ASSET_HISTORY_INTERVALS.DAY_1,
                    start: Date.now() - 30 * 24 * 60 * 60 * 1000,
                    end: Date.now(),
                }),
            );
        } catch (error) {
            console.log(error);
            Toast.error("Failed to load coin data.");
        } finally {
            setIsLoading(false);
        }
    }, [assetDetails, dispatch, params.itemName]);

    const isUserAuth = !!ApiWrapper.getToken();

    useEffect(() => {
        getCoinData();
    }, [getCoinData]);

    return (
        <Stack sx={styles.mainWrapper}>
            {isLoading ? (
                <FullscreenLoader />
            ) : (
                <>
                    <Stack sx={styles.topWrapper}>
                        <MainInfo />
                        {isUserAuth && <BuyForm />}
                    </Stack>
                    <CoinChart />
                    <Market />
                    <PopularCoins />
                </>
            )}
        </Stack>
    );
};
