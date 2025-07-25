import { InputProps as ChakraInputProps } from "@chakra-ui/react";

type InputPropsType = {
    size: string;
    label: string;
    hasError?: boolean;
    errorText?: string;
    showPasswordIcon?: boolean;
    showPassword?: boolean;
    handleClickPasswordIcon?: () => void;
};

export type CombinedInputProps = InputPropsType & Omit<ChakraInputProps, "variant">;
