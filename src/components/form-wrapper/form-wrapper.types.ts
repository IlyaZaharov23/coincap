import { ReactNode } from "react";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
    children: ReactNode;
    formData: FormData;
};
