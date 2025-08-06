"use client";

import { Stack, Text } from "@chakra-ui/react";

import { CryptoIcon } from "components/CryptoIcon";
import { Divider } from "components/Divider";
import { useRouter } from "next/navigation";
import { black } from "shared/constants/colors";
import { DIVIDER_ORIENTATION, DIVIDER_SIZE } from "shared/constants/divider";
import { ROUTES } from "shared/constants/routes";
import { useAppDispatch } from "store/hooks";
import { setAssetDetails } from "store/slices/assets/assets.thunks";
import { getPriceArrowIcon } from "utils/helpers/price/getArrowIcon";
import { getPriceStatus } from "utils/helpers/price/status";
import { PricesUtil } from "utils/prices";
import { StyleUtil } from "utils/style";
import { TextUtil } from "utils/text";

import { styles } from "./styles";
import { CoinProps } from "./types";

export const Coin = ({ asset }: CoinProps) => {
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
                    <Text sx={{ ...styles.name, fontWeight: "100" }}>{asset.symbol}</Text>
                </Stack>
            </Stack>
            <Divider orientation={DIVIDER_ORIENTATION.VERTICAL} color={black} size={DIVIDER_SIZE.MEDIUM} />
            <Stack sx={styles.priceWrapper}>
                <Text sx={styles.price}>{PricesUtil.formatAsCurrency(asset.priceUsd)}</Text>
                <Stack sx={styles.priceCountWrapper}>
                    <Text
                        sx={{
                            ...styles.price,
                            color: StyleUtil.getCurrencyPriceChangeColor(
                                getPriceStatus(asset.vwap24Hr, asset.changePercent24Hr),
                            ),
                        }}
                    >
                        {PricesUtil.getVWAPChangeValue(asset.vwap24Hr, asset.changePercent24Hr) || 0}
                    </Text>
                    {getPriceArrowIcon(asset.vwap24Hr, asset.changePercent24Hr)}
                </Stack>
            </Stack>
        </Stack>
    );
};
