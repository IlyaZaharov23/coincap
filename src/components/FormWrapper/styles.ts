import { black, bluePrimary, lightGray } from "shared/constants/colors";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: `2.5px solid ${bluePrimary}`,
        borderRadius: "10px",
        backgroundColor: lightGray,
        padding: "2rem",
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
