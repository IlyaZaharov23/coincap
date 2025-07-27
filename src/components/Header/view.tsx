"use client";

import { FC } from "react";

import { Stack } from "@chakra-ui/react";

import { Logo } from "components/Logo";

import { ActionButtons } from "./components/ActionButtons";
import { Navbar } from "./components/Navbar";
import { styles } from "./styles";
import { HeaderPropsType } from "./types";

export const Header: FC<HeaderPropsType> = ({ showLogOut, showSignIn, showSignUp, showNavbar }) => {
    return (
        <Stack sx={styles.headerWrapper}>
            <Stack sx={styles.contentWrapper}>
                <Logo />
                {showNavbar && <Navbar />}
            </Stack>
            <ActionButtons showLogOut={showLogOut} showSignIn={showSignIn} showSignUp={showSignUp} />
        </Stack>
    );
};
