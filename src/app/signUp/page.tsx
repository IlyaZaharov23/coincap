import { Stack } from "@chakra-ui/react";

import { FullscreenLoader } from "components/FullscreenLoader";
import { Header } from "components/Header";
import dynamic from "next/dynamic";

import { styles } from "./styles";

const DynamicSignUp = dynamic(() => import("./components/Form").then((mod) => mod.SignUpForm), {
    loading: () => <FullscreenLoader />,
});

const SignUp = () => {
    return (
        <>
            <Header isSignInHidden isSignUpHidden />
            <Stack sx={styles.contentWrapper}>
                <DynamicSignUp />
            </Stack>
        </>
    );
};

export default SignUp;
