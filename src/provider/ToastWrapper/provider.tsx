import React from "react";

import { useToast } from "@chakra-ui/react";

import { Toast } from "utils/toast";

import { toastConfigs } from "./config";

export const ToastProvider = () => {
    const toast = useToast();

    React.useEffect(() => {
        Toast.error = (message, options) => {
            toast({
                ...toastConfigs.error,
                description: message,
                ...options,
            });
        };

        Toast.success = (message, options) => {
            toast({
                ...toastConfigs.success,
                description: message,
                ...options,
            });
        };

        Toast.warning = (message, options) => {
            toast({
                ...toastConfigs.warning,
                description: message,
                ...options,
            });
        };

        Toast.info = (message, options) => {
            toast({
                ...toastConfigs.info,
                description: message,
                ...options,
            });
        };
    }, [toast]);

    return null;
};
