"use client";

import React, { useEffect, useState } from "react";

import { emailRequirementsMap } from "app/signUp/constants/inputRequirements";
import loginIcon from "assets/loginIcon.svg";
import { FormWrapper } from "components/FormWrapper";
import { FormData } from "components/FormWrapper/types";
import { Input } from "components/Input";
import { useRouter } from "next/navigation";
import { ApiWrapper } from "services/ApiWrapper";
import { EMAIL_REQUIREMENT_KEYS } from "shared/constants/formRequirements";
import { INPUT_SIZE } from "shared/constants/inputSizes";
import { ROUTES } from "shared/constants/routes";
import { useAppDispatch } from "store/hooks";
import { userLogin } from "store/slices/auth/auth.thunks";
import { InputValidationUtil } from "utils/inputValidation";
import { Toast } from "utils/toast";

import { formInitialData } from "./config";

export const SignInForm = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [formState, setFormState] = useState<FormData>(formInitialData);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClickPasswordIcon = () => setShowPassword(!showPassword);

    const navigateToSignUp = () => {
        router.push(ROUTES.SIGN_UP);
    };

    useEffect(() => {
        if (ApiWrapper.getToken()) {
            router.push(ROUTES.MARKETS);
        }
    }, [router]);

    useEffect(() => {
        if (ApiWrapper.getEmail()) {
            setFormState((prev) => ({
                ...prev,
                email: String(ApiWrapper.getEmail()),
            }));
        }
    }, []);

    const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    };
    const onSubmit = async () => {
        try {
            setIsLoading(true);
            if (!InputValidationUtil.isEmailValidates(formState.email)) {
                setEmailError(true);
                return;
            }
            await dispatch(userLogin(formState)).unwrap();
            router.push(ROUTES.MARKETS);
            Toast.success("Good to see you again! Data loaded successfully.");
        } catch (error) {
            Toast.error("Invalid email or password. Please check your credentials and try again.");
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    if (ApiWrapper.getToken()) return null;

    return (
        <FormWrapper
            formTitle="Sign In"
            buttonTitle="Sign In"
            image={loginIcon}
            textButtonTitle="Create account"
            navigate={navigateToSignUp}
            onSubmit={onSubmit}
            authFormState={formState}
            isLoading={isLoading}
        >
            <Input
                value={formState.email}
                onChange={handleChange("email")}
                placeholder="example@example.com"
                size={INPUT_SIZE.LARGE}
                hasError={emailError}
                errorText={emailRequirementsMap[EMAIL_REQUIREMENT_KEYS.FORMAT]}
                label="Email"
                width="450px"
                autoComplete="off"
            />
            <Input
                value={formState.password}
                onChange={handleChange("password")}
                placeholder="Example!1"
                size={INPUT_SIZE.LARGE}
                label="Password"
                width="450px"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                showPasswordIcon
                showPassword={showPassword}
                handleClickPasswordIcon={handleClickPasswordIcon}
            />
        </FormWrapper>
    );
};
