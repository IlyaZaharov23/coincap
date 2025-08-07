import { FC } from "react";

import { Stack } from "@chakra-ui/react";

import logoutIcon from "assets/logoutIcon.svg";
import signInIcon from "assets/signInIcon.svg";
import signUpIcon from "assets/signUpIcon.svg";
import { Button } from "components/Button";
import { useIsMobile } from "hooks/useDevice";
import Image from "next/image";
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
    const isMobile = useIsMobile();

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
                <>
                    {isMobile ? (
                        <Image src={logoutIcon} alt="logout" width={20} onClick={logOut} />
                    ) : (
                        <Button variant={BUTTON_VARIANT.PRIMARY} onClick={logOut}>
                            Log Out
                        </Button>
                    )}
                </>
            ) : (
                <>
                    {!isSignInHidden && (
                        <>
                            {isMobile ? (
                                <Image src={signInIcon} alt="sign-in" width={20} onClick={navigateToSignIn} />
                            ) : (
                                <Button onClick={navigateToSignIn} variant={BUTTON_VARIANT.PRIMARY}>
                                    Sign In
                                </Button>
                            )}
                        </>
                    )}
                    {!isSignUpHidden && (
                        <>
                            {isMobile ? (
                                <Image src={signUpIcon} alt="sign-up" width={20} onClick={navigateToSignUp} />
                            ) : (
                                <Button onClick={navigateToSignUp} variant={BUTTON_VARIANT.PRIMARY}>
                                    Sign Up
                                </Button>
                            )}
                        </>
                    )}
                </>
            )}
        </Stack>
    );
};
