import { FC } from "react";

import { Stack } from "@chakra-ui/react";

import { Button } from "components/button/button.component";
import { useRouter } from "next/navigation";
import { BUTTON_VARIANT } from "shared/constants/button-variants";

import { styles } from "./header.action-buttons.styles";
import { ActionButtonsProps } from "./header.action-buttons.types";

export const ActionButtons: FC<ActionButtonsProps> = ({ showLogOut, showSignIn, showSignUp }) => {
    const router = useRouter();

    const navigateToSignIn = () => {
        router.push("/sign-in");
    };

    const navigateToSignUp = () => {
        router.push("/sign-up");
    };
    return (
        <Stack sx={styles.buttonsWrapper}>
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
            {showLogOut && <Button variant={BUTTON_VARIANT.PRIMARY}>Log Out</Button>}
        </Stack>
    );
};
