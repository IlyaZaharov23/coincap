import { black, errorRed } from "shared/constants/colors";

export const styles = {
    inputWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: "1rem",
    },
    label: {
        fontSize: "0.75rem",
        fontWeight: "500",
        color: black,
        marginLeft: "0.25rem",
    },
    errorText: {
        fontSize: "0.75rem",
        fontWeight: "500",
        color: errorRed,
        marginLeft: "0.25rem",
    },
};
