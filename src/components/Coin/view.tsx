"use client";

import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Stack, Text } from "@chakra-ui/react";

import { Divider } from "components/Divider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { black, errorRed, green } from "shared/constants/colors";
import { DIVIDER_ORIENTATION, DIVIDER_SIZE } from "shared/constants/divider";
import { PRICE_STATUS } from "shared/constants/priceStatus";
import { ROUTES } from "shared/constants/routes";
import { Asset } from "types/types";
import { ImagesUtil } from "utils/imagesUtil";
import { PricesUtil } from "utils/prices";
import { StyleUtil } from "utils/style";

import { styles } from "./styles";
import { CoinProps } from "./types";

export const Coin = ({ asset }: CoinProps) => {
    const router = useRouter();
    const priceStatus = (asset: Asset) => PricesUtil.getPriceStatus(asset.vwap24Hr, asset.changePercent24Hr);
    const arrowIconsConfig = (asset: Asset) => {
        const status = priceStatus(asset);
        if (status === PRICE_STATUS.INCREASED) {
            return <ArrowUpIcon sx={{ color: green }} />;
        } else if (status === PRICE_STATUS.DECREASED) {
            return <ArrowDownIcon sx={{ color: errorRed }} />;
        } else {
            return null;
        }
    };
    const navigateToCoin = (assetSymbol: string) => {
        router.push(ROUTES.MARKET_ITEM(assetSymbol));
    };
    return (
        <Stack sx={styles.mainWrapper} onClick={() => navigateToCoin(asset.symbol)}>
            <Stack sx={styles.coinWrapper}>
                <Image src={ImagesUtil.getCoinImage(asset.symbol)} alt={`${asset.symbol}-logo`} width={40} />
                <Stack sx={styles.nameWrapper}>
                    <Text sx={styles.name}>{asset.name}</Text>
                    <Text sx={styles.name}>{asset.symbol}</Text>
                </Stack>
            </Stack>
            <Divider orientation={DIVIDER_ORIENTATION.VERTICAL} color={black} size={DIVIDER_SIZE.MEDIUM} />
            <Stack sx={styles.priceWrapper}>
                <Text sx={styles.price}>{PricesUtil.formatAsCurrency(asset.priceUsd)}</Text>
                <Stack sx={styles.priceCountWrapper}>
                    <Text sx={{ ...styles.price, color: StyleUtil.getCurrencyPriceChangeColor(priceStatus(asset)) }}>
                        {PricesUtil.getVWAPChangeValue(asset.vwap24Hr, asset.changePercent24Hr)}
                    </Text>
                    {arrowIconsConfig(asset)}
                </Stack>
            </Stack>
        </Stack>
    );
};
