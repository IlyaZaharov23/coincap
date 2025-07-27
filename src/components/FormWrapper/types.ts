import { ReactNode } from "react";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FormState } from "types/types";

export type FormData = {
    email: string;
    password: string;
    age?: number;
    username?: string;
};

export type FormWrapperPropsType = {
    image: string | StaticImport;
    buttonTitle: string;
    formTitle: string;
    textButtonTitle: string;
    textButtonHelper?: string;
    isRegistrationFlow?: boolean;
    children: ReactNode;
    navigate: () => void;
    onSubmit: () => void;
    regFormState?: FormState;
    authFormState?: FormData;
};
