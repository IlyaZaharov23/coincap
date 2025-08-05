"use client";

import { useEffect, useState } from "react";

import { Stack, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

import { USER_ID } from "services/constants";
import { ASSETS_LIMIT } from "shared/constants/assetsLimit";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { assetsListGet, getWallet } from "store/slices/assets/assets.selectors";
import { ITEMS_PER_PAGE } from "store/slices/assets/assets.slice";
import { getAssets, updateCoinsWallet } from "store/slices/assets/assets.thunks";
import { LocalStorageUtil } from "utils/localStorage";

import { AssetItem } from "../AssetItem";
import { Pagination } from "../Pagination/view";
import { styles } from "./styles";

export const AssetsList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const dispatch = useAppDispatch();
    const assets = useAppSelector(assetsListGet);
    const wallet = useAppSelector(getWallet);

    const handleChangeOffset = (currentPage: number) => {
        setOffset(currentPage * ITEMS_PER_PAGE);
    };

    const setUserPortfolio = () => {
        if (Object.keys(wallet).length > 0) return;
        const userId = localStorage.getItem(USER_ID);
        if (!userId) return;
        const userPortfolio = LocalStorageUtil.getUserPortfolio(userId);
        if (!userPortfolio) return;

        dispatch(updateCoinsWallet(userPortfolio));
    };

    const getTotalPages = () => {
        if (isLoading) return 0;
        return Object.keys(assets).length;
    };

    const loadData = async () => {
        setIsLoading(true);
        await dispatch(getAssets({ limit: ASSETS_LIMIT.INITIAL, offset: 0 }));
        handleChangeOffset(currentPage);
        setUserPortfolio();
        setIsLoading(false);
    };

    const isShowBack = currentPage !== 1;
    const isShowNext = hasMore || getTotalPages() > currentPage * ITEMS_PER_PAGE;

    useEffect(() => {
        loadData();
    }, []);

    return (
        <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            offset={offset}
            setOffset={handleChangeOffset}
            showBack={isShowBack}
            showNext={isShowNext}
            setHasMore={setHasMore}
            totalPages={getTotalPages()}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
        >
            <Stack sx={styles.wrapper}>
                <TableContainer sx={styles.container}>
                    <Table sx={styles.table}>
                        <Thead sx={styles.headWrapper}>
                            <Tr sx={styles.headText}>
                                <Th sx={styles.headerItem("23vw")}>Name</Th>
                                <Th sx={styles.headerItem("11vw")}>{`VWAP(24Hr)`}</Th>
                                <Th sx={styles.headerItem("11vw")}>{`Change(24Hr)`}</Th>
                                <Th sx={styles.headerItem("14vw")}>Market Cap</Th>
                                <Th sx={styles.headerItem("11vw")}>Price</Th>
                                <Th sx={styles.headerItem("5vw")}></Th>
                            </Tr>
                        </Thead>
                        <Tbody sx={styles.bodyWrapper}>
                            {assets[currentPage]?.map((asset) => (
                                <AssetItem key={asset.id} asset={asset} />
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Stack>
        </Pagination>
    );
};
