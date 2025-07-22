import { Stack, Text } from "@chakra-ui/react";

import { Header } from "components/Header/header.component";

import { SignInForm } from "./components/SignInForm/sign-in-form.component";
import { styles } from "./page.styles";

const SignIn = () => {
    return (
        <Stack>
            <Header showSignOut />
            <Stack sx={styles.contentWrapper}>
                <Text sx={styles.title}>Sign In</Text>
                <SignInForm />
            </Stack>
        </Stack>
    );
};

export default SignIn;
