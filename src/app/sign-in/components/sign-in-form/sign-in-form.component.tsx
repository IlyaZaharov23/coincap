"use client";

import loginIcon from "assets/loginIcon.svg";
import { FormWrapper } from "components/form-wrapper/form-wrapper.component";
import { FormData } from "components/form-wrapper/form-wrapper.types";
import { Input } from "components/input/input.compoent";
import { INPUT_SIZE } from "shared/constants/input-sizes";

const formData: FormData = {
    email: "",
    password: "",
};

export const SignInForm = () => {
    return (
        <FormWrapper formTitle="Sign In" buttonTitle="Sign In" image={loginIcon} formData={formData}>
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
        </FormWrapper>
    );
};
