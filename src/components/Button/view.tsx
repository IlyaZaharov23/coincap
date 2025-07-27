import { FC } from "react";

import { Button as ChakraButton } from "@chakra-ui/react";

import { CombinedButtonProps } from "./types";
import { buttonVariantsMap } from "./variantsMap";

export const Button: FC<CombinedButtonProps> = ({ children, variant, isDisabledState, isActive, ...rest }) => {
    return (
        <ChakraButton
            backgroundColor={buttonVariantsMap[variant].backgroundColor}
            color={buttonVariantsMap[variant].color}
            _hover={!isDisabledState ? buttonVariantsMap[variant].hover : {}}
            textDecoration={buttonVariantsMap[variant].textDecoration}
            borderRadius={buttonVariantsMap[variant].borderRadius}
            borderBottom={buttonVariantsMap[variant].borderBottom(isActive)}
            {...rest}
        >
            {children}
        </ChakraButton>
    );
};
