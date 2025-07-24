import { black, bluePrimary, borderGray } from "shared/constants/colors";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: `2px solid ${bluePrimary}`,
        borderRadius: "20px",
        padding: "1.5rem 2rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.05)",
        width: "500px",
    },
    topWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        width: "100%",
    },
    input: {
        borderRadius: "6px 0 0 6px",
        width: "100%",
        borderColor: borderGray,
        borderRight: "none",
    },
    select: {
        borderRadius: "0 6px 6px 0",
        width: "100%",
        marginTop: "0.25rem",
        height: "42px",
        borderColor: borderGray,
    },
    fullWidthSelect: {
        width: "100%",
        height: "42px",
        borderColor: borderGray,
        borderRadius: "6px",
    },
    bottomWrapper: {
        width: "100%",
    },
    button: {
        marginTop: "1rem",
        width: "100%",
    },
    helperText: {
        fontSize: "0.75rem",
        fontWeight: "500",
        color: black,
    },
};
