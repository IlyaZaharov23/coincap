"use client";

import { Stack } from "@chakra-ui/react";

import { FullscreenLoader } from "components/FullscreenLoader";
import { Header } from "components/Header";
import dynamic from "next/dynamic";

import { styles } from "./styles";

const DynamicCoinContent = dynamic(() => import("./components/CoinContent").then((mod) => mod.CoinContent), {
    loading: () => <FullscreenLoader />,
});

export default function MarketItem() {
    return (
        <Stack>
            <Header showNavbar />
            <Stack sx={styles.contentWrapper}>
                <DynamicCoinContent />
            </Stack>
        </Stack>
    );
}
