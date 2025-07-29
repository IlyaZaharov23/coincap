import { FC } from "react";

import { Stack } from "@chakra-ui/react";

import { Button } from "components/Button";
import { useRouter } from "next/navigation";
import { AUTH_TOKEN } from "services/constants";
import { BUTTON_VARIANT } from "shared/constants/buttonVariants";
import { ROUTES } from "shared/constants/routes";

import { styles } from "./styles";
import { ActionButtonsProps } from "./types";

export const ActionButtons: FC<ActionButtonsProps> = ({ showLogOut, showSignIn, showSignUp }) => {
    const router = useRouter();

    const navigateToSignIn = () => {
        router.push(ROUTES.SIGN_IN);
    };

    const navigateToSignUp = () => {
        router.push(ROUTES.SIGN_UP);
    };

    const logOut = () => {
        localStorage.removeItem(AUTH_TOKEN);
        router.push(ROUTES.HOME);
    };
    return (
        <Stack sx={styles.buttonsWrapper}>
            {showLogOut ? (
                <Button variant={BUTTON_VARIANT.PRIMARY} onClick={logOut}>
                    Log Out
                </Button>
            ) : (
                <>
                    {showSignIn && (
                        <Button onClick={navigateToSignIn} variant={BUTTON_VARIANT.PRIMARY}>
                            Sign In
                        </Button>
                    )}
                    {showSignUp && (
                        <Button onClick={navigateToSignUp} variant={BUTTON_VARIANT.PRIMARY}>
                            Sign Up
                        </Button>
                    )}
                </>
            )}
        </Stack>
    );
};
