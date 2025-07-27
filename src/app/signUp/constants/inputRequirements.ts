import {
    AGE_REQUIREMENT_KEYS,
    CONFIRM_PASSWORD_KEYS,
    EMAIL_REQUIREMENT_KEYS,
    PASSWORD_REQUIREMENT_KEYS,
    USERNAME_REQUIREMENT_KEYS,
} from "shared/constants/formRequirements";

export const passwordRequirementsMap = {
    [PASSWORD_REQUIREMENT_KEYS.EMPTY]: "This field cannot be empty.",
    [PASSWORD_REQUIREMENT_KEYS.WRONG]: "Password doesn't meet all requirements",
    [PASSWORD_REQUIREMENT_KEYS.LENGTH]: "Password must be at least 8 characters long.",
    [PASSWORD_REQUIREMENT_KEYS.UPPER_CASE]: "Password must contain at least one uppercase letter (A-Z).",
    [PASSWORD_REQUIREMENT_KEYS.LOWER_CASE]: "Password must contain at least one lowercase letter (a-z).",
    [PASSWORD_REQUIREMENT_KEYS.DIGIT]: "Password must contain at least one digit (0-9).",
    [PASSWORD_REQUIREMENT_KEYS.SYMBOL]: "Password must contain at least one special character (!@#$% etc.).",
};

export const passwordMessages = Object.entries(passwordRequirementsMap)
    .filter(([key]) => key !== PASSWORD_REQUIREMENT_KEYS.EMPTY && key !== PASSWORD_REQUIREMENT_KEYS.WRONG)
    .map(([key, value]) => {
        return { key, value };
    });

export const emailRequirementsMap = {
    [EMAIL_REQUIREMENT_KEYS.EMPTY]: "This field cannot be empty.",
    [EMAIL_REQUIREMENT_KEYS.EXIST]: "This email is already exists.",
    [EMAIL_REQUIREMENT_KEYS.FORMAT]: "Invalid email format (example: user@example.com).",
};

export const usernameRequirementsMap = {
    [USERNAME_REQUIREMENT_KEYS.EMPTY]: "This field cannot be empty.",
    [USERNAME_REQUIREMENT_KEYS.EXIST]: "This username is already exists.",
};

export const ageRequirementsMap = {
    [AGE_REQUIREMENT_KEYS.EMPTY]: "This field cannot be empty.",
    [AGE_REQUIREMENT_KEYS.MIN_AGE]: "You must be 18 years or older.",
    [AGE_REQUIREMENT_KEYS.IS_NAN]: "Please enter a valid number",
};

export const confirmPasswordMap = {
    [CONFIRM_PASSWORD_KEYS.EMPTY]: "This field cannot be empty.",
    [CONFIRM_PASSWORD_KEYS.WRONG]: "Passwords do not match. Please make sure both passwords are identical.",
};
