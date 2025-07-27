"use client";

import { FC } from "react";

import { Stack } from "@chakra-ui/react";

import { Logo } from "components/Logo";

import { ActionButtons } from "./components/ActionButtons";
import { Navbar } from "./components/Navbar";
import { TopCurrencies } from "./components/TopCurrencies";
import { styles } from "./styles";
import { HeaderPropsType } from "./types";

export const Header: FC<HeaderPropsType> = ({
    showPopularCoins,
    showLogOut,
    showSignIn,
    showSignUp,
    showNavbar,
    popularCoins,
}) => {
    return (
        <Stack sx={styles.headerWrapper}>
            <Stack sx={styles.contentWrapper}>
                <Logo />
                {showPopularCoins && <TopCurrencies />}
                {showNavbar && <Navbar />}
            </Stack>
            <ActionButtons showLogOut={showLogOut} showSignIn={showSignIn} showSignUp={showSignUp} />
        </Stack>
    );
};
