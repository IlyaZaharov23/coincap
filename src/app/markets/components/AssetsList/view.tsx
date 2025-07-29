"use client";

import { useEffect } from "react";

import { Stack, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

import { useRouter } from "next/navigation";
import { hoverGray } from "shared/constants/colors";
import { ROUTES } from "shared/constants/routes";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getAssetsList } from "store/slices/assets/assets.selectors";
import { setAssetDetails } from "store/slices/assets/assets.thunks";
import { getAssets } from "store/slices/assets/assets.thunks";
import { Asset } from "types/types";
import { getPriceArrowIcon } from "utils/helpers/price/getArrowIcon";
import { getPriceStatus } from "utils/helpers/price/status";
import { PricesUtil } from "utils/prices";
import { StyleUtil } from "utils/style";

import { styles } from "./styles";

export const AssetsList = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const assets = useAppSelector(getAssetsList);

    useEffect(() => {
        dispatch(getAssets(100));
    }, []);

    const navigateToCurrency = (asset: Asset) => {
        router.push(ROUTES.MARKET_ITEM(asset.id));
        dispatch(setAssetDetails(asset));
    };

    return (
        <Stack sx={styles.wrapper}>
            <TableContainer sx={styles.container}>
                <Table sx={styles.table}>
                    <Thead sx={styles.headWrapper}>
                        <Tr sx={styles.headText}>
                            <Th sx={styles.headerItem("5vw")}>№</Th>
                            <Th sx={styles.headerItem("18vw")}>Name</Th>
                            <Th sx={styles.headerItem("11vw")}>{`VWAP(24Hr)`}</Th>
                            <Th sx={styles.headerItem("11vw")}>{`Change(24Hr)`}</Th>
                            <Th sx={styles.headerItem("14vw")}>Market Cap</Th>
                            <Th sx={styles.headerItem("11vw")}>Price</Th>
                            <Th sx={styles.headerItem("5vw")}></Th>
                        </Tr>
                    </Thead>
                    <Tbody sx={styles.bodyWrapper}>
                        {assets.map((asset, index) => (
                            <Tr
                                key={asset.id}
                                onClick={() => navigateToCurrency(asset)}
                                _hover={{ backgroundColor: hoverGray }}
                            >
                                <Th sx={styles.rowText("5vw")}>{index + 1}</Th>
                                <Th sx={styles.rowText("18vw")}>{asset.name}</Th>
                                <Th sx={styles.rowText("11vw")}>{PricesUtil.formatAsCurrency(asset.vwap24Hr)}</Th>
                                <Th
                                    display="flex"
                                    alignItems="center"
                                    gap="0.25rem"
                                    sx={{
                                        ...styles.rowText("11vw"),
                                        fontWeight: "500",
                                        color: StyleUtil.getCurrencyPriceChangeColor(
                                            getPriceStatus(asset.vwap24Hr, asset.changePercent24Hr),
                                        ),
                                    }}
                                >
                                    {asset.vwap24Hr
                                        ? PricesUtil.getVWAPChangeValue(asset.vwap24Hr, asset.changePercent24Hr)
                                        : "0"}
                                    {getPriceArrowIcon(asset.vwap24Hr, asset.changePercent24Hr)}
                                </Th>
                                <Th sx={styles.rowText("14vw")}>
                                    {PricesUtil.formatLargeCurrency(asset.marketCapUsd)}
                                </Th>
                                <Th sx={styles.rowText("11vw")}>{PricesUtil.formatAsCurrency(asset.priceUsd)}</Th>
                                <Th sx={styles.rowText("5vw")}>+</Th>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Stack>
    );
};
