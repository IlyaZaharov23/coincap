import { Stack } from "@chakra-ui/react";

import { Header } from "components/header/header.component";

import { SignUpForm } from "./components/sign-up-form/sign-up-form.component";
import { styles } from "./page.styles";

const SignUp = () => {
    return (
        <Stack>
            <Header showSignIn />
            <Stack sx={styles.contentWrapper}>
                <SignUpForm />
            </Stack>
        </Stack>
    );
};

export default SignUp;
