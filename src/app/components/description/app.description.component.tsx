"use client";

import { Stack, Text } from "@chakra-ui/react";

import { useRouter } from "next/navigation";

import { styles } from "./app.desctiption.styles";

export const Description = () => {
    const router = useRouter();

    const navigateToSignUp = () => {
        router.push("/sign-up");
    };
    return (
        <Stack sx={styles.mainWrapper}>
            <Text sx={styles.mainTitle}>Your personal crypto market tracker</Text>
            <Text sx={styles.secondaryTitle}>Add assets you’re interested in and track their value in real time</Text>
            <Text sx={styles.actionButton} onClick={navigateToSignUp}>
                Get started now
            </Text>
        </Stack>
    );
};
