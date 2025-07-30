"use client";

import { useEffect, useState } from "react";

import { Stack, Text } from "@chakra-ui/react";

import portfolioIcon from "assets/portfolioIcon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { COINS_PORTFOLIO } from "services/constants";
import { ROUTES } from "shared/constants/routes";
import { useAppSelector } from "store/hooks";
import { getWallet } from "store/slices/assets/assets.selectors";
import { WalletItem } from "store/slices/assets/assets.types";
import { PricesUtil } from "utils/prices";

import { styles } from "./styles";

export const PortfolioOverview = () => {
    const wallet = useAppSelector(getWallet);
    const [savedWallet, setSavedWallet] = useState<WalletItem[]>([]);
    const router = useRouter();

    const navigateToPortfolio = () => {
        router.push(ROUTES.WALLET);
    };

    useEffect(() => {
        const storedWallet = localStorage.getItem(COINS_PORTFOLIO);
        if (storedWallet) {
            try {
                const parsedWallet = JSON.parse(storedWallet);
                setSavedWallet(Object.values(parsedWallet));
            } catch (error) {
                console.log(error);
            }
        } else {
            setSavedWallet(Object.values(wallet));
        }
    }, []);

    return (
        <Stack sx={styles.mainWrapper} onClick={navigateToPortfolio}>
            <Image src={portfolioIcon} alt="bag-icon" width={64} />
            <Stack sx={styles.textWrapper}>
                <Text sx={styles.total}>Total:</Text>
                <Text sx={styles.price}>{PricesUtil.solvePortfolio(Object.values(savedWallet))}</Text>
            </Stack>
        </Stack>
    );
};
