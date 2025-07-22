import { FC } from "react";

import { Button as ChakraButton } from "@chakra-ui/react";

import { buttonVariantsMap } from "./button.config";
import { CombinedButtonProps } from "./button.types";

export const Button: FC<CombinedButtonProps> = ({ children, variant, ...rest }) => {
    return (
        <ChakraButton
            backgroundColor={buttonVariantsMap[variant].backgroundColor}
            color={buttonVariantsMap[variant].color}
            _hover={buttonVariantsMap[variant].hover}
            textDecoration={buttonVariantsMap[variant].textDecoration}
            {...rest}
        >
            {children}
        </ChakraButton>
    );
};
