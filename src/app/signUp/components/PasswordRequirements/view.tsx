import { FC, memo } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { passwordMessages } from "app/signUp/constants/inputRequirements";
import { StyleUtil } from "utils/style";

import { styles } from "./styles";
import { PasswordRequirementsProps } from "./types";

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
