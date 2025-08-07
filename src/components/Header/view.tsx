"use client";

import { FC } from "react";

import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Stack, Text } from "@chakra-ui/react";

import { Logo } from "components/Logo";
import { useIsMobile, useIsTablet } from "hooks/useDevice";
import { usePathname, useRouter } from "next/navigation";
import { ApiWrapper } from "services/ApiWrapper";
import { USER_EMAIL } from "services/constants";
import { TextUtil } from "utils/text";

import { ActionButtons } from "./components/ActionButtons";
import { Navbar } from "./components/Navbar";
import { styles } from "./styles";
import { HeaderPropsType } from "./types";

export const Header: FC<HeaderPropsType> = ({ showNavbar, showBack, isSignInHidden, isSignUpHidden, showClose }) => {
    const router = useRouter();
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();
    const pathname = usePathname();
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
            </Stack>
            {showNavbar && <Navbar />}
            {(isMobile || isTablet) && !showNavbar && (
                <Text sx={styles.pathname}>{TextUtil.pathToTitle(pathname)}</Text>
            )}
            <ActionButtons
                showLogOut={isShowLogout}
                isSignInHidden={isSignInHidden}
                isSignUpHidden={isSignUpHidden}
                showClose={showClose}
            />
        </Stack>
    );
};
