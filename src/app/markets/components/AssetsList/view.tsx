"use client";

import { useCallback, useEffect, useState } from "react";

import { Stack, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

import { useIsMobile, useIsTablet } from "hooks/useDevice";
import { CURRENT_ASSETS_PAGE, USER_ID } from "services/constants";
import { ASSETS_LIMIT } from "shared/constants/assetsLimit";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { assetsListGet, getWallet } from "store/slices/assets/assets.selectors";
import { ITEMS_PER_PAGE } from "store/slices/assets/assets.slice";
import { getAssets, updateCoinsWallet } from "store/slices/assets/assets.thunks";
import { LocalStorageUtil } from "utils/localStorage";
import { Toast } from "utils/toast";

import { AssetItem } from "../AssetItem";
import { AssetsSkeleton } from "../Fallbacks/AssetsSkeleton";
import { Pagination } from "../Pagination";
import { styles } from "./styles";

export const AssetsList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const dispatch = useAppDispatch();
    const assets = useAppSelector(assetsListGet);
    const wallet = useAppSelector(getWallet);
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    const handleChangeOffset = (currentPage: number) => {
        setOffset(currentPage * ITEMS_PER_PAGE);
    };

    const setUserPortfolio = useCallback(() => {
        if (Object.keys(wallet).length > 0) return;
        const userId = localStorage.getItem(USER_ID);
        if (!userId) return;
        const userPortfolio = LocalStorageUtil.getUserPortfolio(userId);
        if (!userPortfolio) return;
        dispatch(updateCoinsWallet(userPortfolio));
    }, [dispatch, wallet]);

    const getTotalPages = () => {
        if (isLoading) return 0;
        return Object.keys(assets).length;
    };

    const loadData = useCallback(async () => {
        try {
            if (Object.keys(assets).length > 0) return;

            setIsLoading(true);
            await dispatch(getAssets({ limit: ASSETS_LIMIT.INITIAL, offset: 0 }));
            handleChangeOffset(currentPage);
        } catch (error) {
            console.log(error);
            Toast.error("Failed to load the assets. Please reload the page or try again later.");
        } finally {
            setIsLoading(false);
        }
    }, [assets, currentPage, dispatch]);

    const isShowBack = currentPage !== 1;
    const isShowNext = hasMore || getTotalPages() > currentPage * ITEMS_PER_PAGE;

    useEffect(() => {
        const savedPage = localStorage.getItem(CURRENT_ASSETS_PAGE);
        if (savedPage) {
            const lastOpenedPage = JSON.parse(savedPage);
            setCurrentPage(lastOpenedPage);
            localStorage.removeItem(CURRENT_ASSETS_PAGE);
        }
    }, []);

    useEffect(() => {
        loadData();
        setUserPortfolio();
    }, [loadData, setUserPortfolio]);

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
                <TableContainer sx={styles.container(isMobile ? 64 : 128)}>
                    <Table sx={styles.table}>
                        <Thead sx={styles.headWrapper}>
                            <Tr sx={styles.headText}>
                                <Th sx={styles.col1}>Name</Th>
                                {!isMobile && <Th sx={styles.col2}>{`VWAP(24Hr)`}</Th>}
                                <Th sx={styles.col3}>{`Change(24Hr)`}</Th>
                                {!isMobile && <Th sx={styles.col4}>Market Cap</Th>}
                                <Th sx={styles.col5}>Price</Th>
                                {!isMobile && !isTablet && <Th sx={styles.col6}></Th>}
                            </Tr>
                        </Thead>
                        <Tbody sx={styles.bodyWrapper}>
                            {isLoading ? (
                                <AssetsSkeleton />
                            ) : (
                                assets[currentPage]?.map((asset) => (
                                    <AssetItem key={asset.id} asset={asset} currentPage={currentPage} />
                                ))
                            )}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Stack>
        </Pagination>
    );
};
