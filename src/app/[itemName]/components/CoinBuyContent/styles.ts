import { darkGray } from "shared/constants/colors";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: "2rem",
    },
    titleWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: "500",
        color: darkGray,
    },
};
