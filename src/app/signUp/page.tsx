"use client";

import { Stack } from "@chakra-ui/react";

import { FullscreenLoader } from "components/FullscreenLoader";
import { Header } from "components/Header";
import { useIsMobile, useIsTablet } from "hooks/useDevice";
import dynamic from "next/dynamic";

import { styles } from "./styles";

const DynamicSignUp = dynamic(() => import("./components/Form").then((mod) => mod.SignUpForm), {
    loading: () => <FullscreenLoader />,
});

const SignUp = () => {
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();
    return (
        <>
            <Header isSignInHidden isSignUpHidden showBack={isMobile || isTablet} showClose={isMobile || isTablet} />
            <Stack sx={styles.contentWrapper}>
                <DynamicSignUp />
            </Stack>
        </>
    );
};

export default SignUp;
