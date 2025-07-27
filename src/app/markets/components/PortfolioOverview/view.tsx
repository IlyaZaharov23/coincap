"use client";

import { Stack, Text } from "@chakra-ui/react";

import portfolioIcon from "assets/portfolioIcon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ROUTES } from "shared/constants/routes";
import { useAppSelector } from "store/hooks";
import { getPortfolioPrice } from "store/slices/assets/assets.selectors";

import { styles } from "./styles";

export const PortfolioOverview = () => {
    const total = useAppSelector(getPortfolioPrice);
    const router = useRouter();
    const navigateToPortfolio = () => {
        router.push(ROUTES.PORTFOLIO);
    };
    return (
        <Stack sx={styles.mainWrapper} onClick={navigateToPortfolio}>
            <Image src={portfolioIcon} alt="bag-icon" width={64} />
            <Stack sx={styles.textWrapper}>
                <Text sx={styles.total}>Total:</Text>
                <Text sx={styles.price}>{total} USD</Text>
            </Stack>
        </Stack>
    );
};
