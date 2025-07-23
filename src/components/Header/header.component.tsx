"use client";

import { FC } from "react";

import { Stack } from "@chakra-ui/react";

import { Button } from "components/button/button.component";
import { Logo } from "components/logo/logo.component";
import { useRouter } from "next/navigation";
import { BUTTON_VARIANT } from "shared/constants/button-variants";

import { styles } from "./header.styles";
import { HeaderPropsType } from "./header.types";

export const Header: FC<HeaderPropsType> = ({
    showPopularCoins,
    showLogOut,
    showSignIn,
    showSignOut,
    popularCoins,
}) => {
    const router = useRouter();

    const navigateToSignIn = () => {
        router.push("/sign-in");
    };

    const navigateToSignUp = () => {
        router.push("/sign-up");
    };

    return (
        <Stack sx={styles.headerWrapper}>
            <Stack marginLeft="4rem">
                <Logo />
                {/* {showPopularCoins && popularCoins.length > 0 && <></>} */}
            </Stack>
            <Stack sx={styles.buttonsWrapper}>
                {showSignIn && (
                    <Button onClick={navigateToSignIn} variant={BUTTON_VARIANT.PRIMARY}>
                        Sign In
                    </Button>
                )}
                {showSignOut && (
                    <Button onClick={navigateToSignUp} variant={BUTTON_VARIANT.PRIMARY}>
                        Sign Up
                    </Button>
                )}
                {showLogOut && <Button variant={BUTTON_VARIANT.PRIMARY}>Log Out</Button>}
            </Stack>
        </Stack>
    );
};
