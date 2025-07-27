import {
    ageRequirementsMap,
    confirmPasswordMap,
    emailRequirementsMap,
    usernameRequirementsMap,
} from "app/signUp/constants/inputRequirements";
import { FormData } from "components/FormWrapper/types";
import {
    AGE_REQUIREMENT_KEYS,
    CONFIRM_PASSWORD_KEYS,
    EMAIL_REQUIREMENT_KEYS,
    PASSWORD_REQUIREMENT_KEYS,
    USERNAME_REQUIREMENT_KEYS,
} from "shared/constants/formRequirements";
import { FormState } from "types/types";
import { FormErrors } from "types/types";

export class InputValidationUtil {
    static trimValue(value: string) {
        return value.trim();
    }
    static isEmailValidates(email: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    static isPasswordHasUpperCase(password: string) {
        return /[A-Z]/.test(password);
    }
    static isPasswordHasLowerCase(password: string) {
        return /[a-z]/.test(password);
    }
    static isPasswordHasDigit(password: string) {
        return /\d/.test(password);
    }
    static isPasswordHasSymbol(password: string) {
        return /[!@#$%^&*(),.?":{}|<>]/.test(password);
    }
    static validateRegForm(formState: FormState, setErrors: (newErrors: FormErrors) => void): boolean {
        const newErrors: FormErrors = {};
        const passwordErrorKeys: string[] = [];

        if (!this.trimValue(formState.username)) {
            newErrors.username = usernameRequirementsMap[USERNAME_REQUIREMENT_KEYS.EMPTY];
        }

        if (!this.trimValue(formState.email)) {
            newErrors.email = emailRequirementsMap[EMAIL_REQUIREMENT_KEYS.EMPTY];
        } else if (!this.isEmailValidates(formState.email)) {
            newErrors.email = emailRequirementsMap[EMAIL_REQUIREMENT_KEYS.FORMAT];
        }

        if (!formState.password) {
            newErrors.password = [PASSWORD_REQUIREMENT_KEYS.EMPTY];
        } else {
            if (formState.password.length < 8) {
                passwordErrorKeys.push(PASSWORD_REQUIREMENT_KEYS.LENGTH);
            }
            if (!this.isPasswordHasUpperCase(formState.password)) {
                passwordErrorKeys.push(PASSWORD_REQUIREMENT_KEYS.UPPER_CASE);
            }
            if (!this.isPasswordHasLowerCase(formState.password)) {
                passwordErrorKeys.push(PASSWORD_REQUIREMENT_KEYS.LOWER_CASE);
            }
            if (!this.isPasswordHasDigit(formState.password)) {
                passwordErrorKeys.push(PASSWORD_REQUIREMENT_KEYS.DIGIT);
            }
            if (!this.isPasswordHasSymbol(formState.password)) {
                passwordErrorKeys.push(PASSWORD_REQUIREMENT_KEYS.SYMBOL);
            }

            if (passwordErrorKeys.length > 0) {
                newErrors.password = passwordErrorKeys;
            }
        }

        if (!formState.confirmPassword) {
            newErrors.confirmPassword = confirmPasswordMap[CONFIRM_PASSWORD_KEYS.EMPTY];
        } else if (formState.password !== formState.confirmPassword) {
            newErrors.confirmPassword = confirmPasswordMap[CONFIRM_PASSWORD_KEYS.WRONG];
        }

        if (!formState.age) {
            newErrors.age = ageRequirementsMap[AGE_REQUIREMENT_KEYS.EMPTY];
        } else {
            const ageNum = Number(formState.age);
            if (isNaN(ageNum)) {
                newErrors.age = ageRequirementsMap[AGE_REQUIREMENT_KEYS.IS_NAN];
            } else if (ageNum < 18) {
                newErrors.age = ageRequirementsMap[AGE_REQUIREMENT_KEYS.MIN_AGE];
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    static isRegFormValidates(formState: FormState) {
        return (
            !!this.trimValue(formState.username) &&
            !!this.trimValue(formState.email) &&
            !!this.trimValue(formState.password) &&
            !!this.trimValue(formState.confirmPassword) &&
            !!this.trimValue(formState.age)
        );
    }

    static isAuthFormValidates(formState: FormData) {
        return !!this.trimValue(formState.email) && !!this.trimValue(formState.password);
    }
}
