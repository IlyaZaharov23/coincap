import { Stack, Text } from "@chakra-ui/react";

import { Button } from "components/Button";
import { Logo } from "components/Logo";
import { useRouter } from "next/navigation";
import { BUTTON_VARIANT } from "shared/constants/buttonVariants";
import { ROUTES } from "shared/constants/routes";

import { styles } from "./styles";

export const ErrorPage = () => {
    const router = useRouter();
    const navigateToSignIn = () => {
        router.push(ROUTES.SIGN_IN);
    };
    return (
        <Stack sx={styles.mainWrapper}>
            <Logo />
            <Text sx={styles.mainTitle}>You don’t have access</Text>
            <Text sx={styles.secondaryTitle}>You must be logged in to view this page.</Text>
            <Button variant={BUTTON_VARIANT.PRIMARY} onClick={navigateToSignIn}>
                Go To Sign In
            </Button>
        </Stack>
    );
};
