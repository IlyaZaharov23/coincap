import { ReactNode } from "react";

import { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

type ButtonPropsType = {
    children: ReactNode;
    variant: string;
    isDisabledState?: boolean;
    isActive?: boolean | undefined;
};

export type CombinedButtonProps = ButtonPropsType & Omit<ChakraButtonProps, "variant">;
