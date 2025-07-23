"use client";

import registrationIcon from "assets/registrationIcon.svg";
import { FormWrapper } from "components/form-wrapper/form-wrapper.component";
import { FormData } from "components/form-wrapper/form-wrapper.types";
import { Input } from "components/input/input.compoent";
import { useRouter } from "next/navigation";
import { INPUT_SIZE } from "shared/constants/input-sizes";

import { PasswordRequirements } from "../password-requirements/sign-up-password-requirements.component";

const formData: FormData = {
    username: "",
    email: "",
    password: "",
    age: 20,
};

export const SignUpForm = () => {
    const router = useRouter();
    const navigateToSignIn = () => {
        router.push("/sign-in");
    };
    return (
        <FormWrapper
            formTitle="Sign Up"
            buttonTitle="Create account"
            image={registrationIcon}
            formData={formData}
            textButtonTitle="Sign In"
            textButtonHelper="Already have an account?"
            hasAccount
            navigate={navigateToSignIn}
        >
            <Input
                placeholder="Enter unique username"
                size={INPUT_SIZE.LARGE}
                label="Username"
                hasError={false}
                errorText=""
                width="450px"
            />
            <Input
                placeholder="Enter your email"
                size={INPUT_SIZE.LARGE}
                label="Email"
                hasError={false}
                errorText=""
                width="450px"
            />
            <Input
                placeholder="Enter your password"
                size={INPUT_SIZE.LARGE}
                label="Password"
                hasError={false}
                errorText=""
                width="450px"
            />
            <Input
                placeholder="Enter your age"
                size={INPUT_SIZE.LARGE}
                label="Years old"
                hasError={false}
                errorText=""
                width="450px"
            />
            <PasswordRequirements />
        </FormWrapper>
    );
};
