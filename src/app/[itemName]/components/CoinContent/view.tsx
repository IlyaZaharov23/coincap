"use client";

import { useEffect } from "react";

import { Stack } from "@chakra-ui/react";

import { useParams } from "next/navigation";
import { ASSET_HISTORY_INTERVALS } from "shared/constants/apiParams";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getAssetDetails } from "store/slices/assets/assets.selectors";
import { getAssetById, getAssetHistory } from "store/slices/assets/assets.thunks";
import { Toast } from "utils/toast";

import { BuyForm } from "../BuyForm";
import { CoinChart } from "../CoinChart";
import { MainInfo } from "../MainInfo";
import { Market } from "../Market/view";
import { styles } from "./styles";

export const CoinContent = () => {
    const assetDetails = useAppSelector(getAssetDetails);
    const dispatch = useAppDispatch();
    const params = useParams();

    const getCoinData = async () => {
        try {
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
        }
    };

    useEffect(() => {
        getCoinData();
    }, []);

    return (
        <Stack display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="70vw">
            <Stack sx={styles.topWrapper}>
                <MainInfo />
                <BuyForm />
            </Stack>
            <CoinChart />
            <Market />
            {/* <Stack></Stack> */}
        </Stack>
    );
};
