"use client";

import { useEffect, useState } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { useRouter } from "next/navigation";
import { ApiWrapper } from "services/ApiWrapper";
import { ROUTES } from "shared/constants/routes";

import { styles } from "./styles";

export const Description = () => {
    const router = useRouter();
    const [isUserAuth, setIsUserAuth] = useState(false);

    const navigateToSignUp = () => {
        router.push(ROUTES.SIGN_UP);
    };

    useEffect(() => {
        setIsUserAuth(!!ApiWrapper.getToken());
    }, []);

    return (
        <Stack sx={styles.mainWrapper}>
            <Text sx={styles.mainTitle}>Your personal crypto market tracker</Text>
            <Text sx={styles.secondaryTitle}>Add assets you’re interested in and track their value in real time</Text>
            {!isUserAuth && (
                <Text sx={styles.actionButton} onClick={navigateToSignUp}>
                    Get started now
                </Text>
            )}
        </Stack>
    );
};
