"use client";

import { Stack, Text } from "@chakra-ui/react";

import portfolioIcon from "assets/portfolioIcon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ApiWrapper } from "services/ApiWrapper";
import { ROUTES } from "shared/constants/routes";
import { useAppSelector } from "store/hooks";
import { getWallet } from "store/slices/assets/selectors";
import { PricesUtil } from "utils/prices";

import { styles } from "./styles";

export const PortfolioOverview = () => {
    const wallet = useAppSelector(getWallet);
    const router = useRouter();

    const navigateToPortfolio = () => {
        router.push(ROUTES.WALLET);
    };

    const isUserAuth = !!ApiWrapper.getToken();
    if (!isUserAuth) return null;

    return (
        <Stack sx={styles.mainWrapper} onClick={navigateToPortfolio}>
            <Image src={portfolioIcon} alt="bag-icon" width={64} />
            <Stack sx={styles.textWrapper}>
                <Text sx={styles.total}>Total:</Text>
                <Text sx={styles.price}>{PricesUtil.solvePortfolio(Object.values(wallet))}</Text>
            </Stack>
        </Stack>
    );
};
