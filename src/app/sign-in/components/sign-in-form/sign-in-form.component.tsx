"use client";

import loginIcon from "assets/loginIcon.svg";
import { FormWrapper } from "components/form-wrapper/form-wrapper.component";
import { FormData } from "components/form-wrapper/form-wrapper.types";
import { Input } from "components/input/input.compoent";
import { useRouter } from "next/navigation";
import { INPUT_SIZE } from "shared/constants/input-sizes";

const formData: FormData = {
    email: "",
    password: "",
};

export const SignInForm = () => {
    const router = useRouter();

    const navigateToSignUp = () => {
        router.push("/sign-up");
    };
    return (
        <FormWrapper
            formTitle="Sign In"
            buttonTitle="Sign In"
            image={loginIcon}
            formData={formData}
            textButtonTitle="Create account"
            navigate={navigateToSignUp}
        >
            <Input
                placeholder="example@example.com"
                size={INPUT_SIZE.LARGE}
                hasError={false}
                errorText=""
                label="Email"
                width="450px"
            />
            <Input
                placeholder="Example!1"
                size={INPUT_SIZE.LARGE}
                hasError={false}
                errorText=""
                label="Password"
                width="450px"
            />
        </FormWrapper>
    );
};
