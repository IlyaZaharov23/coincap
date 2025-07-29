import { Stack, Text } from "@chakra-ui/react";

import { useAppSelector } from "store/hooks";
import { getAssetDetails } from "store/slices/assets/assets.selectors";
import { getPriceArrowIcon } from "utils/helpers/price/getArrowIcon";
import { getPriceStatus } from "utils/helpers/price/status";
import { PricesUtil } from "utils/prices";
import { StyleUtil } from "utils/style";

import { styles } from "./styles";

export const Market = () => {
    const assetDetails = useAppSelector(getAssetDetails);
    return (
        <Stack sx={styles.componentWrapper}>
            <Text sx={styles.mainHeader}>Market</Text>
            <Stack sx={styles.mainWrapper}>
                <Stack sx={styles.itemsWrapper}>
                    <Stack sx={styles.priceWrapper}>
                        <Text sx={styles.itemHeader}>Market Cap</Text>
                        <Text sx={styles.price}>{PricesUtil.formatLargeCurrency(assetDetails?.marketCapUsd)}</Text>
                    </Stack>
                    <Stack sx={styles.priceWrapper}>
                        <Text sx={styles.itemHeader}>Market Cap Rank</Text>
                        <Text sx={styles.price}>{assetDetails?.rank}</Text>
                    </Stack>
                </Stack>
                <Stack sx={styles.itemsWrapper}>
                    <Stack sx={styles.priceWrapper}>
                        <Text sx={styles.itemHeader}>Current Price</Text>
                        <Text sx={styles.price}>{PricesUtil.formatAsCurrency(assetDetails?.priceUsd)}</Text>
                    </Stack>
                    <Stack sx={styles.priceWrapper}>
                        <Text sx={styles.itemHeader}>Change, 24H</Text>
                        <Stack display="flex" flexDirection="row" alignItems="center">
                            <Text
                                sx={{
                                    ...styles.price,
                                    color: StyleUtil.getCurrencyPriceChangeColor(
                                        getPriceStatus(assetDetails?.vwap24Hr, assetDetails?.changePercent24Hr),
                                    ),
                                }}
                            >
                                {PricesUtil.getVWAPChangeValue(assetDetails?.vwap24Hr, assetDetails?.changePercent24Hr)}
                            </Text>
                            {getPriceArrowIcon(assetDetails?.vwap24Hr, assetDetails?.changePercent24Hr)}
                        </Stack>
                    </Stack>
                </Stack>
                <Stack sx={styles.itemsWrapper}>
                    <Stack sx={styles.priceWrapper}>
                        <Text sx={styles.itemHeader}>Volume, 24H</Text>
                        <Text sx={styles.price}>{PricesUtil.formatAsCurrency(assetDetails?.vwap24Hr)}</Text>
                    </Stack>
                    <Stack sx={styles.priceWrapper}>
                        <Text sx={styles.itemHeader}>Supply</Text>
                        <Text sx={styles.price}>{PricesUtil.formatLargeCurrency(assetDetails?.supply)}</Text>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};
