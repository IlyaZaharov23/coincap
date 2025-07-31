"use client";

import { useEffect } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { USER_ID } from "services/constants";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getWallet } from "store/slices/assets/assets.selectors";
import { updateCoinsWallet } from "store/slices/assets/assets.thunks";
import { LocalStorageUtil } from "utils/localStorage";
import { PricesUtil } from "utils/prices";

import { CoinItem } from "../CoinItem";
import { styles } from "./styles";

export const CoinsList = () => {
    const wallet = useAppSelector(getWallet);
    const dispatch = useAppDispatch();

    const setUserPortfolio = () => {
        if (Object.keys(wallet).length > 0) return;
        const userId = localStorage.getItem(USER_ID);
        if (!userId) return;
        const userPortfolio = LocalStorageUtil.getUserPortfolio(userId);
        if (!userPortfolio) return;

        dispatch(updateCoinsWallet(userPortfolio));
    };

    useEffect(() => {
        setUserPortfolio();
    }, []);

    return (
        <>
            <Stack sx={styles.topWrapper}>
                <Text sx={styles.title}>Wallet</Text>
                <Stack sx={styles.totalWrapper}>
                    <Text sx={styles.totalTitle}>Total wallet price:</Text>
                    <Text sx={styles.totalValue}>{PricesUtil.solvePortfolio(Object.values(wallet))}</Text>
                </Stack>
            </Stack>
            <Stack sx={styles.wrapper}>
                {Object.values(wallet).map((item) => (
                    <CoinItem
                        key={item.id}
                        symbol={item.symbol}
                        name={item.name}
                        price={item.price}
                        amount={item.amount}
                        id={item.id}
                        cost={item.cost}
                    />
                ))}
            </Stack>
        </>
    );
};
