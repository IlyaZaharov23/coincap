"use client";

import { useEffect } from "react";

import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

import { useRouter } from "next/navigation";
import { hoverGray } from "shared/constants/colors";
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
        <TableContainer sx={{ borderTop: `1px solid ${hoverGray}`, marginTop: "2rem" }}>
            <Table>
                <Thead sx={styles.headText}>
                    <Tr>
                        <Th>№</Th>
                        <Th>Name</Th>
                        <Th>{`VWAP(24Hr)`}</Th>
                        <Th>{`Change(24Hr)`}</Th>
                        <Th>Market Cap</Th>
                        <Th>Price</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody sx={styles.rowText}>
                    {assets.map((asset, index) => (
                        <Tr key={asset.id} onClick={() => navigateToCurrency(asset.name)}>
                            <Th sx={styles.rowText}>{index + 1}</Th>
                            <Th sx={styles.rowText}>{asset.name}</Th>
                            <Th sx={styles.rowText}>{PricesUtil.formatAsCurrency(asset.vwap24Hr)}</Th>
                            <Th
                                sx={{
                                    ...styles.rowText,
                                    fontWeight: "500",
                                    color: StyleUtil.getCurrencyPriceChangeColor(priceStatus(asset)),
                                }}
                            >
                                {PricesUtil.getVWAPChangeValue(asset.vwap24Hr, asset.changePercent24Hr)}
                            </Th>
                            <Th sx={styles.rowText}>{PricesUtil.formatLargeCurrency(asset.marketCapUsd)}</Th>
                            <Th sx={styles.rowText}>{PricesUtil.formatAsCurrency(asset.priceUsd)}</Th>
                            <Th>+</Th>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};
