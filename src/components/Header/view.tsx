"use client";

import { FC } from "react";

import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/react";

import { Logo } from "components/Logo";
import { useRouter } from "next/navigation";

import { ActionButtons } from "./components/ActionButtons";
import { Navbar } from "./components/Navbar";
import { styles } from "./styles";
import { HeaderPropsType } from "./types";

export const Header: FC<HeaderPropsType> = ({ showLogOut, showSignIn, showSignUp, showNavbar, showBack }) => {
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };
    return (
        <Stack sx={styles.headerWrapper}>
            <Stack sx={styles.contentWrapper}>
                {showBack ? <ChevronLeftIcon sx={styles.backIcon} onClick={handleGoBack} /> : <Logo />}
                {showNavbar && <Navbar />}
            </Stack>
            <ActionButtons showLogOut={showLogOut} showSignIn={showSignIn} showSignUp={showSignUp} />
        </Stack>
    );
};
