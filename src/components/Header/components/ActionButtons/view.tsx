import { FC } from "react";

import { Stack } from "@chakra-ui/react";

import { Button } from "components/Button";
import { useRouter } from "next/navigation";
import { BUTTON_VARIANT } from "shared/constants/buttonVariants";
import { ROUTES } from "shared/constants/routes";
import { useAppDispatch } from "store/hooks";
import { clearWallet } from "store/slices/assets/assets.thunks";
import { userLogout } from "store/slices/auth/auth.thunks";

import { styles } from "./styles";
import { ActionButtonsProps } from "./types";

export const ActionButtons: FC<ActionButtonsProps> = ({ showLogOut, isSignInHidden, isSignUpHidden }) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const navigateToSignIn = () => {
        router.push(ROUTES.SIGN_IN);
    };

    const navigateToSignUp = () => {
        router.push(ROUTES.SIGN_UP);
    };

    const logOut = () => {
        dispatch(userLogout());
        dispatch(clearWallet());
        router.push(ROUTES.SIGN_IN);
    };
    return (
        <Stack sx={styles.buttonsWrapper}>
            {showLogOut ? (
                <Button variant={BUTTON_VARIANT.PRIMARY} onClick={logOut}>
                    Log Out
                </Button>
            ) : (
                <>
                    {!isSignInHidden && (
                        <Button onClick={navigateToSignIn} variant={BUTTON_VARIANT.PRIMARY}>
                            Sign In
                        </Button>
                    )}
                    {!isSignUpHidden && (
                        <Button onClick={navigateToSignUp} variant={BUTTON_VARIANT.PRIMARY}>
                            Sign Up
                        </Button>
                    )}
                </>
            )}
        </Stack>
    );
};
