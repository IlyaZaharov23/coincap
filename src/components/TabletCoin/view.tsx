"use client";

import { Stack, Text } from "@chakra-ui/react";

import { CryptoIcon } from "components/CryptoIcon";
import { useRouter } from "next/navigation";
import { ROUTES } from "shared/constants/routes";
import { useAppDispatch } from "store/hooks";
import { setAssetDetails } from "store/slices/assets/assets.thunks";
import { PricesUtil } from "utils/prices";
import { TextUtil } from "utils/text";

import { styles } from "./styles";
import { TabletCoinProps } from "./types";

export const TabletCoin = ({ asset }: TabletCoinProps) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const navigateToCoin = (id: string) => {
        router.push(ROUTES.MARKET_ITEM(TextUtil.getLowerCaseCoinName(id)));
        dispatch(setAssetDetails(asset));
    };
    return (
        <Stack sx={styles.mainWrapper} onClick={() => navigateToCoin(asset.id)}>
            <Stack sx={styles.coinWrapper}>
                <CryptoIcon symbol={asset.symbol} size={44} />
                <Stack sx={styles.nameWrapper}>
                    <Text sx={styles.name}>{asset.name}</Text>
                    <Text sx={styles.price}>{PricesUtil.formatAsCurrency(asset.priceUsd)}</Text>
                </Stack>
            </Stack>
        </Stack>
    );
};
