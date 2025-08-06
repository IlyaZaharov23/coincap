"use client";

import { useEffect, useState } from "react";

import { passwordRequirementsMap } from "app/signUp/constants/inputRequirements";
import registrationIcon from "assets/registrationIcon.svg";
import { FormWrapper } from "components/FormWrapper";
import { Input } from "components/Input";
import { useRouter } from "next/navigation";
import { ApiWrapper } from "services/ApiWrapper";
import { PASSWORD_REQUIREMENT_KEYS } from "shared/constants/formRequirements";
import { INPUT_SIZE } from "shared/constants/inputSizes";
import { ROUTES } from "shared/constants/routes";
import { useAppDispatch } from "store/hooks";
import { userRegistration } from "store/slices/auth/auth.thunks";
import { FormErrors, FormState } from "types/types";
import { InputValidationUtil } from "utils/inputValidation";
import { Toast } from "utils/toast";

import { PasswordRequirements } from "../PasswordRequirements";
import { initialFormState } from "./formInitState";

export const SignUpForm = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [errors, setErrors] = useState<FormErrors>({});
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (ApiWrapper.getToken()) {
            router.push(ROUTES.MARKETS);
        }
    }, [router]);

    const handleClickPasswordIcon = () => setShowPassword(!showPassword);
    const handleClickConfirmPasswordIcon = () => setShowConfirmPassword(!showConfirmPassword);

    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            if (InputValidationUtil.validateRegForm(formState, setErrors)) {
                await dispatch(
                    userRegistration({
                        username: formState.username,
                        email: formState.email,
                        password: formState.password,
                        age: Number(formState.age),
                        gender: "male",
                    }),
                ).unwrap();
                Toast.success("Your account has been successfully created!");
                router.push(ROUTES.SIGN_IN);
            }
        } catch (error) {
            Toast.error("A user with this email or username already exists.");
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));

        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const navigateToSignIn = () => {
        router.push(ROUTES.SIGN_IN);
    };

    if (ApiWrapper.getToken()) return null;

    return (
        <FormWrapper
            formTitle="Sign Up"
            buttonTitle="Create account"
            image={registrationIcon}
            textButtonTitle="Sign In"
            textButtonHelper="Already have an account?"
            isRegistrationFlow
            navigate={navigateToSignIn}
            onSubmit={handleSubmit}
            regFormState={formState}
            isLoading={isLoading}
        >
            <Input
                value={formState.username}
                onChange={handleChange("username")}
                placeholder="Enter unique username"
                size={INPUT_SIZE.LARGE}
                label="Username"
                hasError={!!errors.username}
                errorText={errors.username || ""}
                width="450px"
                autoComplete="off"
            />
            <Input
                value={formState.email}
                onChange={handleChange("email")}
                placeholder="Enter your email"
                size={INPUT_SIZE.LARGE}
                label="Email"
                hasError={!!errors.email}
                errorText={errors.email || ""}
                width="450px"
                autoComplete="off"
            />
            <Input
                value={formState.password}
                onChange={handleChange("password")}
                placeholder="Enter your password"
                size={INPUT_SIZE.LARGE}
                label="Password"
                hasError={!!errors.password}
                errorText={errors.password ? passwordRequirementsMap[PASSWORD_REQUIREMENT_KEYS.WRONG] : ""}
                width="450px"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                showPassword={showPassword}
                showPasswordIcon
                handleClickPasswordIcon={handleClickPasswordIcon}
            />
            <Input
                value={formState.confirmPassword}
                onChange={handleChange("confirmPassword")}
                placeholder="Confirm password"
                size={INPUT_SIZE.LARGE}
                label="Confirm password"
                hasError={!!errors.confirmPassword}
                errorText={errors.confirmPassword || ""}
                width="450px"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                showPassword={showConfirmPassword}
                showPasswordIcon
                handleClickPasswordIcon={handleClickConfirmPasswordIcon}
            />
            <Input
                value={formState.age}
                onChange={handleChange("age")}
                placeholder="Enter your age"
                size={INPUT_SIZE.LARGE}
                label="Years old"
                hasError={!!errors.age}
                errorText={errors.age || ""}
                width="450px"
                autoComplete="off"
            />
            <PasswordRequirements passwordError={errors.password} />
        </FormWrapper>
    );
};
