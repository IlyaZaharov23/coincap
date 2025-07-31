"use client";

import { useEffect } from "react";

import { Stack, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

import { USER_ID } from "services/constants";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { assetsListGet, getWallet } from "store/slices/assets/assets.selectors";
import { getAssets, updateCoinsWallet } from "store/slices/assets/assets.thunks";
import { LocalStorageUtil } from "utils/localStorage";

import { AssetItem } from "../AssetItem";
import { styles } from "./styles";

export const AssetsList = () => {
    const dispatch = useAppDispatch();
    const assets = useAppSelector(assetsListGet);
    const wallet = useAppSelector(getWallet);

    const setUserPortfolio = () => {
        if (Object.keys(wallet).length > 0) return;
        const userId = localStorage.getItem(USER_ID);
        if (!userId) return;
        const userPortfolio = LocalStorageUtil.getUserPortfolio(userId);
        if (!userPortfolio) return;

        dispatch(updateCoinsWallet(userPortfolio));
    };

    useEffect(() => {
        dispatch(getAssets(100));
        setUserPortfolio();
    }, []);

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
                        {assets.map((asset) => (
                            <AssetItem key={asset.id} asset={asset} />
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Stack>
    );
};
