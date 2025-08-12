"use client";

import { useEffect, useState } from "react";

import { Stack } from "@chakra-ui/react";

import { ErrorPage } from "components/ErrorPage";
import { FullscreenLoader } from "components/FullscreenLoader";
import { Header } from "components/Header";
import dynamic from "next/dynamic";
import { ApiWrapper } from "services/ApiWrapper";

import { styles } from "./styles";

const DynamicCoinsList = dynamic(() => import("./components/CoinsList").then((mod) => mod.CoinsList), {
    loading: () => <FullscreenLoader />,
});

export default function Wallet() {
    const [isValidToken, setIsValidToken] = useState<boolean | null>(null);

    useEffect(() => {
        setIsValidToken(!!ApiWrapper.getToken());
    }, []);

    if (isValidToken === null) {
        return <FullscreenLoader />;
    }

    if (!isValidToken) {
        return <ErrorPage />;
    }

    return (
        <Stack sx={styles.mainWrapper}>
            <Header showNavbar />
            <Stack sx={styles.contentWrapper}>
                <DynamicCoinsList />
            </Stack>
        </Stack>
    );
}
