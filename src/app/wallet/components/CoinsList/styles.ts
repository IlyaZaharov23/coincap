import { darkGray } from "shared/constants/colors";

export const styles = {
    wrapper: {
        width: "100%",
        padding: "2rem",
        height: "100%",
        gap: "1rem",
    },
    topWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "1rem 3rem",
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "500",
        color: darkGray,
    },
    totalWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "0",
        marginTop: "1rem",
    },
    totalTitle: {
        fontSize: "1.25rem",
        fontWeight: "300",
        color: darkGray,
    },
    totalValue: {
        fontSize: "1.25rem",
        fontWeight: "500",
        color: darkGray,
    },
};
