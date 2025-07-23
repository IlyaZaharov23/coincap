import { FC } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { Button } from "components/button/button.component";
import Image from "next/image";
import { BUTTON_VARIANT } from "shared/constants/button-variants";

import { styles } from "./form-wrapper.styles";
import { FormWrapperPropsType } from "./form-wrapper.types";

export const FormWrapper: FC<FormWrapperPropsType> = ({ buttonTitle, formTitle, image, children, formData }) => {
    return (
        <Stack sx={styles.mainWrapper}>
            <Text sx={styles.text}>{formTitle}</Text>
            <Image src={image} alt="auth-logo" width={128} />
            {children}
            <Button variant={BUTTON_VARIANT.PRIMARY} marginTop="1rem">
                {buttonTitle}
            </Button>
        </Stack>
    );
};
