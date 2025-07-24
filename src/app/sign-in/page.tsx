import { Stack } from "@chakra-ui/react";

import { Header } from "components/header/header.component";

import { SignInForm } from "./components/form/sign-in.form.component";
import { styles } from "./page.styles";

const SignIn = () => {
    return (
        <Stack>
            <Header />
            <Stack sx={styles.contentWrapper}>
                <SignInForm />
            </Stack>
        </Stack>
    );
};

export default SignIn;
