"use client";

import { FC } from "react";

import { Stack } from "@chakra-ui/react";

import { Logo } from "components/logo/logo.component";

import { ActionButtons } from "./components/action-buttons/header.action-buttons.component";
import { Navbar } from "./components/navbar/header.navbar.component";
import { TopCurrencies } from "./components/top-currencies/header.top-currencies.component";
import { styles } from "./header.styles";
import { HeaderPropsType } from "./header.types";

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
