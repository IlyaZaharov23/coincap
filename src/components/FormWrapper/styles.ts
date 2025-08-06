import { black, borderGray, formGray } from "shared/constants/colors";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: `2px solid ${borderGray}`,
        borderRadius: "10px",
        backgroundColor: formGray,
        padding: "2rem",
        boxShadow: `0 4px 12px ${black}3A, 0 2px 6px ${black}3A`,
    },
    text: {
        fontSize: "2rem",
        fontWeight: "700",
        color: black,
        marginBottom: "1rem",
    },
    textButtonWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    helperText: {
        fontSize: "1rem",
        fontWeight: "500",
        color: black,
    },
    confirmButton: {
        marginTop: "1rem",
        width: "300px",
    },
    textButton: {
        padding: 0,
    },
    secondaryButton: {
        width: "300px",
    },
};
