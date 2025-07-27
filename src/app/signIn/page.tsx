import { Stack } from "@chakra-ui/react";

import { Header } from "components/Header";

import { SignInForm } from "./components/Form";
import { styles } from "./styles";

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
