import { Stack } from "@chakra-ui/react";

import { Header } from "components/header/header.component";

import { SignUpForm } from "./components/form/sign-up-form.component";
import { styles } from "./page.styles";

const SignUp = () => {
    return (
        <Stack height="100vh">
            <Header />
            <Stack sx={styles.contentWrapper}>
                <SignUpForm />
            </Stack>
        </Stack>
    );
};

export default SignUp;
