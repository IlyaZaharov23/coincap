export const toastConfigs = {
    error: {
        title: "Error",
        status: "error" as const,
        duration: 6000,
        isClosable: true,
    },
    success: {
        title: "Success",
        status: "success" as const,
        duration: 4000,
        isClosable: true,
    },
    warning: {
        title: "Warning",
        status: "warning" as const,
        duration: 4000,
        isClosable: true,
    },
    info: {
        title: "Info",
        status: "info" as const,
        duration: 4000,
        isClosable: true,
    },
};
