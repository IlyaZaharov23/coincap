import { Stack } from "@chakra-ui/react";

import { Header } from "components/Header";

import { SignUpForm } from "./components/Form";
import { styles } from "./styles";

const SignUp = () => {
    return (
        <>
            <Header />
            <Stack sx={styles.contentWrapper}>
                <SignUpForm />
            </Stack>
        </>
    );
};

export default SignUp;
