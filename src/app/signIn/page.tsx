import { Spinner, Stack } from "@chakra-ui/react";

import { Header } from "components/Header";
import dynamic from "next/dynamic";

import { styles } from "./styles";

const DynamicSignIn = dynamic(() => import("./components/Form").then((mod) => mod.SignInForm), {
    loading: () => <Spinner />,
});

const SignIn = () => {
    return (
        <>
            <Header isSignUpHidden isSignInHidden />
            <Stack sx={styles.contentWrapper}>
                <DynamicSignIn />
            </Stack>
        </>
    );
};

export default SignIn;
