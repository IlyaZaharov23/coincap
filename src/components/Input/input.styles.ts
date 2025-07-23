import { black, errorRed } from "shared/constants/colors";

export const styles = {
    inputWrapper: (hasError: boolean | undefined) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        marginBottom: hasError ? "0" : "1.125rem",
        gap: "0",
    }),
    label: {
        fontSize: "0.75rem",
        fontWeight: "500",
        color: black,
        marginLeft: "0.25rem",
        marginBottom: "0.25rem",
    },
    errorText: {
        fontSize: "0.75rem",
        fontWeight: "500",
        color: errorRed,
        marginLeft: "0.25rem",
    },
};
