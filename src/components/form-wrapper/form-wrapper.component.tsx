import { FC } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { Button } from "components/button/button.component";
import Image from "next/image";
import { BUTTON_VARIANT } from "shared/constants/button-variants";

import { styles } from "./form-wrapper.styles";
import { FormWrapperPropsType } from "./form-wrapper.types";

export const FormWrapper: FC<FormWrapperPropsType> = ({
    buttonTitle,
    formTitle,
    image,
    children,
    formData,
    hasAccount,
    textButtonTitle,
    textButtonHelper,
    navigate,
}) => {
    return (
        <Stack sx={styles.mainWrapper}>
            <Text sx={styles.text}>{formTitle}</Text>
            <Image src={image} alt="auth-logo" width={128} />
            {children}
            <Button variant={BUTTON_VARIANT.PRIMARY} marginTop="1rem" width="300px">
                {buttonTitle}
            </Button>
            {hasAccount ? (
                <Stack sx={styles.textButtonWrapper}>
                    <Text sx={styles.helperText}>{textButtonHelper}</Text>
                    <Button variant={BUTTON_VARIANT.TEXT} onClick={navigate} padding={0}>
                        {textButtonTitle}
                    </Button>
                </Stack>
            ) : (
                <Button variant={BUTTON_VARIANT.SECONDARY} onClick={navigate} width="300px">
                    {textButtonTitle}
                </Button>
            )}
        </Stack>
    );
};
