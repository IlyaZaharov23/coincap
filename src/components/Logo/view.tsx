"use client";

import { Stack, Text } from "@chakra-ui/react";

import mainLogo from "assets/appLogo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { USER_EMAIL } from "services/constants";
import { ROUTES } from "shared/constants/routes";

import { styles } from "./styles";

export const Logo = () => {
    const router = useRouter();
    const navigateToHome = () => {
        if (sessionStorage.getItem(USER_EMAIL)) {
            sessionStorage.removeItem(USER_EMAIL);
        }
        router.push(ROUTES.HOME);
    };
    return (
        <Stack onClick={navigateToHome} sx={styles.mainWrapper}>
            <Image src={mainLogo} alt="app-logo" width={28} />
            <Text sx={styles.text}>Coincap</Text>
        </Stack>
    );
};
