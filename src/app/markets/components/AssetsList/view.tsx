"use client";

import { useEffect } from "react";

import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

import { useRouter } from "next/navigation";
import { ROUTES } from "shared/constants/routes";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getAssetsList } from "store/slices/assets/assets.selectors";
import { getAssets } from "store/slices/assets/assets.thunks";
import { Asset } from "types/types";
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
    const priceStatus = (asset: Asset) => PricesUtil.getPriceStatus(asset.vwap24Hr, asset.changePercent24Hr);
    const navigateToCurrency = (assetName: string) => {
        router.push(ROUTES.MARKET_ITEM(assetName));
    };
    return (
        <TableContainer sx={styles.container}>
            <Table sx={styles.table}>
                <Thead sx={styles.headWrapper}>
                    <Tr sx={styles.headText}>
                        <Th sx={styles.headerItem("5vw")}>№</Th>
                        <Th sx={styles.headerItem("18vw")}>Name</Th>
                        <Th sx={styles.headerItem("18vw")}>{`VWAP(24Hr)`}</Th>
                        <Th sx={styles.headerItem("18vw")}>{`Change(24Hr)`}</Th>
                        <Th sx={styles.headerItem("18vw")}>Market Cap</Th>
                        <Th sx={styles.headerItem("18vw")}>Price</Th>
                        <Th sx={styles.headerItem("5vw")}></Th>
                    </Tr>
                </Thead>
                <Tbody sx={styles.bodyWrapper}>
                    {assets.map((asset, index) => (
                        <Tr key={asset.id} onClick={() => navigateToCurrency(asset.name)}>
                            <Th sx={styles.rowText("5vw")}>{index + 1}</Th>
                            <Th sx={styles.rowText("18vw")}>{asset.name}</Th>
                            <Th sx={styles.rowText("18vw")}>{PricesUtil.formatAsCurrency(asset.vwap24Hr)}</Th>
                            <Th
                                sx={{
                                    ...styles.rowText("18vw"),
                                    fontWeight: "500",
                                    color: StyleUtil.getCurrencyPriceChangeColor(priceStatus(asset)),
                                }}
                            >
                                {PricesUtil.getVWAPChangeValue(asset.vwap24Hr, asset.changePercent24Hr)}
                            </Th>
                            <Th sx={styles.rowText("18vw")}>{PricesUtil.formatLargeCurrency(asset.marketCapUsd)}</Th>
                            <Th sx={styles.rowText("18vw")}>{PricesUtil.formatAsCurrency(asset.priceUsd)}</Th>
                            <Th sx={styles.rowText("5vw")}>+</Th>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};
