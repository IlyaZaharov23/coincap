"use client";

import { Stack } from "@chakra-ui/react";

import { ErrorPage } from "components/ErrorPage";
import { Header } from "components/Header";
import { FullscreenLoader } from "components/Header/components/FullscreenLoader";
import dynamic from "next/dynamic";
import { ApiWrapper } from "services/ApiWrapper";

import { styles } from "./styles";

const DynamicCoinsList = dynamic(() => import("./components/CoinsList").then((mod) => mod.CoinsList), {
    loading: () => <FullscreenLoader />,
});

export default function Wallet() {
    if (!ApiWrapper.getToken()) return <ErrorPage />;
    return (
        <Stack sx={styles.mainWrapper}>
            <Header showNavbar />
            <Stack sx={styles.contentWrapper}>
                <DynamicCoinsList />
            </Stack>
        </Stack>
    );
}
