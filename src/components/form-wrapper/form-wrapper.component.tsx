import { FC } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { Button } from "components/button/button.component";
import Image from "next/image";
import { BUTTON_VARIANT } from "shared/constants/button-variants";
import { InputValidationUtil } from "utils/input-validation/input-validation.util";

import { styles } from "./form-wrapper.styles";
import { FormWrapperPropsType } from "./form-wrapper.types";

export const FormWrapper: FC<FormWrapperPropsType> = ({
    buttonTitle,
    formTitle,
    image,
    children,
    isRegistrationFlow,
    textButtonTitle,
    textButtonHelper,
    navigate,
    onSubmit,
    regFormState,
    authFormState,
}) => {
    return (
        <Stack sx={styles.mainWrapper}>
            <Text sx={styles.text}>{formTitle}</Text>
            <Image src={image} alt="auth-logo" width={128} />
            {children}
            <Button
                variant={BUTTON_VARIANT.PRIMARY}
                sx={styles.confirmButton}
                onClick={onSubmit}
                isDisabledState={
                    isRegistrationFlow
                        ? regFormState && !InputValidationUtil.isRegFormValidates(regFormState)
                        : authFormState && !InputValidationUtil.isAuthFormValidates(authFormState)
                }
                isDisabled={
                    isRegistrationFlow
                        ? regFormState && !InputValidationUtil.isRegFormValidates(regFormState)
                        : authFormState && !InputValidationUtil.isAuthFormValidates(authFormState)
                }
            >
                {buttonTitle}
            </Button>
            {isRegistrationFlow ? (
                <Stack sx={styles.textButtonWrapper}>
                    <Text sx={styles.helperText}>{textButtonHelper}</Text>
                    <Button variant={BUTTON_VARIANT.TEXT} onClick={navigate} sx={styles.textButton}>
                        {textButtonTitle}
                    </Button>
                </Stack>
            ) : (
                <Button variant={BUTTON_VARIANT.SECONDARY} onClick={navigate} sx={styles.secondaryButton}>
                    {textButtonTitle}
                </Button>
            )}
        </Stack>
    );
};
