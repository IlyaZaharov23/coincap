import { FC } from "react";

import { Button as ChakraButton } from "@chakra-ui/react";

import { buttonVariantsMap } from "./button.config";
import { CombinedButtonProps } from "./button.types";

export const Button: FC<CombinedButtonProps> = ({ children, variant, isDisabledState, ...rest }) => {
    return (
        <ChakraButton
            backgroundColor={buttonVariantsMap[variant].backgroundColor}
            color={buttonVariantsMap[variant].color}
            _hover={!isDisabledState ? buttonVariantsMap[variant].hover : {}}
            textDecoration={buttonVariantsMap[variant].textDecoration}
            borderRadius="20px"
            {...rest}
        >
            {children}
        </ChakraButton>
    );
};
