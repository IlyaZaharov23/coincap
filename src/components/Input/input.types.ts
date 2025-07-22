import { InputProps as ChakraInputProps } from "@chakra-ui/react";

type InputPropsType = {
    size: string;
    label: string;
    hasError: boolean;
    errorText: string;
};

export type CombinedInputProps = InputPropsType & Omit<ChakraInputProps, "variant">;
