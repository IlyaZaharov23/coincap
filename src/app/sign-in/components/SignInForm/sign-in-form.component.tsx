"use client";

import { Stack } from "@chakra-ui/react";

import loginIcon from "assets/loginIcon.svg";
import { Button } from "components/Button/button.component";
import { BUTTON_VARIANT } from "components/Button/button.variants";
import { Input } from "components/Input/input.compoent";
import { INPUT_SIZE } from "components/Input/input.size";
import Image from "next/image";

import { styles } from "./sign-in-form.styles";

export const SignInForm = () => {
    return (
        <Stack sx={styles.mainWrapper}>
            <Image src={loginIcon} alt="login-icon" width={128} />
            <Input
                placeholder="example@example.com"
                size={INPUT_SIZE.LARGE}
                hasError={true}
                errorText="This field cannot be empty"
                label="Email"
            />
            <Input
                placeholder="Example!1"
                size={INPUT_SIZE.LARGE}
                hasError={true}
                errorText="This field cannot be empty"
                label="Password"
            />
            <Button variant={BUTTON_VARIANT.PRIMARY} marginTop="1rem">
                Sign In
            </Button>
        </Stack>
    );
};
