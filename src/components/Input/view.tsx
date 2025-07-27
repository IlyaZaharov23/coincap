import { FC } from "react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Input as ChakraInput, IconButton, InputGroup, InputRightElement, Stack, Text } from "@chakra-ui/react";

import { bluePrimary } from "shared/constants/colors";

import { inputSizeMap } from "./constants/config";
import { styles } from "./styles";
import { CombinedInputProps } from "./types";

export const Input: FC<CombinedInputProps> = ({
    size,
    label,
    hasError,
    errorText,
    showPasswordIcon,
    showPassword,
    handleClickPasswordIcon,
    ...rest
}) => {
    return (
        <Stack sx={styles.inputWrapper(hasError)}>
            <Text sx={styles.label}>{label}</Text>
            <InputGroup>
                <ChakraInput borderColor={bluePrimary} height={inputSizeMap[size].height} {...rest} />
                {showPasswordIcon && (
                    <InputRightElement>
                        <IconButton
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                            onClick={handleClickPasswordIcon}
                            variant="ghost"
                            size="sm"
                        />
                    </InputRightElement>
                )}
            </InputGroup>
            {hasError && <Text sx={styles.errorText}>{errorText}</Text>}
        </Stack>
    );
};
