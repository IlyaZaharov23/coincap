import { ReactNode } from "react";

import { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

type ButtonPropsType = {
    children: ReactNode;
    variant: string;
    isDisabledState?: boolean;
};

export type CombinedButtonProps = ButtonPropsType & Omit<ChakraButtonProps, "variant">;
