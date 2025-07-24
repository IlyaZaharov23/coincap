import { FC, memo } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { passwordMessages } from "app/sign-up/constants/sign-up.config";
import { StyleUtil } from "utils/style/style.util";

import { styles } from "./sign-up-password-requirements.styles";
import { PasswordRequirementsProps } from "./sign-up.password-requirements.types";

export const PasswordRequirements: FC<PasswordRequirementsProps> = memo(({ passwordError }) => {
    return (
        <Stack display="flex" alignSelf="flex-start">
            <Text sx={styles.requirementsTitle}>Password requirenments:</Text>
            <Stack>
                {passwordMessages.map(({ key, value }) => (
                    <Text sx={StyleUtil.getRequirementStyle(key, passwordError, styles)} key={key}>
                        - {value}
                    </Text>
                ))}
            </Stack>
        </Stack>
    );
});

PasswordRequirements.displayName = "PasswordRequirements";
