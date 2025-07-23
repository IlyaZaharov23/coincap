"use client";

import { Stack, Text } from "@chakra-ui/react";

import registrationIcon from "assets/registrationIcon.svg";
import { FormWrapper } from "components/form-wrapper/form-wrapper.component";
import { FormData } from "components/form-wrapper/form-wrapper.types";
import { Input } from "components/input/input.compoent";
import { INPUT_SIZE } from "shared/constants/input-sizes";

const formData: FormData = {
    username: "",
    email: "",
    password: "",
    age: 20,
};

export const SignUpForm = () => {
    return (
        <FormWrapper formTitle="Sign Up" buttonTitle="Sign Up" image={registrationIcon} formData={formData}>
            <Input
                placeholder="Enter unique username"
                size={INPUT_SIZE.LARGE}
                label="Username"
                hasError={false}
                errorText=""
            />
            <Input placeholder="Enter your email" size={INPUT_SIZE.LARGE} label="Email" hasError={false} errorText="" />
            <Input
                placeholder="Enter your password"
                size={INPUT_SIZE.LARGE}
                label="Password"
                hasError={false}
                errorText=""
            />
            <Input
                placeholder="Enter your age"
                size={INPUT_SIZE.LARGE}
                label="Years old"
                hasError={false}
                errorText=""
            />
            <Stack>
                <Text>Password requirenments:</Text>
                <Text></Text>
            </Stack>
        </FormWrapper>
    );
};
