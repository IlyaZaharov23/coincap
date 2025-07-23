import { FC } from "react";

import { Input as ChakraInput, Stack, Text } from "@chakra-ui/react";

import { bluePrimary } from "shared/constants/colors";

import { inputSizeMap } from "./input.config";
import { styles } from "./input.styles";
import { CombinedInputProps } from "./input.types";

export const Input: FC<CombinedInputProps> = ({ size, label, hasError, errorText, ...rest }) => {
    return (
        <Stack sx={styles.inputWrapper(hasError)}>
            <Text sx={styles.label}>{label}</Text>
            <ChakraInput borderColor={bluePrimary} height={inputSizeMap[size].height} {...rest} />
            {hasError && <Text sx={styles.errorText}>{errorText}</Text>}
        </Stack>
    );
};
