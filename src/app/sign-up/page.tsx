import { Stack, Text } from "@chakra-ui/react";

import { Header } from "components/Header/header.component";

const SignUp = () => {
    return (
        <Stack>
            <Header showSignOut />
            <Text>Sign Up</Text>
        </Stack>
    );
};

export default SignUp;
