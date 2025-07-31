"use client";

import { FC } from "react";

import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/react";

import { Logo } from "components/Logo";
import { useRouter } from "next/navigation";
import { ApiWrapper } from "services/ApiWrapper";
import { USER_EMAIL } from "services/constants";

import { ActionButtons } from "./components/ActionButtons";
import { Navbar } from "./components/Navbar";
import { styles } from "./styles";
import { HeaderPropsType } from "./types";

export const Header: FC<HeaderPropsType> = ({ showNavbar, showBack, isSignInHidden, isSignUpHidden }) => {
    const router = useRouter();
    const handleGoBack = () => {
        if (sessionStorage.getItem(USER_EMAIL)) {
            sessionStorage.removeItem(USER_EMAIL);
        }
        router.back();
    };
    const isShowLogout = !!ApiWrapper.getToken();
    return (
        <Stack sx={styles.headerWrapper}>
            <Stack sx={styles.contentWrapper}>
                {showBack ? <ChevronLeftIcon sx={styles.backIcon} onClick={handleGoBack} /> : <Logo />}
                {showNavbar && <Navbar />}
            </Stack>
            <ActionButtons showLogOut={isShowLogout} isSignInHidden={isSignInHidden} isSignUpHidden={isSignUpHidden} />
        </Stack>
    );
};
