"use client";

import { useEffect, useState } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { COINS_PORTFOLIO } from "services/constants";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getWallet } from "store/slices/assets/assets.selectors";
import { updateCoinsWallet } from "store/slices/assets/assets.thunks";
import { WalletItem } from "store/slices/assets/assets.types";
import { PricesUtil } from "utils/prices";

import { CoinItem } from "../CoinItem";
import { styles } from "./styles";

export const CoinsList = () => {
    const wallet = useAppSelector(getWallet);
    const dispatch = useAppDispatch();
    const [savedWallet, setSavedWallet] = useState<WalletItem[]>([]);

    const updateWallet = () => {
        if (Object.values(wallet).length > 0) return;
        const storedWallet = localStorage.getItem(COINS_PORTFOLIO);
        if (storedWallet) {
            try {
                const parsedWallet = JSON.parse(storedWallet);
                setSavedWallet(Object.values(parsedWallet));
                dispatch(updateCoinsWallet(parsedWallet));
            } catch (error) {
                console.log(error);
            }
        } else {
            setSavedWallet(Object.values(wallet));
        }
    };

    useEffect(() => {
        updateWallet();
    }, [wallet, dispatch]);

    return (
        <>
            <Stack sx={styles.topWrapper}>
                <Text sx={styles.title}>Wallet</Text>
                <Stack sx={styles.totalWrapper}>
                    <Text sx={styles.totalTitle}>Total wallet price:</Text>
                    <Text sx={styles.totalValue}>{PricesUtil.solvePortfolio(savedWallet)}</Text>
                </Stack>
            </Stack>
            <Stack sx={styles.wrapper}>
                {savedWallet.map((item) => (
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
