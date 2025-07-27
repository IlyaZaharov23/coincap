import { UseToastOptions } from "@chakra-ui/react";

type ToastFunction = (message: string, options?: Partial<UseToastOptions>) => void;

export const Toast = {
    error: (() => {}) as ToastFunction,
    success: (() => {}) as ToastFunction,
    warning: (() => {}) as ToastFunction,
    info: (() => {}) as ToastFunction,
};
