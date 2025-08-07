"use client";

import { Stack } from "@chakra-ui/react";

import { FullscreenLoader } from "components/FullscreenLoader";
import { Header } from "components/Header";
import { useIsMobile, useIsTablet } from "hooks/useDevice";
import dynamic from "next/dynamic";

import { styles } from "./styles";

const DynamicSignIn = dynamic(() => import("./components/Form").then((mod) => mod.SignInForm), {
    loading: () => <FullscreenLoader />,
});

const SignIn = () => {
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();
    return (
        <>
            <Header isSignUpHidden isSignInHidden showBack={isMobile || isTablet} showClose={isMobile || isTablet} />
            <Stack sx={styles.contentWrapper}>
                <DynamicSignIn />
            </Stack>
        </>
    );
};

export default SignIn;
