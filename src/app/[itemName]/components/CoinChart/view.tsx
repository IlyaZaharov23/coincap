import { useEffect, useState } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { useAppSelector } from "store/hooks";
import { getPriceHistory } from "store/slices/assets/selectors";
import { AssetHistory } from "types/types";
import { ChartUtil } from "utils/chartUtil";
import { PricesUtil } from "utils/prices";

import { Chart } from "./components/Chart";
import { styles } from "./styles";
import { PriceDifference } from "./types";

export const CoinChart = () => {
    const assetHistory = useAppSelector(getPriceHistory);
    const [currentItem, setCurrentItem] = useState<AssetHistory>({ priceUsd: "", date: "", time: 0 });
    const [priceDifference, setPriceDifference] = useState<PriceDifference>({ price: "", color: "" });

    useEffect(() => {
        if (assetHistory.length > 0) {
            setCurrentItem(assetHistory[assetHistory.length - 1]);
            setPriceDifference(
                ChartUtil.solvePricesDifference(
                    assetHistory[0].priceUsd,
                    assetHistory[assetHistory.length - 1].priceUsd,
                ),
            );
        }
    }, [assetHistory]);

    return (
        <Stack sx={styles.mainWrapper}>
            <Stack>
                <Text sx={styles.price}>{PricesUtil.formatAsCurrency(currentItem?.priceUsd)}</Text>
                <Text sx={styles.changes(priceDifference.color)}>{priceDifference.price}</Text>
            </Stack>
            <Chart currentItem={currentItem} setCurrentItem={setCurrentItem} setPriceDifference={setPriceDifference} />
        </Stack>
    );
};
