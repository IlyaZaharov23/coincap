import { Stack, Text } from "@chakra-ui/react";

import { passwordMessages } from "app/sign-up/constants/sign-up.config";

import { styles } from "./sign-up-password-requirements.styles";

export const PasswordRequirements = () => {
    return (
        <Stack display="flex" alignSelf="flex-start">
            <Text sx={styles.requirementsTitle}>Password requirenments:</Text>
            <Stack>
                {passwordMessages.map((message) => (
                    <Text sx={styles.requirement} key={message}>
                        - {message}
                    </Text>
                ))}
            </Stack>
        </Stack>
    );
};
