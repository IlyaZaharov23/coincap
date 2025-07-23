"use client";

import { Stack, Text } from "@chakra-ui/react";

import mainLogo from "assets/appLogo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { styles } from "./logo.styles";

export const Logo = () => {
    const router = useRouter();
    const navigateToHome = () => {
        router.push("/");
    };
    return (
        <Stack onClick={navigateToHome} sx={styles.mainWrapper}>
            <Image src={mainLogo} alt="app-logo" width={28} />
            <Text sx={styles.text}>Coincap</Text>
        </Stack>
    );
};
