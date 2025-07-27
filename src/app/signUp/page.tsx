import { Stack } from "@chakra-ui/react";

import { Header } from "components/Header";

import { SignUpForm } from "./components/Form";
import { styles } from "./styles";

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
